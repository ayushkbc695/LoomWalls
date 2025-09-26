import React from 'react'
import { Link } from 'react-router-dom'
import { homeStyle } from '../assets/assets1'
import LatestCollection from '../components/LatestCollection'
import LatestLibary from '../components/LatestLibary'
import { CompassIcon } from 'lucide-react'
import { usePageTitle } from '../Hook/usePageTitle'


const Home = () => {

    usePageTitle('LoomWalls');
    
    return (
        <>
            <div className='relative h-[89vh]'>
                <div className=' absolute top-[200px] left-[250px] flex items-center flex-col gap-6'>
                    <h1 className='text-5xl libertinus text-center'>Capturing Life, <br /> One Frame at a Time.</h1>
                    <Link to='/explore' className='cursor-pointer py-5 px-10 bg-teal-300 hover:bg-teal-400 transition duration-300 libertinus rounded-xl text-xl font-semibold '>Explore photos</Link>
                </div>

                <div className=' pointer-events-none absolute bottom-0 flex gap-2 mr-2 right-0'>
                    <img src={homeStyle.Home1} className='w-[250px]  rounded ' alt="" />
                    <img src={homeStyle.Home2} className='w-[250px] rounded ' alt="" />
                    <img src={homeStyle.Home3} className='w-[250px] rounded ' alt="" />
                    <img src={homeStyle.Home4} className='w-[250px] rounded ' alt="" />
                </div>

                <div className=' pointer-events-none absolute bottom-[175px] flex gap-2 mr-2 right-0'>
                    <img src={homeStyle.Home5} className='w-[250px] rounded ' alt="" />
                    <img src={homeStyle.Home6} className='w-[250px] rounded ' alt="" />
                    <img src={homeStyle.Home7} className='w-[250px] rounded ' alt="" />
                </div>
                <div className=' pointer-events-none absolute bottom-[350px] flex gap-2 mr-2 right-0'>
                    <img src={homeStyle.Home8} className='w-[250px] rounded ' alt="" />
                    <img src={homeStyle.Home9} className='w-[250px] rounded ' alt="" />
                </div>
                <div className=' pointer-events-none absolute top-[50px] flex gap-2 mr-2 right-0'>
                    <img src={homeStyle.Home10} className='w-[250px] rounded ' alt="" />
                </div>
            </div>

            <LatestCollection />
            <LatestLibary />

            <div className='mt-20 flex items-center flex-col gap-3'>
                <p className='text-3xl libertinus text-center'>Ready to diving in the World of Imagination</p>
                <Link to='/explore' className='flex items-center gap-2 bg-teal-300 hover:bg-teal-400 hover:text-gray-700 transition-all duration-300 px-10 py-3 text-lg rounded-[10px]'>
                    <CompassIcon className='w-5 h-5' />Explore
                </Link>
            </div>
        </>
    )
}

export default Home