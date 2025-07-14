/* eslint-disable @typescript-eslint/no-explicit-any */
export const devtoLoader = ({ src, width, quality }: any) => {
  const encodedSrc = encodeURIComponent(src);
  return `https://media2.dev.to/dynamic/image/width=${width},height=${Math.floor(
    width / 2
  )},fit=cover,gravity=auto,format=auto/${encodedSrc}?q=${quality || 75}`;
};
