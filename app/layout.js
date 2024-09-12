"use client";
import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import { useEffect } from "react";
import "./css/card.scss";
import "./css/globals.scss";
import ScrollToTop from "./components/helper/scroll-to-top";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-TJ9ZPM3JKH";
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "G-TJ9ZPM3JKH");
  }, []);

  return (
    <html lang="en">
      <head>
        <title>Santhoshkumar personal porfolio</title>
        <meta
          name="description"
          content="Hi, I&#039;m Santhosh Kumar. I’m a passionate and enthusiastic software developer with over a year of experience at Genpixels Tech Pvt Ltd in Coimbatore.&lt;br /&gt;&lt;br /&gt;    I’m a quick learner who thrives on tackling new challenges and solving problems..."
        ></meta>
        <meta
          name="keywords"
          content="portfolio,my portfolio,select portfolio,portfolio website,portfolio examples"
        ></meta>
        <meta name="robots" content="index, follow"></meta>
        <meta
          httpEquiv="Content-Type"
          content="text/html; charset=utf-8"
        ></meta>
        {/* open graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Santhoshkumar Portfolio" />
        <meta
          property="og:url"
          content="https://www.santhoshkumar-portfolio.com/"
        />
        <meta
          property="og:image"
          content="https://www.santhoshkumar-portfolio.com/_next/image?url=%2Fprofile.jpeg&w=640&q=75"
        />
        <meta
          property="og:description"
          content="Hi, I'm Santhoshkumar do you want to know about my professional career"
        />
        <meta name="language" content="English"></meta>
      </head>
      <body className={inter.className}>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
        <Footer />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}
