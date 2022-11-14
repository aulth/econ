import React from 'react'

const CornerBorder = () => {
  return (
    <>
      <div className='absolute -top-[5px] -left-[5px] w-6 h-6 border-t-4 border-l-4 border-[#26DAFD]   '></div>
      <div className='absolute -top-[5px] -right-[5px] w-6 h-6 border-t-4 border-r-4 border-[#26DAFD]   '></div>
      <div className='absolute -bottom-[5px] -left-[5px] w-6 h-6 border-b-4 border-l-4 border-[#26DAFD]   '></div>
      <div className='absolute -bottom-[5px] -right-[5px] w-6 h-6 border-b-4 border-r-4 border-[#26DAFD]   '></div>
    </>
  )
}

export default CornerBorder