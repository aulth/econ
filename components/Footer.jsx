import React from 'react'
import { BiCodeAlt } from 'react-icons/bi'
import { MdOutlinePrivacyTip } from 'react-icons/md'
import '@animxyz/core'

const Footer = () => {
  return (
    <footer className='container m-auto fixed bottom-0 flex justify-between border-t border-[#029DBB] p-4 font-[titlium] xyz-in' xyz="short-100% delay-3">
      <div className='flex text-lg  items-center xyz-in'  xyz="fade up delay-6">
        <MdOutlinePrivacyTip className='text-2xl xyz-nested' /> <button className='ml-1 hover:text-white xyz-nested'> Privacy <span className='md:inline hidden'>Policy</span></button>
      </div>
      <div className='flex text-lg  items-center xyz-in'   xyz="fade up delay-6">
        <BiCodeAlt className='text-2xl' /> <button className='ml-1 hover:text-white'> Mohd Usman</button>
      </div>
    </footer>
  )
}

export default Footer