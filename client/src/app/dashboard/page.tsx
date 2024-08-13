"use client";

import { useGetDashboardMetricsQuery } from "@/state/api";
import { useEffect } from "react";

const Dashboard = () => {
  const { data, isLoading, isError } = useGetDashboardMetricsQuery();

  useEffect(() => {
    if (data) {
      console.log("API RESPONSE", data);
    }
  }, [data]);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:overflow-auto gap-10 pb-4 custom-grid-rows">
      <div className="row-span-3 xl:row-span-6 bg-gray-500" />
    </div>
  );
};

export default Dashboard;
