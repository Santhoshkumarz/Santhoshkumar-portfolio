"use client";

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import { motion } from "framer-motion";
import { SlideIn } from "../../helper/motion-wrapper";

function AboutSection() {
  return (
    <div id="about" className="my-12 lg:my-20 relative scroll-mt-24">
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-gradient-to-b from-violet-600 to-pink-500 w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md shadow-md shadow-violet-200">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-gradient-to-b from-violet-400 to-transparent" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <SlideIn from="left" className="order-2 lg:order-1">
          <p className="font-semibold mb-5 text-teal-600 text-xl uppercase tracking-wide">
            Who I am?
          </p>
          <p
            className="text-gray-600 text-sm lg:text-lg leading-relaxed"
            dangerouslySetInnerHTML={{ __html: personalData.description }}
          />
        </SlideIn>

        <SlideIn from="right" className="flex justify-center order-1 lg:order-2">
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="relative"
          >
            {/* rotating gradient ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-pink-400 via-violet-500 to-teal-400 opacity-70 blur-md"
            />
            <div className="relative rounded-2xl bg-white p-1.5 shadow-lg">
              <Image
                src={personalData.profile}
                width={300}
                height={300}
                alt="Santhosh Kumar M"
                className="rounded-xl transition-all duration-500 hover:scale-[1.02] cursor-pointer object-cover"
              />
            </div>
          </motion.div>
        </SlideIn>
      </div>
    </div>
  );
}

export default AboutSection;
