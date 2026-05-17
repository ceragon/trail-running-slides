import { useState, useEffect, type CSSProperties } from 'react';
import type { DesignSystem, Page, SlideMeta } from '@open-slide/core';

import coverMountain from './assets/cover-mountain.jpg';
import roadRunning from './assets/road-running.jpg';
import mountainTrail from './assets/mountain-trail.jpg';
import chongliRidge from './assets/chongli-ridge.jpg';
import ancientPath from './assets/ancient-stone-path.jpg';
import trailRunner from './assets/trail-runner-silhouette.jpg';
import dataCoros from './assets/data-coros.png';
import coverMogan from './assets/cover-mogan.jpg';
import natureZen from './assets/nature-zen.jpg';
import wserStart from './assets/wser-start.jpg';
import ws100Trail from './assets/ws100-trail.jpeg';
import ws100River from './assets/ws100-river.jpeg';
import ws100Finish from './assets/ws100-finish.jpeg';
import utmbChamonix from './assets/utmb-chamonix.jpg';
import utmbRidge from './assets/utmb-ridge.jpg';
import utmbFinish from './assets/utmb-finish.jpg';
import tdgPeaks from './assets/tdg-peaks.jpg';
import tdgTrail from './assets/tdg-trail.jpg';
import tdgFinish from './assets/tdg-finish.jpg';
import gobiMap from './assets/gobi-map.jpg';
import gobiWarrior from './assets/gobi-warrior.jpg';
import gobiAerial from './assets/gobi-aerial.jpg';
import gobiSaltflat from './assets/gobi-saltflat.jpg';

export const design: DesignSystem = {
  palette: { bg: '#F8F7F4', text: '#1a1814', accent: '#2C5F2D' },
  fonts: {
    display: 'Georgia, "Songti SC", "Noto Serif SC", serif',
    body: '-apple-system, "PingFang SC", "Microsoft YaHei", system-ui, sans-serif',
  },
  typeScale: { hero: 156, body: 36 },
  radius: 8,
};

const moss = '#97BC62';
const darkGreen = '#143819';
const ink = '#1a1814';
const warmWhite = '#F8F7F4';
const paper = '#EFECE4';
const muted = '#6f727c';
const line = 'rgba(26,24,20,0.14)';
const surface = 'rgba(44,95,45,0.08)';

const fill: CSSProperties = {
  width: '100%',
  height: '100%',
  boxSizing: 'border-box',
  fontFamily: 'var(--osd-font-body)',
  overflow: 'hidden',
  position: 'relative',
};

const styles = `
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(22px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;

const fadeUp = (delay = 0): CSSProperties => ({
  animation: `fadeUp 0.72s ease-out ${delay}s both`,
});

const shell = (background = warmWhite, color = ink): CSSProperties => ({
  ...fill,
  background,
  color,
  padding: '96px 132px',
});

const Eyebrow = ({ children, dark = false }: { children: string; dark?: boolean }) => (
  <div
    style={{
      fontSize: 24,
      letterSpacing: '0.18em',
      color: dark ? moss : 'var(--osd-accent)',
      fontWeight: 800,
      marginBottom: 14,
      textTransform: 'uppercase',
    }}
  >
    {children}
  </div>
);

const Heading = ({ children, dark = false, size = 72 }: { children: string; dark?: boolean; size?: number }) => (
  <h2
    style={{
      fontFamily: 'var(--osd-font-display)',
      fontSize: size,
      fontWeight: 900,
      lineHeight: 1.12,
      margin: 0,
      color: dark ? '#fff' : ink,
    }}
  >
    {children}
  </h2>
);

const CaptionedImage = ({
  image,
  title,
  subtitle,
  height = 510,
  objectPosition = 'center',
  dim = 0.5,
}: {
  image: string;
  title: string;
  subtitle: string;
  height?: number | string;
  objectPosition?: string;
  dim?: number;
}) => (
  <div style={{ borderRadius: 12, overflow: 'hidden', position: 'relative', height, background: ink, boxSizing: 'border-box' }}>
    <img
      src={image}
      alt=""
      style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition, display: 'block' }}
    />
    <div
      style={{
        position: 'absolute',
        inset: 0,
        background: `linear-gradient(180deg, rgba(0,0,0,0.04), rgba(0,0,0,${dim}))`,
      }}
    />
    <div style={{ position: 'absolute', left: 34, right: 34, bottom: 30, color: '#fff', boxSizing: 'border-box' }}>
      <div style={{ fontSize: 34, fontWeight: 900, marginBottom: 8 }}>{title}</div>
      <div style={{ fontSize: 25, lineHeight: 1.45, opacity: 0.82 }}>{subtitle}</div>
    </div>
  </div>
);

const Stat = ({ label, value }: { label: string; value: string }) => (
  <div style={{ borderTop: `2px solid ${line}`, paddingTop: 18 }}>
    <div style={{ fontSize: 23, color: muted, marginBottom: 8 }}>{label}</div>
    <div style={{ fontSize: 42, fontWeight: 900, color: 'var(--osd-accent)', lineHeight: 1 }}>{value}</div>
  </div>
);

const Carousel = ({ images, interval = 4000 }: {
  images: { src: string; position?: string }[];
  interval?: number;
}) => {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % images.length), interval);
    return () => clearInterval(t);
  }, [images.length, interval]);
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', borderRadius: 12, overflow: 'hidden', background: ink }}>
      {images.map((img, i) => (
        <img key={img.src} src={img.src} alt="" style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%',
          objectFit: 'cover', objectPosition: img.position || 'center',
          opacity: i === idx ? 1 : 0,
          transition: 'opacity 0.8s ease-in-out',
        }} />
      ))}
    </div>
  );
};


const Cover: Page = () => (
  <div style={{ ...fill, background: darkGreen, color: '#fff' }}>
    <style>{styles}</style>
    <img
      src={coverMountain}
      alt=""
      style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 42%', filter: 'brightness(0.6)' }}
    />
    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(9,26,11,0.86), rgba(9,26,11,0.2) 66%)' }} />
    <div style={{ position: 'absolute', left: 132, right: 132, bottom: 126, boxSizing: 'border-box' }}>
      <div style={{ ...fadeUp(0.1) }}>
        <Eyebrow dark>Trail Running</Eyebrow>
      </div>
      <h1
        style={{
          fontFamily: 'var(--osd-font-display)',
          fontSize: 'var(--osd-size-hero)',
          fontWeight: 900,
          lineHeight: 1.04,
          margin: '18px 0 28px',
          maxWidth: 1120,
          ...fadeUp(0.22),
        }}
      >
        越野跑
        <br />
        用脚步重新认识世界
      </h1>
      <p style={{ fontSize: 40, color: 'rgba(255,255,255,0.78)', margin: 0, ...fadeUp(0.36) }}>
        不是比谁跑得快，是比谁看到的风景多
      </p>
    </div>
  </div>
);

const PageRoadVsTrail: Page = () => (
  <div style={{ ...shell(), display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
    <style>{styles}</style>
    <div style={fadeUp(0.1)}>
      <Heading>你跑步的时候在看什么？</Heading>
      <p style={{ fontSize: 36, color: muted, margin: '16px 0 54px' }}>跑公路是在运动，跑越野是在旅行。</p>
    </div>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 42, ...fadeUp(0.22) }}>
      <CaptionedImage image={roadRunning} title="城市 / 公路" subtitle="节奏稳定，目标清晰：距离、配速、心率。" height={520} objectPosition="center 45%" dim={0.56} />
      <CaptionedImage image={mountainTrail} title="山野 / 林间" subtitle="路况一直在变：爬升、泥土、石阶、风景。" height={520} objectPosition="center 48%" dim={0.56} />
    </div>
  </div>
);

const PageOrigins: Page = () => (
  <div style={{ ...shell(darkGreen, '#fff'), display: 'grid', gridTemplateColumns: '0.85fr 1.15fr', gap: 70, alignItems: 'center' }}>
    <style>{styles}</style>
    <div style={fadeUp(0.1)}>
      <Eyebrow dark>Origin</Eyebrow>
      <Heading dark>越野跑是怎么来的？</Heading>
      <p style={{ fontSize: 36, lineHeight: 1.55, color: 'rgba(255,255,255,0.72)', margin: '30px 0 0' }}>
        公路跑是近代运动项目，越野跑更像人类早就会做的事：翻山、穿林、沿着古道抵达另一个地方。
      </p>
    </div>
    <div style={{ display: 'grid', gap: 18, ...fadeUp(0.22) }}>
      {[
        ['远古时代', '奔跑是移动、生存和探索的能力。'],
        ['古道时代', '驿道、商道、朝圣路把山脉和村镇连起来。'],
        ['1970s 美国', '跑者从公路赛走向山径和百英里。'],
        ['2000s 至今', 'UTMB 出圈，越野跑成为全球旅行语言。'],
      ].map(([era, desc], index) => (
        <div key={era} style={{ display: 'grid', gridTemplateColumns: '82px 1fr', gap: 24, alignItems: 'center', padding: '22px 0', borderBottom: '1px solid rgba(255,255,255,0.14)' }}>
          <div style={{ width: 62, height: 62, borderRadius: '50%', background: moss, color: darkGreen, display: 'grid', placeItems: 'center', fontSize: 28, fontWeight: 900 }}>
            {index + 1}
          </div>
          <div>
            <div style={{ fontSize: 34, fontWeight: 900, color: moss, marginBottom: 6 }}>{era}</div>
            <div style={{ fontSize: 29, color: 'rgba(255,255,255,0.76)', lineHeight: 1.45 }}>{desc}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const PageAncientPaths: Page = () => (
  <div style={{ ...fill, background: darkGreen, color: '#fff' }}>
    <style>{styles}</style>
    <img src={ancientPath} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', filter: 'brightness(0.5)' }} />
    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(10,25,9,0.9), rgba(10,25,9,0.16))' }} />
    <div style={{ position: 'absolute', left: 132, top: 132, width: 1140 }}>
      <div style={fadeUp(0.1)}>
        <Eyebrow dark>Ancient Trails</Eyebrow>
        <Heading dark size={82}>很多赛道，是古人走过的路</Heading>
      </div>
      <p style={{ fontSize: 38, lineHeight: 1.58, color: 'rgba(255,255,255,0.82)', margin: '40px 0 42px', maxWidth: 1050, ...fadeUp(0.22) }}>
        越野跑有意思的地方，不只是自然风景，而是你会用身体重新理解一条路为什么存在。
      </p>
      <div style={{ display: 'flex', gap: 24, ...fadeUp(0.34) }}>
        {['商道', '驿道', '朝圣路', '淘金路线'].map((item) => (
          <div key={item} style={{ border: '1px solid rgba(255,255,255,0.28)', borderRadius: 999, padding: '16px 28px', fontSize: 28, color: '#fff' }}>
            {item}
          </div>
        ))}
      </div>
    </div>
  </div>
);

const PagePersonalData: Page = () => (
  <div style={{ ...shell(), display: 'grid', gridTemplateColumns: '0.98fr 1.02fr', gap: 58, alignItems: 'center' }}>
    <style>{styles}</style>
    <div style={fadeUp(0.1)}>
      <Eyebrow>Personal Experience</Eyebrow>
      <Heading>同样 25 公里，完全不同的世界</Heading>
      <p style={{ fontSize: 35, lineHeight: 1.55, color: muted, margin: '26px 0 48px' }}>
        公路的 25K 是配速题；莫干山的 25K 是路线题、爬升题，也是风景题。
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28 }}>
        <Stat label="距离" value="25.05 km" />
        <Stat label="累计爬升" value="1233 m" />
        <Stat label="用时" value="3:13:05" />
        <Stat label="平均配速" value="7'43&quot;" />
      </div>
      <div style={{ marginTop: 36, background: surface, borderRadius: 10, padding: '22px 26px', fontSize: 28, color: darkGreen, fontWeight: 800 }}>
        2026 莫干山 EMG 20K：总排名 154 / 性别排名 136
      </div>
    </div>
    <div style={{ position: 'relative', height: 760, ...fadeUp(0.22) }}>
      <CaptionedImage image={coverMogan} title="莫干山" subtitle="竹海、古道、短坡和湿滑路面交替出现" height={760} objectPosition="center 45%" />
      <div style={{ position: 'absolute', right: 36, top: 36, width: 252, height: 456, borderRadius: 18, overflow: 'hidden', boxShadow: '0 22px 60px rgba(0,0,0,0.38)', background: '#fff' }}>
        <img src={dataCoros} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
      </div>
    </div>
  </div>
);

const PageMountainMood: Page = () => (
  <div style={{ ...fill, background: warmWhite, color: ink, display: 'grid', gridTemplateRows: '270px 1fr' }}>
    <style>{styles}</style>
    <div style={{ padding: '84px 132px 0', boxSizing: 'border-box', ...fadeUp(0.1) }}>
      <Heading>每座山都有自己的性格</Heading>
      <p style={{ fontSize: 32, color: muted, margin: '12px 0 0' }}>同样是越野，不同地形会把比赛变成完全不同的体验。</p>
    </div>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, ...fadeUp(0.22) }}>
      <CaptionedImage image={chongliRidge} title="崇礼" subtitle="开阔、硬朗、山脊线长，人在风里显得很小。" height="100%" objectPosition="center" dim={0.64} />
      <CaptionedImage image={natureZen} title="莫干山" subtitle="湿润、起伏、绿意层叠，路面细碎多变。" height="100%" objectPosition="center" dim={0.64} />
    </div>
  </div>
);

const PageWhy: Page = () => (
  <div style={{ ...shell(darkGreen, '#fff'), display: 'grid', gridTemplateColumns: '1fr 0.9fr', gap: 70, alignItems: 'center' }}>
    <style>{styles}</style>
    <div style={fadeUp(0.1)}>
      <Eyebrow dark>Why I Run</Eyebrow>
      <Heading dark size={82}>为什么我喜欢越野跑？</Heading>
      <p style={{ fontSize: 40, lineHeight: 1.55, color: 'rgba(255,255,255,0.84)', margin: '38px 0 0' }}>
        城市生活太包裹了。越野让人重新感受到风、泥土、呼吸、疲劳，以及身体真的在场。
      </p>
    </div>
    <div style={{ ...fadeUp(0.22) }}>
      <CaptionedImage image={trailRunner} title="不是逃离城市" subtitle="是偶尔把注意力交还给身体和自然。" height={670} objectPosition="center" dim={0.55} />
    </div>
  </div>
);

const PageGlobalStyles: Page = () => (
  <div style={{ ...shell(), display: 'flex', flexDirection: 'column' }}>
    <style>{styles}</style>
    <div style={{ ...fadeUp(0.1), marginBottom: 42 }}>
      <Eyebrow>Global Trails</Eyebrow>
      <Heading>全球不同的走法</Heading>
    </div>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 22, flex: 1, ...fadeUp(0.22) }}>
      <CaptionedImage image={ws100Trail} title="美国 · Sierra Nevada" subtitle="百英里起源" height="100%" objectPosition="center" dim={0.68} />
      <CaptionedImage image={utmbRidge} title="法国 · Chamonix" subtitle="环勃朗峰" height="100%" objectPosition="center" dim={0.68} />
      <CaptionedImage image={tdgPeaks} title="意大利 · Aosta Valley" subtitle="巨人之旅" height="100%" objectPosition="center" dim={0.68} />
      <CaptionedImage image={gobiAerial} title="中国 · 戈壁" subtitle="荒漠自导航" height="100%" objectPosition="center" dim={0.68} />
    </div>
  </div>
);

const PageWestern100: Page = () => (
  <div style={{ ...shell(), display: 'grid', gridTemplateColumns: '2fr 3fr', gap: 60, alignItems: 'center' }}>
    <style>{styles}</style>
    <div style={fadeUp(0.1)}>
      <Eyebrow>Legendary Races</Eyebrow>
      <Heading size={60}>Western States 100</Heading>
      <p style={{ fontSize: 30, lineHeight: 1.52, color: '#383733', margin: '24px 0 22px' }}>
        1974 年，Gordy Ainsleigh 在原本属于马术耐力赛的 Tevis Cup 路线上跑完了 100 英里，证明人类双脚也能完成这段穿越。此后，这条从 Squaw Valley 到 Auburn 的 Sierra Nevada 山路，成了百英里越野跑的原型。
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 22 }}>
        {['161 km', '爬升 5,500 m', '始于 1974', 'Sierra Nevada'].map((item) => (
          <div key={item} style={{ background: surface, borderRadius: 10, padding: '14px 18px', fontSize: 23, lineHeight: 1.25, color: darkGreen, fontWeight: 800 }}>
            {item}
          </div>
        ))}
      </div>
      <div style={{ borderLeft: `8px solid ${moss}`, paddingLeft: 22, fontSize: 26, lineHeight: 1.42, color: muted }}>
        从雪线到峡谷，从白天跑到黑夜再跑到天亮——百英里重新定义了”一天”的含义。
      </div>
    </div>
    <div style={{ ...fadeUp(0.22), height: 760 }}>
      <Carousel images={[
        { src: wserStart, position: 'center' },
        { src: ws100Trail, position: 'center' },
        { src: ws100River, position: 'center 40%' },
        { src: ws100Finish, position: 'center' },
      ]} />
    </div>
  </div>
);

const PageUTMB: Page = () => (
  <div style={{ ...shell(), display: 'grid', gridTemplateColumns: '3fr 2fr', gap: 60, alignItems: 'center' }}>
    <style>{styles}</style>
    <div style={{ ...fadeUp(0.1), height: 760 }}>
      <Carousel images={[
        { src: utmbChamonix, position: 'center' },
        { src: utmbRidge, position: 'center' },
        { src: utmbFinish, position: 'center' },
      ]} />
    </div>
    <div style={fadeUp(0.22)}>
      <Eyebrow>Legendary Races</Eyebrow>
      <Heading size={60}>UTMB</Heading>
      <p style={{ fontSize: 30, lineHeight: 1.52, color: '#383733', margin: '24px 0 22px' }}>
        UTMB 从 Chamonix 出发，绕过法国、意大利、瑞士三国边境，把经典徒步路线变成了越野跑世界最具符号感的赛事。
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 22 }}>
        {['约 171 km', '爬升约 10,000 m', '法国 Chamonix', '三国穿越'].map((item) => (
          <div key={item} style={{ background: surface, borderRadius: 10, padding: '14px 18px', fontSize: 23, lineHeight: 1.25, color: darkGreen, fontWeight: 800 }}>
            {item}
          </div>
        ))}
      </div>
      <div style={{ borderLeft: `8px solid ${moss}`, paddingLeft: 22, fontSize: 26, lineHeight: 1.42, color: muted }}>
        每年八月，Chamonix 小镇涌入来自全世界的跑者，终点拱门前的欢呼是越野跑最接近世界杯决赛的时刻。
      </div>
    </div>
  </div>
);

const PageTorDesGeants: Page = () => (
  <div style={{ ...shell(), display: 'grid', gridTemplateColumns: '2fr 3fr', gap: 60, alignItems: 'center' }}>
    <style>{styles}</style>
    <div style={fadeUp(0.1)}>
      <Eyebrow>Legendary Races</Eyebrow>
      <Heading size={60}>Tor des Geants</Heading>
      <p style={{ fontSize: 30, lineHeight: 1.52, color: '#383733', margin: '24px 0 22px' }}>
        Tor des Geants 在意大利瓦莱达奥斯塔山谷展开，路线绕过多座四千米级雪山，是更接近远征的超长距离越野。
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 22 }}>
        {['约 330 km', '爬升约 24,000 m', 'Aosta Valley', '昼夜连续推进'].map((item) => (
          <div key={item} style={{ background: surface, borderRadius: 10, padding: '14px 18px', fontSize: 23, lineHeight: 1.25, color: darkGreen, fontWeight: 800 }}>
            {item}
          </div>
        ))}
      </div>
      <div style={{ borderLeft: `8px solid ${moss}`, paddingLeft: 22, fontSize: 26, lineHeight: 1.42, color: muted }}>
        330 公里、24000 米爬升、连续行进数天——这已经不是跑步，是一场关于睡眠、天气和意志力的远征。
      </div>
    </div>
    <div style={{ ...fadeUp(0.22), height: 760 }}>
      <Carousel images={[
        { src: tdgPeaks, position: 'center' },
        { src: tdgTrail, position: 'center' },
        { src: tdgFinish, position: 'center' },
      ]} />
    </div>
  </div>
);

const Page800Gobi: Page = () => (
  <div style={{ ...shell(), display: 'grid', gridTemplateColumns: '3fr 2fr', gap: 60, alignItems: 'center' }}>
    <style>{styles}</style>
    <div style={{ ...fadeUp(0.1), height: 760 }}>
      <Carousel images={[
        { src: gobiMap, position: 'center' },
        { src: gobiWarrior, position: 'center' },
        { src: gobiAerial, position: 'center' },
        { src: gobiSaltflat, position: 'center' },
      ]} />
    </div>
    <div style={fadeUp(0.22)}>
      <Eyebrow>Legendary Races</Eyebrow>
      <Heading size={60}>八百流沙</Heading>
      <p style={{ fontSize: 30, lineHeight: 1.52, color: '#383733', margin: '24px 0 22px' }}>
        八百流沙把玄奘西行、丝绸之路和戈壁自导航放在一起，选手要在荒漠里解决方向、补给和昼夜温差。
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 22 }}>
        {['400 km+', '甘肃敦煌/瓜州', '自导航', '荒漠补给'].map((item) => (
          <div key={item} style={{ background: surface, borderRadius: 10, padding: '14px 18px', fontSize: 23, lineHeight: 1.25, color: darkGreen, fontWeight: 800 }}>
            {item}
          </div>
        ))}
      </div>
      <div style={{ borderLeft: `8px solid ${moss}`, paddingLeft: 22, fontSize: 26, lineHeight: 1.42, color: muted }}>
        这不是”跑得快”的故事，而是”能不能把自己带回来”的故事。
      </div>
    </div>
  </div>
);

const PageCategories: Page = () => (
  <div style={{ ...shell(), display: 'grid', gridTemplateColumns: '0.84fr 1.16fr', gap: 56, alignItems: 'center' }}>
    <style>{styles}</style>
    <div style={fadeUp(0.1)}>
      <Eyebrow>Race Formats</Eyebrow>
      <Heading>不同组别，不同玩法</Heading>
      <p style={{ fontSize: 35, lineHeight: 1.55, color: muted, margin: '28px 0 0' }}>
        不必从超马开始。短距离可以看风景，50K 开始进入系统训练，100K 以上才是长期项目。
      </p>
    </div>
    <div style={{ display: 'grid', gap: 16, ...fadeUp(0.22) }}>
      {[
        ['10-15K', '入门体验', '2-4 小时，适合首野'],
        ['25K', '入门进阶', '半天到一天，能明显感到爬升'],
        ['50K', '真正门槛', '需要补给、节奏和下坡能力'],
        ['100K', '系统挑战', '一天一夜，训练周期更长'],
        ['100M+', '极限项目', '睡眠、天气、心理都进入比赛'],
      ].map(([distance, label, desc], index) => (
        <div
          key={distance}
          style={{
            display: 'grid',
            gridTemplateColumns: '170px 170px 1fr',
            alignItems: 'center',
            borderRadius: 10,
            background: index === 0 ? paper : `rgba(44,95,45,${0.1 + index * 0.06})`,
            padding: '20px 26px',
            border: `1px solid ${line}`,
          }}
        >
          <div style={{ fontSize: 38, fontWeight: 900, color: index > 2 ? darkGreen : 'var(--osd-accent)' }}>{distance}</div>
          <div style={{ fontSize: 28, fontWeight: 900 }}>{label}</div>
          <div style={{ fontSize: 25, color: muted, lineHeight: 1.35 }}>{desc}</div>
        </div>
      ))}
    </div>
  </div>
);

const PageHowToStart: Page = () => (
  <div style={{ ...shell(), display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 58, alignItems: 'center' }}>
    <style>{styles}</style>
    <div style={fadeUp(0.1)}>
      <Eyebrow>Start Small</Eyebrow>
      <Heading>怎么开始？</Heading>
      <div style={{ display: 'grid', gap: 24, marginTop: 42 }}>
        {[
          ['1', '先选 10-15K 或成熟景区短距离'],
          ['2', '找有补给、有志愿者、有清晰路标的比赛'],
          ['3', '先跑一次，再决定要不要升级装备'],
        ].map(([num, text]) => (
          <div key={num} style={{ display: 'grid', gridTemplateColumns: '64px 1fr', gap: 22, alignItems: 'center' }}>
            <div style={{ width: 58, height: 58, borderRadius: '50%', background: 'var(--osd-accent)', color: '#fff', display: 'grid', placeItems: 'center', fontSize: 30, fontWeight: 900 }}>
              {num}
            </div>
            <div style={{ fontSize: 36, lineHeight: 1.35, color: '#30302c' }}>{text}</div>
          </div>
        ))}
      </div>
    </div>
    <div style={{ ...fadeUp(0.22) }}>
      <CaptionedImage image={natureZen} title="推荐首场" subtitle="选一个风景好、赛道成熟的短距离，感受越野跑的第一站。" height={700} objectPosition="center" />
    </div>
  </div>
);

const PageGearGuide: Page = () => (
  <div style={{ ...shell(), display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
    <style>{styles}</style>
    <div style={{ ...fadeUp(0.1), marginBottom: 46 }}>
      <Eyebrow>Gear Guide</Eyebrow>
      <Heading>装备清单：先解决安全，再追求效率</Heading>
    </div>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 30, ...fadeUp(0.22) }}>
      {[
        ['必备', '越野跑鞋 / 背包 / 水 / 手机', darkGreen, '#fff'],
        ['建议', '软水壶 / 充电宝 / 防晒 / 能量补给', surface, ink],
        ['进阶', '登山杖 / 头灯 / 急救毯 / 离线地图', paper, ink],
      ].map(([title, text, bg, color]) => (
        <div key={title} style={{ background: bg, color, borderRadius: 12, padding: '42px 38px', minHeight: 270, border: bg === darkGreen ? 'none' : `1px solid ${line}` }}>
          <div style={{ fontSize: 24, letterSpacing: '0.14em', color: bg === darkGreen ? moss : 'var(--osd-accent)', fontWeight: 900, marginBottom: 24 }}>GEAR</div>
          <div style={{ fontSize: 42, fontWeight: 900, marginBottom: 26 }}>{title}</div>
          <div style={{ fontSize: 31, lineHeight: 1.5, color: bg === darkGreen ? 'rgba(255,255,255,0.82)' : muted }}>{text}</div>
        </div>
      ))}
    </div>
    <div style={{ marginTop: 42, padding: '24px 30px', borderRadius: 10, background: 'rgba(151,188,98,0.2)', color: darkGreen, fontSize: 30, lineHeight: 1.45, fontWeight: 800, ...fadeUp(0.34) }}>
      首场不要把装备买成项目本身。真正先买对的，是一双防滑越野鞋。
    </div>
  </div>
);

export const meta: SlideMeta = { title: '越野跑 — 部门分享' };

export default [
  Cover,
  PageRoadVsTrail,
  PageOrigins,
  PageAncientPaths,
  PagePersonalData,
  PageMountainMood,
  PageWhy,
  PageGlobalStyles,
  PageWestern100,
  PageUTMB,
  PageTorDesGeants,
  Page800Gobi,
  PageCategories,
  PageHowToStart,
  PageGearGuide,
] satisfies Page[];
