import { createViteConfig } from '@open-slide/core/vite';
import { build, mergeConfig } from 'vite';
import { copyFileSync } from 'node:fs';
import { resolve } from 'node:path';

const base = process.env.PAGES_BASE || '/';

function basenamePlugin(base) {
  if (base === '/') return null;
  const basename = base.endsWith('/') ? base.slice(0, -1) : base;

  return {
    name: 'open-slide:gh-pages-basename',
    enforce: 'pre',
    transform(code, id) {
      if (!id.endsWith('/app.tsx') || !id.includes('@open-slide/core/src/app/')) {
        return null;
      }
      const transformed = code.replace(
        '<BrowserRouter>',
        `<BrowserRouter basename="${basename}">`,
      );
      if (transformed === code) {
        console.warn('[gh-pages] WARNING: <BrowserRouter> pattern not found in', id);
        return null;
      }
      return { code: transformed, map: null };
    },
  };
}

async function main() {
  const baseConfig = await createViteConfig({
    userCwd: process.cwd(),
    mode: 'build',
  });

  const plugin = basenamePlugin(base);

  const config = mergeConfig(baseConfig, {
    base,
    ...(plugin ? { plugins: [plugin] } : {}),
  });

  await build(config);

  const distDir = resolve(process.cwd(), 'dist');
  copyFileSync(resolve(distDir, 'index.html'), resolve(distDir, '404.html'));

  console.log(`[gh-pages] Built with base="${base}", 404.html created`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
