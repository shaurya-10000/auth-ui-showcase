import { ImageResponse } from 'next/og';

export const alt = 'Auth UI Showcase';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(to bottom right, #0a0a0a, #1a1a2e)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '24px',
          }}
        >
          <div
            style={{
              width: '64px',
              height: '64px',
              background: 'white',
              borderRadius: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '32px',
              fontWeight: 900,
              color: 'black',
            }}
          >
            A
          </div>
          <div
            style={{
              fontSize: '48px',
              fontWeight: 700,
              letterSpacing: '-0.05em',
              display: 'flex',
            }}
          >
            AuthShowcase<span style={{ color: '#6366f1' }}>.</span>
          </div>
        </div>
        <div
          style={{
            fontSize: '72px',
            fontWeight: 800,
            textAlign: 'center',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            maxWidth: '800px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <span>Premium Auth UI</span>
          <span>Templates for Next.js.</span>
        </div>
        <div
          style={{
            fontSize: '24px',
            color: '#a3a3a3',
            marginTop: '32px',
            display: 'flex',
          }}
        >
          13 unique designs. One-click download.
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}