"use client";

import { skillCategories } from "@/utils/data/skills";
import { motion } from "framer-motion";
import { HiSparkles } from "react-icons/hi2";
import { TbDeviceDesktopCode, TbServer2, TbDatabase, TbCloud, TbTools } from "react-icons/tb";
import SectionTitle from "../../helper/section-title";
import { StaggerGroup, StaggerItem } from "../../helper/motion-wrapper";

const categoryIcon = {
  ai: HiSparkles,
  frontend: TbDeviceDesktopCode,
  backend: TbServer2,
  database: TbDatabase,
  cloud: TbCloud,
  tools: TbTools,
};

function Skills() {
  return (
    <div
      id="skills"
      className="relative z-10 border-t my-12 lg:my-24 border-[#25213b] scroll-mt-24"
    >
      <SectionTitle>Skills</SectionTitle>

      <StaggerGroup className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category) => {
          const Icon = categoryIcon[category.icon] || TbTools;
          return (
            <StaggerItem key={category.id}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="glass glow-border h-full rounded-2xl p-6"
              >
                <div className="mb-5 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-violet-100 to-pink-100 text-xl text-violet-600">
                    <Icon />
                  </span>
                  <h3 className="text-lg font-semibold text-[#1e2235]">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.06 }}
                      className="cursor-default rounded-lg border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs sm:text-sm text-gray-700 transition-colors duration-300 hover:border-violet-400 hover:bg-violet-50 hover:text-violet-700"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </StaggerItem>
          );
        })}
      </StaggerGroup>
    </div>
  );
}

export default Skills;
