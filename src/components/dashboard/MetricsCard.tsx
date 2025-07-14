import { getRatingColor, metricNames } from "@/app/lib/utils/metrics";
import { Metric } from "@/types/metrics";
import React from "react";

const formatValue = (name: string, value: number) => {
  if (name === "CLS") {
    return value.toFixed(3);
  }
  return `${Math.round(value)}ms`;
};

export default function MetricsCard({ metric }: { metric: Metric }) {
  return (
    <div
      key={metric.id}
      className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold dark:text-white">
          {metricNames[metric.name] || metric.name}
        </h3>
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium border ${getRatingColor(
            metric.rating
          )}`}
        >
          {metric.rating}
        </span>
      </div>

      <div className="text-3xl font-bold dark:text-white mb-2">
        {formatValue(metric.name, metric.value)}
      </div>

      <div className="text-sm text-secondary-text dark:text-gray-400 space-y-1">
        <div>Page: {metric.page}</div>
        <div>Time: {new Date(metric.timestamp).toLocaleString()}</div>
      </div>
    </div>
  );
}
