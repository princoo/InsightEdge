"use client";

import { Metric } from "@/types/metrics";

export const WebVitalsStorage = {
  // Save metric to localStorage
  saveMetric: (name: string, value: number,id:string,rating:string, page: string) => {
    if (typeof window === "undefined") return;
    const metric: Metric = {
      name,
      value,
      id,
      page,
      timestamp: new Date().toISOString(),
      rating,
    };

    const existing = WebVitalsStorage.getMetrics();
    const updated = [metric, ...existing].slice(0, 50); // Keep last 50

    localStorage.setItem("web-vitals", JSON.stringify(updated));
  },

  // Get all metrics from localStorage
  getMetrics: (): Metric[] => {
    if (typeof window === "undefined") return [];

    try {
      const stored = localStorage.getItem("web-vitals");
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  },

  // Get latest metric for each type
  getLatestMetrics: (): Metric[] => {
    const all = WebVitalsStorage.getMetrics();
    const latest: { [key: string]: Metric } = {};

    all.forEach((metric) => {
      if (
        !latest[metric.name] ||
        new Date(metric.timestamp) > new Date(latest[metric.name].timestamp)
      ) {
        latest[metric.name] = metric;
      }
    });

    return Object.values(latest);
  },
};
