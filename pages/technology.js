import React from 'react'
import Navbar from '../components/Navbar'
import CornerBorder from '../components/CornerBorder'
import Footer from '../components/Footer'
const Technology = () => {
    return (
        <div className='text-[#A1ECFB]'>
            <div className="scify-bg bg-[url('/images/space.gif')] bg-no-repeat bg-cover bg-center   w-full h-screen -z-10 fixed top-0 right-0"></div>

            <div className="border-b-4 border-[#029DBB] font-[titlium]">
                <Navbar />
            </div>
            <div style={{ height: 'calc(100vh - 120px)' }} className=" overflow-y-auto overflow-x-auto">
                <div className="md:w-[700px] w-[96%] m-auto border border-[#029DBB] p-2 md:my-5 my-3  text-xl relative xyz-in" xyz="short-100% ">
                    <CornerBorder className="xyz-nested" />
                    <h2 className='font-[electrolize] text-3xl font-semibold capitalize mt-3 xyz-in' xyz="fade up flip-down  delay-10">Technology Used In ECON</h2>
                    <div className="container m-auto my-3 font-[titlium] text-[#26DAFD] xyz-in" xyz="fade up flip-down  delay-10">
                        ECON uses multiple technologies to protect your identity.
                    </div>
                    <div className='xyz-in' xyz="fade up flip-down stagger">
                        <p className='xyz-nested'>ECON is built using following technologies - </p>
                        <h2 className='text-[#A1ECFB] xyz-nested'>{">>"} ReactJs</h2>
                        <h2 className='text-[#A1ECFB] xyz-nested'>{">>"} NextJs</h2>
                        <h2 className='text-[#A1ECFB] xyz-nested'>{">>"} NodeJs</h2>
                        <h2 className='text-[#A1ECFB] xyz-nested'>{">>"} Nodemailer</h2>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Technology