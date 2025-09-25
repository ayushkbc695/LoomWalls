import React from 'react'
import { AnimeSceneryImage } from '../assets/assets'
import ImageCard from '../components/ImageCard'


const AnimeScenery = () => {
    return (
        <>
            <h1 className='text-4xl text-center libertinus mt-20'>Anime Scenery Wallpaper for Desktop & Mobile.</h1>
            <p className='text-sm text-slate-500 playwrite text-center mt-2 max-w-2xl mx-auto'>Where the Wind Carries Stories – Vast Meadows, Whispering Trees, and the Gentle Flow of Time</p>

            <div className=" columns-4 gap-5 mt-20 mx-6">
                {AnimeSceneryImage.map((item) => (
                    <ImageCard
                        key={item._id}
                        id={item._id}
                        src={item.src}
                        description={item.description}
                        category={item.category}
                        initialBookmarked={item.isbookmark}
                    />
                ))}
            </div>
        </>
    )
}

export default AnimeScenery