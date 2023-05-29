import React, { useState } from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { BiBomb } from 'react-icons/bi'
import CornerBorder from '../components/CornerBorder';
import 'react-quill/dist/quill.snow.css'
import dynamic from 'next/dynamic'
import '@animxyz/core'
import { useRouter } from 'next/router';
import Head from 'next/head';
const QuillNoSSRWrapper = dynamic(import('react-quill'), {	
    ssr: false,
    loading: () => <p>Loading ...</p>,
    })
const Sendemail = () => {
    const [data, setData] = useState({ from: 'econ@gmail.com', title: 'anonymous', to: '', subject: '', body: '', count: '1' });
    const [mailNumber, setMailNumber] = useState(0);
    const [mailStop, setMailStop] = useState(0);
    const router = useRouter();
    var i=0;
    const handleOnChange = (e) => {
        e.preventDefault();
        console.log(e.target.name)
        setData({ ...data, [e.target.name]: e.target.value });
        console.log(data);
    }
    const setBody = e =>{
        setData({...data, body:e});
    }
    const handleOnSubmit = async (e) => {
        e.preventDefault();
        if (!data.from || !data.title || !data.to || !data.subject || !data.body || !data.count) {
            alert("Please fill all the fields");
        }
        console.log(data)
        if (typeof window != 'undefined') {
            let sendMailWindow = document.getElementById("sendmailwindow");
            sendMailWindow.classList.toggle('hidden');
            sendMailWindow.classList.remove("xyz-in");
            sendMailWindow.removeAttribute("xyz");
            sendMailWindow.setAttribute('xyz', 'up-100%');
            sendMailWindow.classList.add("xyz-out");
            document.getElementById('loadingmodal').classList.toggle('hidden');
        }
        for(i; i<+data.count; i++){
            const response = await fetch('/api/sendmail', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(data)
            })
            setMailNumber(mailNumber=>mailNumber+1);
        }
        document.getElementById('loader-image').setAttribute('src', '/images/loader-stopped.png');
        
    }
    const sendNewMail = ()=>{
        if(typeof window!='undefined'){
            router.push('/');
        }
    }
    //  
    // const stopMail = ()=>{
    //     document.getElementById('loader-image').setAttribute('src', '/images/loader-stopped.png');
    //     console.log('stopmail hitted');
    //     i = +data.count;
    // }
    const clearData = ()=>{
        setData({ from: 'econ@gmail.com', title: 'anonymous', to: '', subject: '', body: '', count: '1' })
    }
    
    return (
        <>
            <Head>
                <title>Send Mail - ECON</title>
                <meta name="description" content="Send email anonymously..." />
            </Head>
            <div className='text-[#A1ECFB]'>
                <div className="scify-bg bg-[url('/images/space.gif')] bg-no-repeat bg-cover bg-center  w-full h-screen -z-10 fixed top-0 right-0"></div>
                <div className="border-b-4 border-[#029DBB] font-[titlium]">
                    <Navbar />
                </div>
                <div style={{ height: 'calc(100vh - 120px)' }} className=" overflow-y-auto overflow-x-auto">
                    <form onSubmit={handleOnSubmit} id="sendmailwindow" className=" md:w-[700px] w-[96%] m-auto border border-[#029DBB] p-2 md:mt-5 mt-3 text-xl relative xyz-in" xyz="short-100%  delay-3  ">
                        <CornerBorder />
                        <div className=" container m-auto mt-3 px-2 border-[#26DAFD] font-[titlium] flex justify-start xyz-in " xyz="fade up flip-down stagger ease-out-back   ">
                            <div className=' flex items-center'>
                                <p className='text-[#26DAFD] xyz-nested'>From:</p>
                                <h2 className='ml-1 xyz-nested float-left '> {data.title ? data.title : 'anonymous'} </h2>
                            </div>
                            <select name="from" onChange={handleOnChange} className=' bg-transparent border-none focus:outline-none xyz-nested' id="from">
                                <option className='bg-[#232323]' value="econ.firstmail@gmail.com">{"<econ.firstmail@gmail.com>"}</option>
                                {/* <option className='bg-[#232323]' value="econ3@gmail.com">{"<econ3@gmail.com>"}</option>
                                <option className='bg-[#232323]' value="econ4@gmail.com">{"<econ4@gmail.com>"}</option>
                                <option className='bg-[#232323]' value="econ1@gmail.com">{"<econ1@gmail.com>"}</option>
                                <option className='bg-[#232323]' value="econ5@gmail.com">{"<econ5@gmail.com>"}</option> */}
                            </select>
                        </div>
                        <div className=" container m-auto mt-3 px-2 border-[#26DAFD] font-[titlium] flex justify-between items-center xyz-in" xyz="fade up flip-down stagger ease-out-back   ">
                            <p className='text-[#26DAFD] xyz-nested'>Title:</p>
                            <input type="text" name='title' value={data.title} onChange={handleOnChange} className='w-full ml-2 bg-transparent border-b border-[#26DAFD] focus:outline-none font-[cascadia] text-[#349FE8] xyz-nested' />
                        </div>
                        <div className=" container m-auto mt-3 px-2 border-[#26DAFD] font-[titlium] flex justify-between items-center xyz-in" xyz="fade up flip-down stagger ease-out-back   ">
                            <p className='text-[#26DAFD] xyz-nested'>To:</p>
                            <input type="email" name='to' value={data.to} onChange={handleOnChange} multiple className='w-full ml-2 bg-transparent border-b border-[#26DAFD] focus:outline-none  font-[cascadia] text-[#349FE8] xyz-nested' />
                        </div>
                        <div className=" container m-auto mt-3 px-2 border-[#26DAFD] font-[titlium] flex justify-between items-center xyz-in" xyz="fade up flip-down stagger ease-out-back   ">
                            <p className='text-[#26DAFD] xyz-nested'>Subject:</p>
                            <input type="text" name='subject' value={data.subject} onChange={handleOnChange} className='w-full ml-2 bg-transparent border-b border-[#26DAFD] focus:outline-none  font-[cascadia] text-[#349FE8] xyz-nested' />
                        </div>
                        <div className=" container m-auto mt-3 px-2 border-[#26DAFD] font-[titlium] flex-col justify-between items-center xyz-in" xyz="fade up flip-down stagger ease-out-back   ">
                            <p className='text-[#26DAFD] xyz-nested'>Compose box:</p>
                            {/* <textarea type="text" name='body' value={data.body} onChange={handleOnChange} className='w-full h-28 ml-2 mt-1 bg-transparent border-b border-[#26DAFD] focus:outline-none  font-[cascadia] text-[#349FE8] xyz-nested' /> */}
                        <QuillNoSSRWrapper  onChange={setBody} theme="snow" />
                        </div>
                        <div className=" container m-auto mt-3 px-2 border-[#26DAFD] font-[titlium] flex justify-between items-center xyz-in" xyz="fade up flip-down stagger ease-out-back   ">
                            <div className='flex xyz-nested' xyz="fade up flip-down stagger ease-out-back">
                                <p className='text-[#26DAFD] xyz-nested'>Count:</p>
                                <input type="number" name='count' value={data.count} onChange={handleOnChange} max={99} min={1} className='ml-2 w-[40px] bg-transparent border-b border-[#26DAFD] focus:outline-none  font-[cascadia] text-[#349FE8] text-base flex justify-center text-center xyz-nested' placeholder='01' />
                            </div>
                            <button type='submit' className='border border-[#26DAFD] px-2 py-1 flex items-center hover:text-white xyz-in' xyz="short-100%">
                                <BiBomb className='mr-1 xyz-nested' /> <span className='xyz-nested'>Boom</span>
                            </button>
                        </div>
                    </form>
                    {/* Loading animation */}
                    <div id='loadingmodal' className="m-auto hidden md:w-[700px] w-[96%]  border border-[#029DBB] p-2 md:mt-5 mt-3 text-xl relative xyz-in" xyz="short-100%   ">
                        <CornerBorder />
                        <img src="/images/loader.gif" id='loader-image' className='w-[150px] m-auto' alt="" />
                        <div className="container m-auto mt-3 md:mt-5 font-[titlium] text-[#26DAFD] xyz-in text-center" xyz="fade down   ">
                            {mailNumber>0 && `${mailNumber} mail sent to ${data.to}`}
                        </div>
                        <div className="container justify-center my-6 font-[titlium] text-[#A1ECFB] xyz-in text-center  flex items-center" xyz="fade down   ">
                            <button onClick={sendNewMail} className="relative mx-3 px-2 py-2 hover:bg-[#26DAFD] hover:text-[#A1ECFB] hover:text-[rgba(255,255,255,255.1)]">
                                <CornerBorder size={10}/>
                                Home
                            </button>
                            {/* <button onClick={stopMail} className="relative mx-3 px-2 py-2 hover:bg-[#26DAFD] hover:text-[#A1ECFB] hover:text-[rgba(255,255,255,255.1)]">
                                <CornerBorder size={10}/>
                                Stop
                            </button> */}
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Sendemail