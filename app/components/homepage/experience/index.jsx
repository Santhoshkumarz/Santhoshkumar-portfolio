"use client";

import { experiences } from "@/utils/data/experience";
import { motion } from "framer-motion";
import { BsPersonWorkspace } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiCheckCircle } from "react-icons/fi";
import AnimationLottie from "../../helper/animation-lottie";
import SectionTitle from "../../helper/section-title";
import { SlideIn } from "../../helper/motion-wrapper";
import experienceLottie from "/public/lottie/code.json";

function Experience() {
  return (
    <div
      id="experience"
      className="relative z-10 border-t my-12 lg:my-24 border-[#25213b] scroll-mt-24"
    >
      <SectionTitle>Experience</SectionTitle>

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <SlideIn from="left" className="flex justify-center items-start">
            <div className="w-full h-full max-w-md">
              <AnimationLottie animationPath={experienceLottie} />
            </div>
          </SlideIn>

          <div className="relative">
            {/* timeline line */}
            <div className="absolute left-[14px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-pink-500 via-violet-600 to-transparent" />

            <div className="flex flex-col gap-8">
              {experiences.map((exp, i) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                  className="relative pl-12"
                >
                  {/* dot */}
                  <span className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-pink-500 text-white shadow-lg shadow-violet-500/30">
                    <BsPersonWorkspace size={16} />
                  </span>

                  <div className="glass glow-border rounded-2xl p-5">
                    <p className="text-xs sm:text-sm font-medium text-teal-600 mb-1">
                      {exp.duration}
                    </p>
                    <h3 className="text-base sm:text-xl font-semibold text-[#1e2235]">
                      {exp.title}
                    </h3>
                    <p className="mt-1 flex flex-wrap items-center gap-x-2 text-sm text-gray-600">
                      <span className="font-semibold text-violet-600">{exp.company}</span>
                      {exp.location && (
                        <span className="flex items-center gap-1 text-gray-500">
                          <HiOutlineLocationMarker /> {exp.location}
                        </span>
                      )}
                    </p>

                    <ul className="mt-4 flex flex-col gap-2">
                      {exp.points?.map((point, idx) => (
                        <li key={idx} className="flex gap-2 text-xs sm:text-sm text-gray-600">
                          <FiCheckCircle className="mt-0.5 flex-shrink-0 text-teal-500" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
