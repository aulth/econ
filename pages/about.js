import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import CornerBorder from '../components/CornerBorder'
import Link from 'next/link'
import '@animxyz/core';
import Head from 'next/head'
const About = () => {
    return (
        <>
       <Head>
       <title>ECON - About</title>
        <meta name="description" content="ECON - Email Concealer. ECON provides the best solution to protect your.." />
       </Head>
        <div className='text-[#A1ECFB]'>
            <div className="scify-bg bg-[url('/images/space.gif')] bg-no-repeat bg-cover bg-center blur-sm w-full h-screen -z-10 fixed top-0 right-0"></div>

            <div className="border-b-4 border-[rgb(2,157,187)] font-[titlium]">
                <Navbar />
            </div>
            <div style={{ height: 'calc(100vh - 120px)' }} className=" overflow-y-auto overflow-x-auto">
                <div className="md:w-[700px] w-[96%] m-auto border border-[#029DBB] p-2 md:my-5 my-3  text-xl relative xyz-in" xyz="short-100%">
                    <CornerBorder className="" />
                    <h2 className='font-[electrolize] text-3xl font-semibold capitalize mt-3 xyz-in' xyz="fade up flip-down delay-10" >About</h2>
                    <div className="container m-auto my-3 font-[titlium] text-[#26DAFD] xyz-in" xyz="fade up flip-down  delay-10" >
                        ECON - Email Concealer. ECON provides the best solution to protect your <span className='font-semibold'>identity</span> while exposing someone or sending any <span  className=' font-semibold'>secret</span> information with someone. It provides multiple email addresses which can be used to send mail. 
                        It provides the <span  className='font-semibold'>control</span> to send multiple email in just one click. Econ provides you the control of picking a <span  className='font-semibold'>custom sender title</span> while writing the mail. It supports multiple email features. 
                    </div>
                    <h2 className='font-[electrolize] text-3xl font-semibold capitalize mt-5 hover:text-white xyz-in' xyz="fade up flip-down  delay-10">Technology</h2>
                    <div className="container m-auto mt-2 font-[titlium] text-[#26DAFD]">
                        <p className=' xyz-in' xyz="fade up flip-down  delay-10">ECON is built using following technologies - </p>
                        <h2 className='text-[#A1ECFB] xyz-in' xyz="fade up flip-down  delay-10">{">>"} ReactJs</h2>
                        <h2 className='text-[#A1ECFB] xyz-in' xyz="fade up flip-down  delay-10">{">>"} NextJs</h2>
                        <h2 className='text-[#A1ECFB] xyz-in' xyz="fade up flip-down  delay-10">{">>"} NodeJs</h2>
                        <h2 className='text-[#A1ECFB] xyz-in' xyz="fade up flip-down  delay-10">{">>"} Nodemailer</h2>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
        </>
    )
}

export default About