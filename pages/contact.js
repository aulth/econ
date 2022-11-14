import React from 'react'
import Navbar from '../components/Navbar'
import CornerBorder from '../components/CornerBorder'
import Footer from '../components/Footer'
import {AiFillGithub, AiOutlineMail} from 'react-icons/ai'
import Head from 'next/head'
const Contact = () => {
  return (
    <>
    <Head>
        <title>ECON - Contact</title>
        <meta name="description" content="github@aulth" />
      </Head>
    <div className='text-[#A1ECFB]'>
            <div className="scify-bg bg-[url('/images/space.gif')] bg-no-repeat bg-cover bg-center blur-sm w-full h-screen -z-10 fixed top-0 right-0"></div>

            <div className="border-b-4 border-[#029DBB] font-[titlium]">
                <Navbar />
            </div>
            <div style={{ height: 'calc(100vh - 120px)' }} className=" overflow-y-auto overflow-x-auto">
                <div className="md:w-[700px] w-[96%] m-auto border border-[#029DBB] p-2 md:my-5 my-3  text-xl relative xyz-in" xyz="short-100%">
                    <CornerBorder />
                    <h2 className='font-[electrolize] text-3xl font-semibold capitalize mt-3'>Contact</h2>
                    <div className="container m-auto my-3 font-[titlium] text-[#26DAFD] text-lg">
                        <div className="flex items-center">
                        <AiFillGithub className='text-xl mr-1' /> @aulth
                        </div>
                        <div className="flex items-center">
                        <AiOutlineMail className='text-xl mr-1' /> econ.contact@gmail.com
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    </>

  )
}

export default Contact