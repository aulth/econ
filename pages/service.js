import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import CornerBorder from '../components/CornerBorder'
import '@animxyz/core'
import Head from 'next/head'
const Service = () => {
  return (
    <>
    <Head>
        <title>ECON - Service</title>
        <meta name="description" content="ECON provides the best solution to protect your.." />
      </Head>
    <div className='text-[#A1ECFB]'>
            <div className="scify-bg bg-[url('/images/space.gif')] bg-no-repeat bg-cover bg-center   w-full h-screen -z-10 fixed top-0 right-0"></div>
            <div className="border-b-4 border-[#029DBB] font-[titlium]">
                <Navbar />
            </div>
            <div style={{ height: 'calc(100vh - 120px)' }} className=" overflow-y-auto overflow-x-auto">
                <div className="md:w-[700px] w-[96%] m-auto border border-[#029DBB] p-2 md:my-5 my-3  text-xl relative xyz-in" xyz="short-100%">
                    <CornerBorder className="xyz-nested" />
                    <h2 className='font-[electrolize] text-3xl font-semibold capitalize mt-3 xyz-in' xyz="fade up flip-down  delay-10">Service</h2>
                    <div className="container m-auto my-3 font-[titlium] text-[#26DAFD] xyz-in" xyz="fade up flip-down  delay-10">
                        ECON - Email Concealer. ECON provides the best solution to protect your <span className='font-semibold'>identity</span> while exposing someone or sending any <span  className=' font-semibold'>secret</span> information with someone. It provides multiple email addresses which can be used to send mail. 
                        It provides the <span  className='font-semibold'>control</span> to send multiple email in just one click. Econ provides you the control of picking a <span  className='font-semibold'>custom sender title</span> while writing the mail. It supports multiple email features. 
                    </div>
                </div>
            </div>
            <Footer />
        </div>
        </>
  )
}

export default Service