import React from "react";

const TopContent = () => {
  return (
    <div className='flex flex-col justify-center items-center h-full w-full'>
        <div className='w-[50%] text-white text-center'>
            <h1 className='text-[#f51bbb] text-[38px] p-3 font-bold'>Tantrotsav'23</h1>
            <p className='tracking-[2px] leading-[28px]'>
                Tantrotsav is the annual symposium of 
                Amrita Vishwa Vidyapeetham,Chennai campus 
                consisting of social initiatives and outreach programs 
                throughout the year.
            </p>
            <button className='bg-black text-white transition duration-500 hover:bg-[#2c2c2c] text-[14px] p-2 m-3 rounded-[10px] w-[130px]'>
                Explore
            </button>
        </div>
        {/* <div className="flex justify-around items-center h-full w-full p-[30px]">
      <div className="">
        <h1 className="text-[#f51bbb] text-[50px] p-3 font-bold">
          Tantrotsav'23
        </h1>

        <button className="bg-black text-white transition duration-500 hover:bg-[#2c2c2c] text-[14px] p-2 m-3 rounded-[10px] w-[130px]">
          Explore
        </button>
      </div>
      <div className="">
        <img src="https://tri-nit.com/landing_page_vector.svg" />
      </div>
    </div> */}
    </div>
  )
}
    


export default TopContent;
