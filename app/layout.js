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
import AnimatedBackground from "./components/helper/animated-background";

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
        <title>Santhosh Kumar M — Full Stack & AI Engineer</title>
        <meta
          name="description"
          content="Santhosh Kumar M — Full Stack & AI Engineer with 3+ years of experience building scalable web apps and AI-powered features (LLMs, RAG, vector search) using React, Next.js, Node.js, Python and AWS."
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
        <AnimatedBackground />
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-[#1e2235]">
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
