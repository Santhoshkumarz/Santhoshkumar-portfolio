"use client";

import { statsData } from "@/utils/data/stats";
import CountUp from "../../helper/count-up";
import { StaggerGroup, StaggerItem } from "../../helper/motion-wrapper";

function Stats() {
  return (
    <div className="relative z-10 my-8 lg:my-12">
      <StaggerGroup className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
        {statsData.map((stat) => (
          <StaggerItem key={stat.id}>
            <div className="glass glow-border group rounded-2xl p-5 text-center transition-all duration-300 hover:-translate-y-1">
              <p className="text-3xl font-extrabold sm:text-4xl">
                <span className="gradient-text">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </span>
              </p>
              <p className="mt-2 text-xs sm:text-sm text-gray-600">{stat.label}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </div>
  );
}

export default Stats;
