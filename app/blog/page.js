 "use client";
import { useState, useEffect } from "react";
import { certificateData } from "../../utils/data/certificates";
import BlogCard from "../components/homepage/blog/blog-card";

function Page() {
  const [certificates, setCertificates] = useState([]);

  useEffect(() => {
    setCertificates(certificateData);
  }, []);
  return (
    <div className="py-8">
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-12 sm:w-24 h-[2px] bg-gradient-to-r from-transparent to-violet-400"></span>
          <span className="mx-1 w-fit rounded-md bg-gradient-to-r from-violet-600 to-pink-500 px-5 py-2 text-2xl font-semibold text-white shadow-md shadow-violet-200">
            All Certificates
          </span>
          <span className="w-12 sm:w-24 h-[2px] bg-gradient-to-l from-transparent to-pink-400"></span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 lg:gap-8 xl:gap-10">
        {certificates.map(
          (certificateData, i) =>
            certificateData?.cover_image && (
              <BlogCard blog={certificateData} key={i} />
            )
        )}
      </div>
    </div>
  );
}

export default Page;
