import React, { useEffect, useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import ImageCard from "../components/ImageCard";
import { BannerImage, CombineImage1 } from "../../public/assets/assets1";

// ======== Title page Hook ======
import { usePageTitle } from "../Hook/usePageTitle";
import Loader from "../components/Loader";

const RenderImage = () => {
    const { category } = useParams();

    // ✅ Memoize images to avoid ESLint warning & unnecessary re-renders
    const allImages = useMemo(() => CombineImage1[category] || [], [category]);
    const bannerData = BannerImage[category];

    // ✅ state for lazy load (only anime category)
    const [visibleImages, setVisibleImages] = useState([]);
    const [itemsToShow, setItemsToShow] = useState(100);

    // Reset when category changes
    useEffect(() => {
        if (category === "anime") {
            setItemsToShow(100);
            setVisibleImages(allImages.slice(0, 100));
        }
    }, [category, allImages]);

    // Scroll-based loading (only anime category)
    useEffect(() => {
        if (category !== "anime") return;

        const handleScroll = () => {
            if (
                window.innerHeight + document.documentElement.scrollTop + 70 >=
                document.documentElement.scrollHeight
            ) {
                setItemsToShow((prev) => Math.min(prev + 50, allImages.length));
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [category, allImages.length]);

    // Update visible images when itemsToShow changes
    useEffect(() => {
        if (category === "anime") {
            setVisibleImages(allImages.slice(0, itemsToShow));
        }
    }, [itemsToShow, allImages, category]);

    usePageTitle(`${bannerData?.title || category} Wallpapers - LoomWalls`);

    return (
        <div className="p-5">

            {/* ---------------------- BANNER SECTION --------------------- */}
            <div className="relative w-full h-50 xl:w-[95%] xl:h-[500px] mx-auto rounded-2xl overflow-hidden shadow-lg">
                <img src={bannerData?.banner} alt={`${category} banner`} className="w-full h-full object-cover" />
            </div>

            {/* ------------------------- TITLE/SUBTITLE SECTION ------------------------ */}
            <h1 className="text-2xl sm:text-2xl md:text-3xl xl:text-4xl text-center libertinus mt-6 xl:mt-20">
                {bannerData?.title} Wallpaper for Desktop & Mobile.
            </h1>
            <p className="text-[10px] xl:text-sm text-slate-500 playwrite text-center mt-2 max-w-2xl mx-auto">
                {bannerData?.subTitle}
            </p>

            {/* ----------------- IMAGES SECTION -------------------- */}
            <div className="columns-2 sm:columns-3 md:columns-4 xl:columns-5 gap-5 mt-10 xl:mt-20 xl:mx-5">
                {(category === "anime" ? visibleImages : allImages).map((item) => (
                    <ImageCard key={item._id} id={item._id} src={item.src} description={item.description} category={item.category} initialBookmarked={item.isbookmark} />
                ))}
            </div>

            {/* ---------------------- Loading Indicator ----------------------- */}
            {category === "anime" && itemsToShow < allImages.length && (
                <div className="flex items-center gap-2 justify-center w-full ">
                    <Loader />
                    <p className="text-center text-gray-500 my-10">
                        Loading more wallpapers...
                    </p>
                </div>
            )}
        </div>
    );
};

export default RenderImage;
