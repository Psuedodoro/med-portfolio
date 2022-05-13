import type { AppProps } from "next/app";
import "windi.css";
import "../styles/globals.css";
import "../styles/slider.css";

/* eslint-disable react/no-unescaped-entities */
import Navbar from "../components/Navbar";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="cont bg-[#323345] w-screen h-screen">
      {/* Fix this later!! */}
      {/* <Head>
        <script>
          let theme = localStorage.getItem("theme")      
          if (!theme) {
            localStorage.setItem("theme", "dark")
          }
          if (theme && theme == "dark") {
            document.documentElement.classList.add('dark')
          } else if (theme == "light") {
            document.documentElement.classList.add('light')
          }
        </script>
      </Head> */}

      <div className="text-white">
        <Navbar />
        <div className="px-auto">
          <Component {...pageProps} />
        </div>
      </div>
    </div>
  );
}

export default MyApp;
