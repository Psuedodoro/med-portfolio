/* eslint-disable react/no-unescaped-entities */
import '../styles/globals.css'
import '../styles/slider.css'
import Navbar from '../components/Navbar'
import Head from "next/head"

function MyApp({ Component, pageProps }) {
  return (
    <div className="cont bg-[#323345] w-screen h-screen">
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
    
  )
}

export default MyApp
