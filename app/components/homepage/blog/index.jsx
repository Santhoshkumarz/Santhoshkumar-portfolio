import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import BlogCard from "./blog-card";
import SectionTitle from "../../helper/section-title";

function Blog({ certificate }) {
  return (
    <div
      id="blogs"
      className="relative z-10 border-t my-12 lg:my-24 border-gray-200 scroll-mt-24"
    >
      <SectionTitle>Certificates</SectionTitle>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 lg:gap-8 xl:gap-10">
        {certificate &&
          certificate
            .slice(0, 6)
            .map((blog, i) => <BlogCard blog={blog} key={i} />)}
      </div>

      <div className="flex justify-center mt-8 lg:mt-12">
        <Link
          className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-6 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:shadow-lg hover:shadow-violet-300 md:font-semibold"
          role="button"
          href="/blog"
        >
          <span>View More</span>
          <FaArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}

export default Blog;
