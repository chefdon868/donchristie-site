import { ImageResponse } from 'next/og';

export const alt =
  'Don Christie — Chef. Operator. Builder. Traveller. A curious life in progress.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

/**
 * Default Open Graph image for donchristie.com.
 * Editorial cream + brass + ink palette, system serif (Georgia) for the
 * display face — keeps the look without requiring custom font fetching.
 */
export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#FAF7F2',
          padding: '80px 96px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          fontFamily: 'Georgia, serif',
          color: '#2B2620',
        }}
      >
        {/* Top eyebrow */}
        <div
          style={{
            fontFamily: 'system-ui, sans-serif',
            fontSize: 18,
            fontWeight: 600,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: '#8B8378',
          }}
        >
          A curious life in progress
        </div>

        {/* Centre block */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: 140,
              fontWeight: 500,
              lineHeight: 1,
              letterSpacing: '-0.02em',
              color: '#1A1F2E',
            }}
          >
            Don Christie
          </div>
          <div
            style={{
              marginTop: 28,
              fontFamily: 'Georgia, serif',
              fontStyle: 'italic',
              fontSize: 48,
              fontWeight: 500,
              color: '#8E6F32',
              letterSpacing: '-0.01em',
            }}
          >
            Chef. Operator. Builder. Traveller.
          </div>
          {/* Brass accent line */}
          <div
            style={{
              marginTop: 40,
              width: 96,
              height: 2,
              background: '#B8924C',
            }}
          />
          <div
            style={{
              marginTop: 32,
              fontFamily: 'Georgia, serif',
              fontSize: 30,
              color: '#2B2620',
              lineHeight: 1.4,
              maxWidth: 900,
            }}
          >
            Hospitality, AI, travel, wealth, food, and the systems that create
            freedom.
          </div>
        </div>

        {/* Bottom footer */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
          }}
        >
          <div
            style={{
              fontFamily: 'system-ui, sans-serif',
              fontSize: 22,
              color: '#8B8378',
              letterSpacing: '0.02em',
            }}
          >
            donchristie.com
          </div>
          <div
            style={{
              fontFamily: 'Georgia, serif',
              fontStyle: 'italic',
              fontSize: 22,
              color: '#8B8378',
            }}
          >
            A grateful life in progress.
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
