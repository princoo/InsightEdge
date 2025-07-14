"use client";

import { WebVitalsStorage } from "@/app/lib/webVitalsStore";
import { useEffect, useState } from "react";
import MetricsCard from "./dashboard/MetricsCard";
import { Metric } from "@/types/metrics";
import EmptyCard from "./dashboard/EmptyCard";

export default function SimpleDashboard() {
  const [metrics, setMetrics] = useState<Metric[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setMetrics(WebVitalsStorage.getLatestMetrics());
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-secondary-text">Loading metrics...</div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold dark:text-white">
            Web Vitals Dashboard
          </h2>
          <p className="text-secondary-text mt-1">
            {metrics.length > 0
              ? `${metrics.length} metrics collected`
              : "No metrics available"}
          </p>
        </div>
      </div>

      {metrics.length === 0 ? (
        <EmptyCard />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {metrics.map((metric, index) => (
            <MetricsCard key={index} metric={metric} />
          ))}
        </div>
      )}
    </div>
  );
}
