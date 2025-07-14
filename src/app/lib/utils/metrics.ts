export const metricNames: { [key: string]: string } = {
  FCP: "First Contentful Paint",
  LCP: "Largest Contentful Paint",
  FID: "First Input Delay",
  CLS: "Cumulative Layout Shift",
  TTFB: "Time to First Byte",
  INP: "Interaction to Next Paint",
};

export const getRatingColor = (rating: string) => {
  switch (rating) {
    case "good":
      return "bg-green-100 text-green-800 border-green-300";
    case "needs-improvement":
      return "bg-yellow-100 text-yellow-800 border-yellow-300";
    case "poor":
      return "bg-red-100 text-red-800 border-red-300";
    default:
      return "bg-gray-100 text-gray-800 border-gray-300";
  }
};
