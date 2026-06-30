"use client";

import { aiHighlights } from "@/utils/data/stats";
import { motion } from "framer-motion";
import { TbMessageChatbot, TbVectorTriangle } from "react-icons/tb";
import { BsDatabaseFillGear, BsRobot } from "react-icons/bs";
import { HiSparkles } from "react-icons/hi2";
import SectionTitle from "../../helper/section-title";
import { StaggerGroup, StaggerItem, FadeIn } from "../../helper/motion-wrapper";

const iconMap = {
  chatbot: TbMessageChatbot,
  search: TbVectorTriangle,
  extract: BsDatabaseFillGear,
  integrate: BsRobot,
};

function AiHighlights() {
  return (
    <div
      id="ai"
      className="relative z-10 border-t my-12 lg:my-24 border-[#25213b] scroll-mt-24"
    >
      <SectionTitle>
        <span className="flex items-center gap-2">
          <HiSparkles className="text-yellow-300" /> AI / LLM Engineering
        </span>
      </SectionTitle>

      <FadeIn className="mx-auto mb-10 max-w-2xl text-center">
        <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
          Building intelligent, context-aware products with Large Language Models,
          Retrieval-Augmented Generation and semantic vector search — from embeddings
          and pipelines to production-ready APIs.
        </p>
      </FadeIn>

      <StaggerGroup className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {aiHighlights.map((item) => {
          const Icon = iconMap[item.icon] || HiSparkles;
          return (
            <StaggerItem key={item.id}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="glass glow-border group h-full rounded-2xl p-6 lg:p-7"
              >
                <div className="mb-4 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-100 to-pink-100 text-2xl text-violet-600 transition-transform duration-300 group-hover:scale-110">
                    <Icon />
                  </div>
                  <h3 className="text-lg lg:text-xl font-semibold text-[#1e2235]">
                    {item.title}
                  </h3>
                </div>
                <p className="mb-5 text-sm lg:text-[0.95rem] text-gray-600 leading-relaxed">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-xs text-violet-700"
                    >
                      {tag}
                    </span>
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

export default AiHighlights;
