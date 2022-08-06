import Head from 'next/head'
import Image from 'next/image'
import Welcome from '../components/main/Welcome'
import HeadComponent from '../components/utils/head'
import Navbar from '../components/utils/Navbar'
import Footer from '../components/utils/Footer'

export default function Home() {
  return (
    <>
      <HeadComponent />
      <div className="flex flex-col min-h-screen justify-between min-h-screen w-full">
          <Navbar />
          <Welcome />
          <Footer />
      </div>
    </>
  )
}
