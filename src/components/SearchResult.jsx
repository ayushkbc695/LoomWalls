// SearchResults.jsx
import React, { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import ImageCard from '../components/ImageCard';
import { CombineImage1 } from '../../public/assets/assets1';
import { usePageTitle } from '../Hook/usePageTitle';

const SearchResults = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const searchQuery = queryParams.get('q')?.toLowerCase() || '';

    // Get all images from all categories
    const allImages = useMemo(() => {
        const images = [];
        Object.values(CombineImage1).forEach(categoryImages => {
            images.push(...categoryImages);
        });
        return images;
    }, []);

    // Filter images based on search query
    const filteredImages = useMemo(() => {
        if (!searchQuery) return [];

        return allImages.filter(image =>
            image.description?.toLowerCase().includes(searchQuery) ||
            image.category?.toLowerCase().includes(searchQuery) ||
            image.tags?.some(tag => tag.toLowerCase().includes(searchQuery))
        );
    }, [allImages, searchQuery]);

    usePageTitle(`Search Results for "${searchQuery}" - LoomWalls`);

    if (!searchQuery) {
        return (
            <div className="p-5 text-center mt-20">
                <h1 className="text-2xl libertinus">Please enter a search term</h1>
            </div>
        );
    }

    return (
        <div className="p-5">
            {/* ----------------- SEARCH HEADER --------------------- */}
            <div className="text-center mt-10">
                <h1 className="text-2xl sm:text-3xl md:text-4xl libertinus">
                    Search Results for "{searchQuery}"
                </h1>
                <p className="text-sm text-slate-500 playwrite text-center mt-2">
                    Found {filteredImages.length} results
                </p>
            </div>

            {/* ----------------- IMAGES SECTION -------------------- */}
            {filteredImages.length > 0 ? (
                <div className="columns-2 sm:columns-3 md:columns-4 xl:columns-5 gap-5 mt-10 xl:mt-20 xl:mx-5">
                    {filteredImages.map((item) => (
                        <ImageCard key={item._id} id={item._id} src={item.src} description={item.description} category={item.category} initialBookmarked={item.isbookmark} />
                    ))}
                </div>
            ) : (
                <div className="text-center mt-20">
                    <h2 className="text-xl text-gray-600">No images found for "{searchQuery}"</h2>
                    <p className="text-gray-500 mt-2">Try different keywords or browse categories</p>
                </div>
            )}
        </div>
    );
};

export default SearchResults;