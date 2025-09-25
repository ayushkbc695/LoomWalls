import React from 'react'
import Category from '../components/Category'
import Gallery from '../components/Gallery'
import { usePageTitle } from '../Hook/usePageTitle';


const Explore = () => {

    usePageTitle('LoomWalls - Explore the Images You like');
    

    return (
        <div className='px-4 sm:px-10 md:px-14 xl:px-24'>
            <h1 className='text-4xl text-center libertinus mt-10'>Explore the LoomWalls.</h1>
            <p className='text-sm text-slate-500 playwrite text-center mt-1 max-w-xl mx-auto'>Explore the human experience through portraits that speak without words.</p>
            <Category />
            <Gallery />
        </div>
    )
}

export default Explore