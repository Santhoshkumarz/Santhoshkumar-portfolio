// @flow strict
import Link from "next/link";
import { personalData } from "@/utils/data/personal-data";
import { IoLogoGithub } from "react-icons/io";
import { BiLogoLinkedin } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";

const socials = [
  { href: personalData.github, icon: IoLogoGithub, label: "GitHub" },
  { href: personalData.linkedIn, icon: BiLogoLinkedin, label: "LinkedIn" },
  { href: personalData.twitter, icon: FaXTwitter, label: "Twitter" },
];

function Footer() {
  return (
    <footer className="relative border-t bg-white/80 backdrop-blur-md border-gray-200 text-[#1e2235]">
      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-8 lg:py-10">
        <div className="flex justify-center">
          <div className="absolute top-0 h-[1px] w-1/2 bg-gradient-to-r from-transparent via-violet-400 to-transparent"></div>
        </div>

        <div className="flex flex-col items-center justify-between gap-5 md:flex-row">
          <p className="text-sm text-gray-500 text-center md:text-left">
            © {" "}
            <span className="gradient-text font-semibold">Santhosh Kumar M</span>{" "}
            — Full Stack & AI Engineer. Built with Next.js & Framer Motion.
          </p>

          <div className="flex items-center gap-4">
            {socials.map(({ href, icon: Icon, label }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-gray-50 text-gray-500 transition-all duration-300 hover:-translate-y-1 hover:border-teal-500 hover:text-teal-600"
              >
                <Icon size={20} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
