// utils/shimmer.ts
export function shimmer(w: number, h: number) {
  return `
    <svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
      <defs>
        <linearGradient id="g">
          <stop stop-color="#222" offset="0%" />
          <stop stop-color="#444" offset="20%" />
          <stop stop-color="#666" offset="40%" />
          <stop stop-color="#444" offset="60%" />
          <stop stop-color="#222" offset="80%" />
        </linearGradient>
      </defs>
      <rect width="${w}" height="${h}" fill="#222" />
      <rect width="${w}" height="${h}" fill="url(#g)">
        <animate attributeName="x" from="-${w}" to="${w}" dur="1.2s" repeatCount="indefinite" />
      </rect>
    </svg>
  `;
}

export function toBase64(str: string) {
  return typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str);
}
