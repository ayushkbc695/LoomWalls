import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='flex items-center justify-between mt-20 px-4 sm:px-10 md:px-14 xl:px-24 py-6 border-t-[.1px] border-gray-500'>
            <div className='flex items-center justify-center'>
                <Link to='/'><span className='text-4xl dancing'>LoomWalls</span></Link>
                <div className='w-[1px] h-8 bg-gray-500 mx-10'></div>
                <p className="text-center text-gray-500"> Copyright {new Date().getFullYear()} © LoomWalls. All Right Reserved.</p>
            </div>

            <div className='flex items-center gap-4'>
                <Link className='text-xl border border-gray-500 hover:text-gray-500 transition-all duration-300 p-1 px-2 rounded-full'><i className="ri-facebook-fill"></i></Link>
                <Link className='text-xl border border-gray-500 hover:text-gray-500 transition-all duration-300 p-1 px-2 rounded-full'><i className="ri-twitter-fill"></i></Link>
                <Link className='text-xl border border-gray-500 hover:text-gray-500 transition-all duration-300 p-1 px-2 rounded-full'><i className="ri-instagram-fill"></i></Link>
            </div>
        </div>
    )
}

export default Footer