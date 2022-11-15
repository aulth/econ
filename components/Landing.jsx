import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import Link from 'next/link'
import CornerBorder from './CornerBorder'
import '@animxyz/core'
const Landing = () => {
    return (
        <div className='text-[#A1ECFB] container m-auto'>
            <div className="scify-bg bg-[url('/images/space.gif')] bg-no-repeat bg-cover bg-center scify-bg w-full h-screen -z-10 fixed top-0 right-0"></div>
            <div className="border-b-4 border-[#029DBB] font-[titlium]">
                <Navbar />
            </div>
            <div    className="main-window overflow-y-auto overflow-x-auto">
                <div className="md:w-[700px] w-[96%]  m-auto border border-[#029DBB] p-2 md:my-5 my-3  text-xl relative xyz-in" xyz="short-100% delay-3">
                    <CornerBorder xyz="fade small stagger ease-out-back"/>
                    <h2 className='font-[electrolize] text-3xl font-semibold capitalize xyz-in' xyz="fade up flip-down delay-6">PROTECT YOUR PRIVACY</h2>
                    <div className=" w-[98%] m-auto border-l-4 ml-3 md:mt-5 mt-3 px-2 border-[#26DAFD] font-[titlium] xyz-in" xyz="fade up flip-up delay-6">
                        Mail someone anonymously. Conceal your name as well as your email address while sending mail to someone you do not want to disclose your identity.
                    </div>
                    <div className="container m-auto mt-3 md:mt-5 font-[titlium] text-[#26DAFD] xyz-in" xyz="fade up flip-up delay-6">
                        ECON stands for Email-Concealer is a useful utility that provides a mailbox for multiple email accounts. It completely shields users from exposure to their email and secures it from a variety of attacks.
                    </div>
                    <div className="container flex flex-wrap  m-auto mt-3 md:mt-5 font-[titlium]" xyz="fade small stagger ease-out-back delay-6">
                        <img src="https://img.shields.io/badge/No Cost-Free-blue" className='mx-1 xyz-nested my-1' alt="users" />
                        <img src="https://img.shields.io/badge/100+-Users-important" className='mx-1 xyz-nested my-1' alt="users" />
                        <img src="https://img.shields.io/badge/100+-Email Sent-029DBB" className='mx-1 xyz-nested my-1' alt="users" />
                        <img src="https://img.shields.io/badge/10 Address-Available-brightgreen" className='mx-1 xyz-nested my-1' alt="users" />
                    </div>
                    <Link href="/sendemail"><h2 className='font-[electrolize] text-3xl font-semibold capitalize mt-5 hover:text-white xyz-in' xyz="fade up flip-down delay-6">GET STARTED</h2></Link>
                    <div className="container m-auto mt-2 font-[titlium] text-[#26DAFD]" xyz="fade down stagger ease-out-back flip-up delay-6">
                        <p className='xyz-nested'>The compose box has 4 input fields - </p>
                        <ol className='list-decimal list-inside text-base bg-[#000607] text-[#349FE8] p-2 my-2 font-[cascadia] xyz-nested'>
                            <li>Email address</li>
                            <li>Title</li>
                            <li>Subject</li>
                            <li>Compose box</li>
                        </ol>
                        <p className='xyz-nested'>Email address </p>
                        <div className='text-base bg-[#000607] text-[#349FE8] p-2 my-2 font-[cascadia] xyz-nested'>
                            Pick the email address you want to use to send mail.
                        </div>
                        <p className='xyz-nested'>Title </p>
                        <div className='text-base bg-[#000607] text-[#349FE8] p-2 my-2 font-[cascadia] xyz-nested'>
                            Designate a title to the email you have chosen to use ECON. eg {"=>"} {"Sam <econ@gmail.com>"}
                        </div>
                        <p className='xyz-nested'>Subject </p>
                        <div className='text-base bg-[#000607] text-[#349FE8] p-2 my-2 font-[cascadia] xyz-nested'>
                            Create a subject for your email.
                        </div>
                        <p className='xyz-nested'>Compose box </p>
                        <div className='text-base bg-[#000607] text-[#349FE8] p-2 my-2 font-[cascadia] xyz-nested'>
                            Compose your email content here.
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Landing