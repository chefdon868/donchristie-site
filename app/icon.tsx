import { ImageResponse } from 'next/og';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

/**
 * Favicon — brass square with cream "D" in editorial serif.
 * Matches the site's brass accent on cream palette.
 */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#B8924C',
          color: '#FAF7F2',
          fontSize: 22,
          fontWeight: 600,
          fontFamily: 'Georgia, serif',
          letterSpacing: '-0.02em',
          lineHeight: 1,
        }}
      >
        D
      </div>
    ),
    { ...size },
  );
}
