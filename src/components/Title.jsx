import React from 'react'

const Title = ({ text1, text2 }) => {
    return (
        <div className='relative inline-flex gap-3 items-center mb-3'>
            <h1 className='text-gray-500 libertinus'>{text1} <span className='text-gray-800 libertinus'>{text2}</span></h1>
            <p className='w-8 h-[1.2px] bg-gray-700 sm:h-[2px] sm:w-20 xl:h-[3px] xl:w-30 xl:mt-3'></p>
        </div>
    )
}

export default Title