import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { ChevronDown, GlobeIcon, SearchIcon, User } from 'lucide-react'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'
import SearchBar from './SearchBar'


const Navbar = () => {

    const { user } = useUser()
    const navigate = useNavigate()
    const { openSignIn } = useClerk()

    const location = useLocation();
    const isHomePage = location.pathname === '/';

    return (
        <div className=' sticky top-0 left-0 flex items-center justify-between px-4 bg-teal-50 sm:px-10 md:px-14 lg:px-24 sm py-5 shadow-md z-50'>

            {/* ----------------- Logo ---------------------- */}
            <div onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className='flex items-center cursor-pointer'>
                <Link to='/'><span className='text-4xl dancing'>LoomWalls</span></Link>
            </div>


            {/* -----------------Search Bar ----------------------- */}
            {isHomePage && <SearchBar />}


            <ul className='flex items-center gap-5'>

                {/* --------------------- Explore & Dropdown ---------------------------- */}
                <li className='group relative z-index'>
                    <Link to='/explore' className='flex items-center gap-[5px] py-2.5 px-4 group-hover:bg-orange-100 rounded-full'>
                        <p className='text-[18px]'>Explore</p>
                        <ChevronDown className=' w-4 h-4 group-hover:rotate-180 transition-all duration-500' />
                    </Link>

                    <div className='group-hover:block absolute hidden right-0 top-8 pt-4'>
                        <div className='flex flex-col gap-2 w-55 py-3 px-3 bg-gradient-to-b 0 from-orange-50 to-teal-50 border border-gray-200 shadow-lg rounded-xl z-10'>
                            <Link to='/explore' className='flex items-center gap-2 text-[16px] poppins p-2 rounded-xl hover:bg-teal-200'>
                                <GlobeIcon className='w-5 h-5 ' />
                                <p>Discover Photos</p>
                            </Link>

                            <Link to='/collection' className='flex items-center gap-2 text-[16px] poppins p-2 rounded-xl hover:bg-teal-200'>
                                <i className="ri-collage-fill text-[20px]"></i>
                                <p>My Collection</p>
                            </Link>

                            <Link to='/blog' className='flex items-center gap-2 text-[16px] poppins p-2 rounded-xl hover:bg-teal-200'>
                                <i className="ri-blogger-fill text-[20px]"></i>
                                <p>LoomWalls BLogs</p>
                            </Link>

                            <Link to='/about' className='flex items-center gap-2 text-[16px] poppins p-2 rounded-xl hover:bg-teal-200'>
                                <i className="ri-error-warning-fill text-[20px]"></i>
                                <p>About Us</p>
                            </Link>
                        </div>
                    </div>
                </li>

                {/* --------------------- Three Dot & Dropdown ---------------------------- */}
                <li className='group relative z-index'>
                    <div className='flex items-center gap-[5px] p-3 cursor-pointer  group-hover:bg-orange-100 rounded-full'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>
                    </div>

                    <div className='group-hover:block absolute hidden right-0 top-8 pt-4'>
                        <div className='flex flex-col gap-2 w-55 py-3 px-3 bg-gradient-to-b 0 from-orange-50 to-teal-50 border border-gray-200 shadow-lg rounded-xl'>
                            <Link className='flex items-center gap-2 text-[16px] poppins p-2 rounded-xl hover:bg-teal-200'>
                                <i className="ri-question-line text-xl"></i>
                                <p>Help Center</p>
                            </Link>

                            <Link to='/contact' className='flex items-center gap-2 text-[16px] poppins p-2 rounded-xl hover:bg-teal-200'>
                                <i className="ri-phone-line text-xl"></i>
                                <p>Contact Us</p>
                            </Link>

                            <Link to='/report' className='flex items-center gap-2 text-[16px] poppins p-2 rounded-xl hover:bg-teal-200'>
                                <i className="ri-flag-line text-xl"></i>
                                <p>Report Content</p>
                            </Link>

                            <Link download='dowload-ccc' className='flex items-center gap-2 text-[16px] poppins p-2 rounded-xl hover:bg-teal-200'>
                                <i className="ri-download-2-line text-xl"></i>
                                <p>Download App</p>
                            </Link>
                        </div>
                    </div>
                </li>

                {/* --------------------- Join or Login ---------------------------- */}
                <li className='flex items-center gap-[5px] cursor-pointer'>
                    {
                        !user ? (
                            <button onClick={openSignIn} className='flex items-center gap-[5px] py-3 px-10 bg-black text-white hover:scale-[.95] transition-all duration-500 rounded-lg cursor-pointer'>Sign In</button>
                        ) : (
                            <UserButton appearance={{ elements: { avatarBox: { width: '40px', height: '42px' } } }}>
                                <UserButton.MenuItems>
                                    <UserButton.Action label='My Collections' labelIcon={<i className="ri-collage-fill text-[18px]"></i>} onClick={() => navigate('/collection')} />
                                </UserButton.MenuItems>
                            </UserButton>
                        )
                    }
                </li>

            </ul>

        </div>
    )
}

export default Navbar