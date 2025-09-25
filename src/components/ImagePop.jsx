import React from 'react'

const ImagePop = () => {
    return (
        <div className=' fixed top-0 left-0 bg-black-50 w-screen h-screen'>
            <div className='border bg-white border-gray-300 p-5 m-6 rounded-xl '>

                {/* ---------------------- Image Navigation ------------------------- */}
                <div className='flex items-center justify-between py-2'>
                    <button className='p-3 hover:bg-[#dddddd54] transition-all duration-500 cursor-pointer rounded-full'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                        </svg>
                    </button>

                    <div className='flex items-center gap-6'>
                        <button className='flex gap-2 text-[19px] px-5 py-3 border border-gray-300 bg-white hover:bg-[#dddddd54] hover:border-gray-500 transition-all duration-500 cursor-pointer rounded-[10px]'>
                            <i className="ri-bookmark-line"></i>
                            <span>Collect</span>
                        </button>

                        <button className='flex gap-2 text-[19px] px-5 py-3 border border-gray-300 rounded-[10px] bg-green-500 hover:bg-green-600 text-white transition-all duration-500 cursor-pointer'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                            </svg>
                            <span>Free Download</span>
                        </button>
                    </div>
                </div>

                {/* ---------------------- Image ------------------------- */}
                <div className='h-[550px] flex items-center justify-center my-5'>
                    <img className='h-[550px] shadow-lg rounded-xl cursor-pointer' src='' alt="" />
                </div>

                {/* ---------------------- Image Footer ------------------------- */}
                <div className='flex items-center justify-between'>
                    <div>
                        <div className='flex items-center gap-2 text-gray-500'>
                            <i className="ri-checkbox-circle-fill"></i>
                            <span>Free to use</span>
                        </div>

                        <div className='flex gap-2 text-gray-500 w-[400px]'>
                            <i className="ri-closed-captioning-fill"></i>
                            <span></span>
                        </div>
                    </div>

                    <div className='flex items-center gap-6'>
                        <button className='flex gap-2 text-[19px] px-5 py-3 border border-gray-300 bg-white hover:bg-[#dddddd54] hover:border-gray-500 transition-all duration-500 cursor-pointer rounded-[10px]'>
                            <i className="ri-error-warning-line text-[22px]"></i>
                            <span>more info</span>
                        </button>

                        <button className='flex gap-2 text-[19px] px-5 py-3 border border-gray-300 bg-white hover:bg-[#dddddd54] hover:border-gray-500 transition-all duration-500 cursor-pointer rounded-[10px]'>
                            <i className="ri-share-line text-[22px]"></i>
                            <span>Share</span>
                        </button>

                        <button className='flex gap-2 text-[19px] px-4 py-4 border border-gray-300 bg-white hover:bg-[#dddddd54] hover:border-gray-500 transition-all duration-500 cursor-pointer rounded-[10px]'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImagePop