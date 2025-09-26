import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Explore, homeStyle } from '../assets/assets1'

const Category = () => {

    const navigate = useNavigate()
    return (
        <div>
            <h1 className='text-4xl libertinus mt-10'>Popular Collection</h1>

            <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 mt-5 mx-auto gap-10'>

                <div  onClick={() => navigate('/explore/graffiti_Background')} className='relative group overflow-hidden hover:-translate-y-1 transition-all duration-300'>
                    <div className='flex items-center gap-2'>
                        <img src={homeStyle.Home11} className='h-[200px] w-[200px] rounded-t-xl object-cover' alt="image" />
                        <img src={Explore.git1} className='h-[200px] w-[190px] rounded-t-xl object-cover' alt="" />
                    </div>
                    <img src={Explore.git4} className='h-[200px] w-[404px] rounded-b-xl object-cover mt-2' alt="" />

                    <div className='group absolute h-[90%] rounded-xl inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-300'></div>

                    <h2 className='mt-3 text-2xl libertinus '>Graffiti Background</h2>

                </div>

                <div onClick={() => navigate('/explore/abstract')} className='relative group overflow-hidden hover:-translate-y-1 transition-all duration-300 '>
                    <img src={Explore.ab3} className='h-[200px] w-[404px] rounded-t-xl object-cover mb-2' alt="" />
                    <div className='flex items-center gap-2'>
                        <img src={Explore.ab4} className='h-[200px] rounded-b-xl w-[200px] object-cover' alt="image" />
                        <img src={Explore.ab2} className='h-[200px] w-[190px] rounded-b-xl object-cover' alt="" />
                    </div>
                    <h2 className='mt-3 text-2xl libertinus '>Abstract Art Background</h2>

                    <div className='group absolute h-[90%] rounded-xl inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-300'></div>

                </div>

                <div onClick={() => navigate('/explore/flower')} className='relative group overflow-hidden hover:-translate-y-1 transition-all duration-300 '>
                    <div className='flex items-center gap-2'>
                        <img src={Explore.fl2} className='h-[200px] rounded-t-xl w-[200px] object-cover' alt="image" />
                        <img src={Explore.fl5} className='h-[200px] w-[190px] rounded-t-xl object-cover' alt="" />
                    </div>
                    <img src={Explore.fl1} className='h-[200px] w-[404px] object-cover mt-2 rounded-b-xl' alt="" />
                    <h2 className='mt-3 text-2xl libertinus '>Flower Background</h2>

                    <div className='group absolute h-[90%] rounded-xl inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-300'></div>

                </div>
            </div>

            <h1 className='text-4xl libertinus mt-10'> Recommended Collection for you</h1>

            <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 mt-5 mx-auto gap-10'>
                <div  onClick={() => navigate('/explore/night')} className='relative group overflow-hidden hover:-translate-y-1 transition-all duration-300 '>
                    <div className='flex items-center gap-2'>
                        <img src={Explore.n3} className='h-[200px] w-[200px] rounded-t-xl object-cover' alt="image" />
                        <img src={Explore.n2} className='h-[200px] w-[190px] rounded-t-xl object-cover' alt="" />
                    </div>
                    <img src={Explore.n1} className='h-[200px] w-[404px] rounded-b-xl object-cover mt-2' alt="" />
                    <h2 className='mt-3 text-2xl libertinus '>Night Background</h2>

                    <div className='group absolute h-[90%] rounded-xl inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-300'></div>

                </div>

                <div onClick={() => navigate('/explore/anime')} className='relative group overflow-hidden hover:-translate-y-1 transition-all duration-300 '>
                    <img src={Explore.anime1} className='h-[200px] w-[404px] rounded-t-xl object-cover mb-2' alt="" />
                    <div className='flex items-center gap-2'>
                        <img src={Explore.anime2} className='h-[200px] rounded-b-xl w-[200px] object-cover' alt="image" />
                        <img src={Explore.anime3} className='h-[200px] w-[190px] rounded-b-xl object-cover' alt="" />
                    </div>
                    <h2 className='mt-3 text-2xl libertinus '>Anime Background</h2>

                    <div className='group absolute h-[90%] rounded-xl inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-300'></div>

                </div>

                <div onClick={() => navigate('/explore/nature')} className='relative group overflow-hidden hover:-translate-y-1 transition-all duration-300 '>
                    <div className='flex items-center gap-2'>
                        <img src={Explore.nature1} className='h-[200px] rounded-t-xl w-[200px] object-cover' alt="image" />
                        <img src={Explore.nature3} className='h-[200px] w-[190px] rounded-t-xl object-cover' alt="" />
                    </div>
                    <img src={Explore.nature4} className='h-[200px] w-[404px] object-cover mt-2 rounded-b-xl' alt="" />
                    <h2 className='mt-3 text-2xl libertinus '>Nature Background</h2>

                    <div className='group absolute h-[90%] rounded-xl inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-300'></div>

                </div>
            </div>
        </div>
    )
}

export default Category