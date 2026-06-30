"use client";

import { educations } from "@/utils/data/educations";
import { motion } from "framer-motion";
import { PiGraduationCapFill } from "react-icons/pi";
import AnimationLottie from "../../helper/animation-lottie";
import SectionTitle from "../../helper/section-title";
import { SlideIn } from "../../helper/motion-wrapper";
import lottieFile from "/public/lottie/study.json";

function Education() {
  return (
    <div
      id="education"
      className="relative z-10 border-t my-12 lg:my-24 border-[#25213b] scroll-mt-24"
    >
      <SectionTitle>Education</SectionTitle>

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <SlideIn from="left" className="flex justify-center items-start">
            <div className="w-3/4 h-3/4">
              <AnimationLottie animationPath={lottieFile} />
            </div>
          </SlideIn>

          <div className="flex flex-col gap-6">
            {educations.map((education, i) => (
              <motion.div
                key={education.id}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ scale: 1.02 }}
                className="glass glow-border rounded-2xl p-5 text-[#1e2235]"
              >
                <div className="flex justify-end">
                  <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-medium text-teal-700">
                    {education.duration}
                  </span>
                </div>
                <div className="flex items-center gap-x-6 px-1 py-2">
                  <div className="text-violet-500 transition-all duration-300 hover:scale-125">
                    <PiGraduationCapFill size={40} />
                  </div>
                  <div>
                    <p className="text-base sm:text-xl mb-1 font-semibold">
                      {education.title}
                    </p>
                    <p className="text-sm text-gray-500 mb-1">{education.major}</p>
                    <p className="text-sm text-gray-700">{education.institution}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
