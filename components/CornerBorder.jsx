import React from 'react'

const CornerBorder = ({size}) => {
  return (
    <>
      <div style={{height:size?size+'px':'24px', width:size?size+'px':'24px'}} className={`absolute -top-[5px] -left-[5px] border-t-4 border-l-4 border-[#26DAFD]`}></div>
      <div style={{height:size?size+'px':'24px', width:size?size+'px':'24px'}} className={`absolute -top-[5px] -right-[5px]    border-t-4 border-r-4 border-[#26DAFD] `}></div>
      <div style={{height:size?size+'px':'24px', width:size?size+'px':'24px'}} className={`absolute -bottom-[5px] -left-[5px]     border-b-4 border-l-4 border-[#26DAFD] `}></div>
      <div style={{height:size?size+'px':'24px', width:size?size+'px':'24px'}} className={`absolute -bottom-[5px] -right-[5px]     border-b-4 border-r-4 border-[#26DAFD]  `}></div>
    </>
  )
}

export default CornerBorder