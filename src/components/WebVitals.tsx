"use client";

import { WebVitalsStorage } from "@/app/lib/webVitalsStore";
import { usePathname } from "next/navigation";
import { useReportWebVitals } from "next/web-vitals";

export function WebVitals() {
  const pathname = usePathname();
  useReportWebVitals((metric) => {
    WebVitalsStorage.saveMetric(metric.name, metric.value,metric.id,metric.rating,pathname);
    console.log(metric);
  });

  return null;
}
