import React from 'react'
import { homeStyle } from '../assets/assets1'
import { useNavigate } from 'react-router-dom'

const LatestLibary = () => {

    const navigate = useNavigate()
    return (
        <div className='mt-20'>

            <h1 className="text-5xl font-medium text-center libertinus mx-auto">Our Latest Anime ShowCase</h1>
            <p className="text-sm playwrite text-slate-500 text-center mt-2.5 max-w-2xl mx-auto">A visual journey through our newest works – each piece born from inspiration, shaped by craft, and infused with soul.</p>

            <div className="flex flex-wrap items-center justify-center mt-10 mx-auto gap-4">

                <div onClick={() => navigate('/explore/naruto')} className="relative group overflow-hidden rounded-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer ">
                    <img className="max-w-56 h-80 object-cover " src={homeStyle.lib1} alt="image" />

                    <div className="absolute inset-0 flex flex-col justify-end p-4 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <div className='group-hover:translate-y-[-20px] transition-all duration-300'>
                            <h1 className="text-xl font-medium">Naruto Background</h1>
                            <div className="flex items-center gap-1 text-sm text-white/70">
                                Show More
                                <svg width="16" height="16" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.125 1.625H11.375V4.875" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M5.41602 7.58333L11.3743 1.625" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M9.75 7.04167V10.2917C9.75 10.579 9.63586 10.8545 9.4327 11.0577C9.22953 11.2609 8.95398 11.375 8.66667 11.375H2.70833C2.42102 11.375 2.14547 11.2609 1.9423 11.0577C1.73914 10.8545 1.625 10.579 1.625 10.2917V4.33333C1.625 4.04602 1.73914 3.77047 1.9423 3.5673C2.14547 3.36414 2.42102 3.25 2.70833 3.25H5.95833" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                <div onClick={() => navigate('/explore/anime_Girls')} className="relative group overflow-hidden rounded-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer ">
                    <img className="max-w-56 h-80 object-cover" src={homeStyle.lib2} alt="image" />

                    <div className="absolute inset-0 flex flex-col justify-end p-4 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <div className='group-hover:translate-y-[-20px] transition-all duration-300'>
                            <h1 className="text-xl font-medium">Anime Girlies Background</h1>
                            <div className="flex items-center gap-1 text-sm text-white/70">
                                Show More
                                <svg width="16" height="16" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.125 1.625H11.375V4.875" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M5.41602 7.58333L11.3743 1.625" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M9.75 7.04167V10.2917C9.75 10.579 9.63586 10.8545 9.4327 11.0577C9.22953 11.2609 8.95398 11.375 8.66667 11.375H2.70833C2.42102 11.375 2.14547 11.2609 1.9423 11.0577C1.73914 10.8545 1.625 10.579 1.625 10.2917V4.33333C1.625 4.04602 1.73914 3.77047 1.9423 3.5673C2.14547 3.36414 2.42102 3.25 2.70833 3.25H5.95833" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                <div onClick={() => navigate('/explore/one_piece')} className="relative group overflow-hidden rounded-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer ">
                    <img className="max-w-56 h-80 object-cover" src={homeStyle.lib5} alt="image" />

                    <div className="absolute inset-0 flex flex-col justify-end p-4 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <div className='group-hover:translate-y-[-20px] transition-all duration-300'>
                            <h1 className="text-xl font-medium">One Piece Background</h1>
                            <div className="flex items-center gap-1 text-sm text-white/70">
                                Show More
                                <svg width="16" height="16" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.125 1.625H11.375V4.875" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M5.41602 7.58333L11.3743 1.625" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M9.75 7.04167V10.2917C9.75 10.579 9.63586 10.8545 9.4327 11.0577C9.22953 11.2609 8.95398 11.375 8.66667 11.375H2.70833C2.42102 11.375 2.14547 11.2609 1.9423 11.0577C1.73914 10.8545 1.625 10.579 1.625 10.2917V4.33333C1.625 4.04602 1.73914 3.77047 1.9423 3.5673C2.14547 3.36414 2.42102 3.25 2.70833 3.25H5.95833" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                <div onClick={() => navigate('/explore/demon_Slayer')} className="relative group overflow-hidden rounded-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer ">
                    <img className="max-w-56 h-80 object-cover" src={homeStyle.lib6} alt="image" />

                    <div className="absolute inset-0 flex flex-col justify-end p-4 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <div className='group-hover:translate-y-[-20px] transition-all duration-300'>
                            <h1 className="text-xl font-medium">Demon Slayer Background</h1>
                            <div className="flex items-center gap-1 text-sm text-white/70">
                                Show More
                                <svg width="16" height="16" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.125 1.625H11.375V4.875" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M5.41602 7.58333L11.3743 1.625" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M9.75 7.04167V10.2917C9.75 10.579 9.63586 10.8545 9.4327 11.0577C9.22953 11.2609 8.95398 11.375 8.66667 11.375H2.70833C2.42102 11.375 2.14547 11.2609 1.9423 11.0577C1.73914 10.8545 1.625 10.579 1.625 10.2917V4.33333C1.625 4.04602 1.73914 3.77047 1.9423 3.5673C2.14547 3.36414 2.42102 3.25 2.70833 3.25H5.95833" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                <div onClick={() => navigate('/explore/soloLeveling')} className="relative group overflow-hidden rounded-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer ">
                    <img className="max-w-56 h-80 object-cover" src={homeStyle.lib8} alt="image" />

                    <div className="absolute inset-0 flex flex-col justify-end p-4 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <div className='group-hover:translate-y-[-20px] transition-all duration-300'>
                            <h1 className="text-xl font-medium">Solo Leveling Background</h1>
                            <div className="flex items-center gap-1 text-sm text-white/70">
                                Show More
                                <svg width="16" height="16" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.125 1.625H11.375V4.875" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M5.41602 7.58333L11.3743 1.625" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M9.75 7.04167V10.2917C9.75 10.579 9.63586 10.8545 9.4327 11.0577C9.22953 11.2609 8.95398 11.375 8.66667 11.375H2.70833C2.42102 11.375 2.14547 11.2609 1.9423 11.0577C1.73914 10.8545 1.625 10.579 1.625 10.2917V4.33333C1.625 4.04602 1.73914 3.77047 1.9423 3.5673C2.14547 3.36414 2.42102 3.25 2.70833 3.25H5.95833" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
             
            </div>
        </div>
    )
}

export default LatestLibary