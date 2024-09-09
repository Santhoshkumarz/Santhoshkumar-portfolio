import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
import ScrollToTop from "./components/helper/scroll-to-top";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Santhoshkumar Portfolio</title>
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
        <meta name="language" content="English"></meta>
        {/* <!-- Google tag (gtag.js) --> */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-TJ9ZPM3JKH"
        ></script>
        <script>
          window.dataLayer = window.dataLayer || []; function gtag()
          {dataLayer.push(arguments)}
          gtag('js', new Date()); gtag('config', 'G-TJ9ZPM3JKH');
        </script>
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
