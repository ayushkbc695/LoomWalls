import React from 'react'
import { Explore } from '../assets/assets1'
import { useNavigate } from 'react-router-dom'


const Gallery = () => {

    const navigate = useNavigate()


    return (
        <>
            <h1 className='text-4xl text-center libertinus mt-20'>Explore Our Latest Gallery.</h1>
            <p className='text-sm text-slate-500 playwrite text-center mt-1 max-w-xl mx-auto'>Explore the human experience through portraits and Landscapes that speak without words.</p>

            <div className=' relative mt-20 flex items-center justify-center h-screen'>

                <div onClick={() => navigate('/explore/anime_Scenery')} className='z-10 cursor-pointer'>
                    <div className='relative group h-[400px] w-[400px] rounded-full border-2 overflow-hidden border-gray-200 box'>
                        <img src={Explore.ex11} className='h-full object-cover w-full group-hover:scale-105 transition-all duration-300 ' alt="" />

                        <div className='group absolute flex items-center justify-center inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-all duration-300 '>
                            <p className='text-4xl text-white libertinus'>Anime Scenery</p>
                        </div>
                    </div>
                </div>

                <div onClick={() => navigate('/explore/Tensura')} className='absolute left-90 top-0 cursor-pointer'>
                    <div className='relative group h-[300px] w-[300px] rounded-full border-2 overflow-hidden border-gray-200 box'>
                        <img src={Explore.anime6} className='h-full object-cover w-full group-hover:scale-105 transition-all duration-300' alt="" />

                        <div className='group absolute flex items-center justify-center inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-all duration-300 '>
                            <p className='text-2xl text-white libertinus'>Tensura</p>
                        </div>
                    </div>
                </div>

                <div onClick={() => navigate('/explore/anime_Girls')} className=' absolute left-50 top-50 cursor-pointer'>
                    <div className='relative group h-[300px] w-[300px] rounded-full border-2 overflow-hidden border-gray-200 box'>
                        <img src={Explore.ex3} className='h-full object-cover w-full group-hover:scale-105 transition-all duration-300' alt="" />

                        <div className='group absolute flex items-center justify-center inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-all duration-300 '>
                            <p className='text-2xl text-white libertinus'>Anime Girls</p>
                        </div>
                    </div>
                </div>

                <div onClick={() => navigate('/explore/bleach')} className=' absolute right-90 top-0  cursor-pointer'>
                    <div className='relative group h-[300px] w-[300px] rounded-full border-2 overflow-hidden border-gray-200 box'>
                        <img src={Explore.anime5} className='h-full object-cover w-full group-hover:scale-105 transition-all duration-300' alt="" />

                        <div className='group absolute flex items-center justify-center inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-all duration-300 '>
                            <p className='text-2xl text-white libertinus'>Bleach</p>
                        </div>
                    </div>
                </div>

                <div onClick={() => navigate('/explore/Jujutsu_Kaisen')} className=' absolute right-50 top-50 cursor-pointer'>
                    <div className='relative group h-[300px] w-[300px] rounded-full border-2 overflow-hidden border-gray-200 box'>
                        <img src={Explore.anime4} className='h-full object-cover w-full group-hover:scale-105 transition-all duration-300' alt="" />

                        <div className='group absolute flex items-center justify-center inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-all duration-300 '>
                            <p className='text-2xl text-white libertinus'>Jujutsu Kaisen</p>
                        </div>
                    </div>
                </div>

                <div onClick={() => navigate('/explore/minecraft')} className=' absolute bottom-[-30px] right-115 cursor-pointer'>
                    <div className='relative group h-[300px] w-[300px] rounded-full border-2 overflow-hidden border-gray-200 box'>
                        <img src={Explore.anime9} className='h-full object-cover w-full group-hover:scale-105 transition-all duration-300' alt="" />

                        <div className='group absolute flex items-center justify-center inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-all duration-300 '>
                            <p className='text-2xl text-white libertinus'>Minecraft</p>
                        </div>
                    </div>
                </div>

                <div onClick={() => navigate('/explore/hunter')} className=' absolute bottom-20 left-70 cursor-pointer'>
                    <div className='relative group h-[300px] w-[300px] rounded-full border-2 overflow-hidden border-gray-200 box'>
                        <img src={Explore.anime8} className='h-full object-cover w-full group-hover:scale-105 transition-all duration-300' alt="" />

                        <div className='group absolute flex items-center justify-center inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-all duration-300 '>
                            <p className='text-2xl text-white libertinus'>Hunter x Hunter</p>
                        </div>
                    </div>
                </div>

                <div onClick={() => navigate('/explore/black_Clover')} className=' absolute bottom-20 right-60 cursor-pointer'>
                    <div className='relative group h-[300px] w-[300px] rounded-full border-2 overflow-hidden border-gray-200 box'>
                        <img src={Explore.anime7} className='h-full object-cover w-full group-hover:scale-105 transition-all duration-300' alt="" />

                        <div className='group absolute flex items-center justify-center inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-all duration-300 '>
                            <p className='text-2xl text-white libertinus'>Black CLover</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Gallery