import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import CornerBorder from '../components/CornerBorder'
import '@animxyz/core'
import Head from 'next/head'
const Disclaimer = () => {
  return (
    <>
     <Head>
        <title>ECON - Service</title>
        <meta name="description" content="ECON provides the best solution to protect your.." />
      </Head>
    <div className='text-[#A1ECFB]' >
            <div className="scify-bg bg-[url('/images/space.gif')] bg-no-repeat bg-cover bg-center blur-sm w-full h-screen -z-10 fixed top-0 right-0"></div>

            <div className="border-b-4 border-[#029DBB] font-[titlium]" >
                <Navbar />
            </div>
            <div style={{ height: 'calc(100vh - 120px)' }} className=" overflow-y-auto overflow-x-auto " >
                <div className="md:w-[700px] w-[96%] m-auto border border-[#029DBB] p-2 md:my-5 my-3  text-xl relative xyz-in" xyz="short-100%">
                    <CornerBorder className="" />
                    <h2 className='font-[electrolize] text-3xl font-semibold capitalize mt-3 xyz-in' xyz="fade up flip-down  delay-10">Disclaimer</h2>
                    <div className="container m-auto my-3 font-[titlium] text-[#26DAFD] xyz-in" xyz="fade up flip-down  delay-10">
                        <p>ECON is built for hiding the identity while exposing someone. It can be used for entertainment. It should not be used to harass someone. Developer of ECON is not responsible for any misuse of this tool</p>
                    </div>
                    <h3 className='xyz-in' xyz="fade up flip-down  delay-10">Date: <span className='text-[#349FE8] font-[cascadia] text-base'>14/11/2022</span></h3>
                </div>
            </div>
            <Footer />
        </div>
    </>

  )
}

export default Disclaimer