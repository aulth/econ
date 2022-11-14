import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { BiBomb } from 'react-icons/bi'
import CornerBorder from '../components/CornerBorder';
import '@animxyz/core'
import Head from 'next/head';
const Sendemail = () => {
    return (
        <>
        <Head>
        <title>Send Mail - ECON</title>
        <meta name="description" content="Send email anonymously..." />
      </Head>
            <div className='text-[#A1ECFB]'>
            <div className="scify-bg bg-[url('/images/space.gif')] bg-no-repeat bg-cover bg-center blur-sm w-full h-screen -z-10 fixed top-0 right-0"></div>
                <div className="border-b-4 border-[#029DBB] font-[titlium]">
                    <Navbar />
                </div>
                <div style={{ height: 'calc(100vh - 120px)' }} className=" overflow-y-auto overflow-x-auto">
                    <div className="md:w-[700px] w-[96%] m-auto border border-[#029DBB] p-2 md:mt-5 mt-3 text-xl relative xyz-in" xyz="short-100%">
                        <CornerBorder/>
                        <div className=" container m-auto mt-3 px-2 border-[#26DAFD] font-[titlium] flex justify-between xyz-in " xyz="fade up flip-down stagger ease-out-back">
                            <p className='text-[#26DAFD] xyz-nested'>From:</p>
                            <h3 className='ml-1 xyz-nested'>anonymous </h3>
                            <select className='w-full bg-transparent border-none focus:outline-none xyz-nested' name="address" id="address">
                                <option className='bg-[#232323]' value="econ2@gmail.com">{"<econ2@gmail.com>"}</option>
                                <option className='bg-[#232323]' value="econ3@gmail.com">{"<econ3@gmail.com>"}</option>
                                <option className='bg-[#232323]' value="econ4@gmail.com">{"<econ4@gmail.com>"}</option>
                                <option className='bg-[#232323]' value="econ1@gmail.com">{"<econ1@gmail.com>"}</option>
                                <option className='bg-[#232323]' value="econ5@gmail.com">{"<econ5@gmail.com>"}</option>
                            </select>
                        </div>
                        <div className=" container m-auto mt-3 px-2 border-[#26DAFD] font-[titlium] flex justify-between items-center xyz-in" xyz="fade up flip-down stagger ease-out-back">
                            <p className='text-[#26DAFD] xyz-nested'>Title:</p>
                            <input type="text" className='w-full ml-2 bg-transparent border-b border-[#26DAFD] focus:outline-none font-[cascadia] text-[#349FE8] xyz-nested' />
                        </div>
                        <div className=" container m-auto mt-3 px-2 border-[#26DAFD] font-[titlium] flex justify-between items-center xyz-in" xyz="fade up flip-down stagger ease-out-back">
                            <p className='text-[#26DAFD] xyz-nested'>To:</p>
                            <input type="email" multiple className='w-full ml-2 bg-transparent border-b border-[#26DAFD] focus:outline-none  font-[cascadia] text-[#349FE8] xyz-nested' />
                        </div>
                        <div className=" container m-auto mt-3 px-2 border-[#26DAFD] font-[titlium] flex justify-between items-center xyz-in" xyz="fade up flip-down stagger ease-out-back">
                            <p className='text-[#26DAFD] xyz-nested'>Subject:</p>
                            <input type="text" className='w-full ml-2 bg-transparent border-b border-[#26DAFD] focus:outline-none  font-[cascadia] text-[#349FE8] xyz-nested' />
                        </div>
                        <div className=" container m-auto mt-3 px-2 border-[#26DAFD] font-[titlium] flex-col justify-between items-center xyz-in" xyz="fade up flip-down stagger ease-out-back">
                            <p className='text-[#26DAFD] xyz-nested'>Compose box:</p>
                            <textarea type="text" className='w-full h-28 ml-2 mt-1 bg-transparent border-b border-[#26DAFD] focus:outline-none  font-[cascadia] text-[#349FE8] xyz-nested' />
                        </div>
                        <div className=" container m-auto mt-3 px-2 border-[#26DAFD] font-[titlium] flex justify-between items-center xyz-in" xyz="fade up flip-down stagger ease-out-back">
                            <div className='flex xyz-nested' xyz="fade up flip-down stagger ease-out-back">
                                <p className='text-[#26DAFD] xyz-nested'>Count:</p>
                                <input type="number" max={99} min={1} className='ml-2 w-[40px] bg-transparent border-b border-[#26DAFD] focus:outline-none  font-[cascadia] text-[#349FE8] text-base flex justify-center text-center xyz-nested' placeholder='01' />
                            </div>
                            <button className='border border-[#26DAFD] px-2 py-1 flex items-center hover:text-white xyz-in' xyz="short-100%">
                                <BiBomb className='mr-1 xyz-nested' /> <span className='xyz-nested'>Boom</span>
                            </button>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Sendemail