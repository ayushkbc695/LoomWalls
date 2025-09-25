import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import ImageCard from '../components/ImageCard';
import { Link } from 'react-router-dom';
import { allImages } from '../../public/assets/assets1';
import Title from '../components/Title';

const Collection = () => {
    const [bookmarkedImages, setBookmarkedImages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadBookmarkedImages = () => {
            try {
                // Get all bookmark keys from localStorage
                const bookmarkKeys = Object.keys(localStorage).filter(key => key.startsWith('bookmark_'));

                // Extract bookmarked image IDs
                const bookmarkedIds = bookmarkKeys
                    .map(key => {
                        const id = key.replace('bookmark_', '');
                        return localStorage.getItem(key) === 'true' ? id : null;
                    })
                    .filter(Boolean);

                // Filter original images array
                const bookmarked = allImages.filter(img =>
                    bookmarkedIds.includes(img._id)
                );

                setBookmarkedImages(bookmarked);
            } catch (error) {
                toast.error("Failed to load collection");
                console.error("Error loading bookmarks:", error);
            } finally {
                setLoading(false);
            }
        };

        loadBookmarkedImages();
    }, []);

    const handleBookmarkChange = (imageId, isBookmarked) => {
        const storageKey = `bookmark_${imageId}`;

        if (!isBookmarked) {
            localStorage.removeItem(storageKey);
        } else {
            localStorage.setItem(storageKey, 'true');
        }

        // 🔥 Refresh state from localStorage after any change
        const bookmarkKeys = Object.keys(localStorage).filter(key => key.startsWith('bookmark_'));
        const bookmarkedIds = bookmarkKeys
            .map(key => {
                const id = key.replace('bookmark_', '');
                return localStorage.getItem(key) === 'true' ? id : null;
            })
            .filter(Boolean);

        const bookmarked = allImages.filter(img => bookmarkedIds.includes(img._id));
        setBookmarkedImages(bookmarked);
    };



    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
        );
    }

    if (bookmarkedImages.length === 0) {
        return (
            <>
                <div className="flex flex-col items-center justify-center h-[80vh] text-center px-4">
                    <p className="text-gray-600 mb-4">Nothing to see here.</p>
                    <div className="text-6xl mb-3">
                        <svg width="193" height="89" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#media_discs_svg__filter0_d_7226_59487)" transform="rotate(15 152.192 46)"><circle cx="152.192" cy="46" r="32" fill="#fff"></circle><circle cx="152.192" cy="46" r="31.5" stroke="#EBECF0"></circle></g><path d="M163.46 37.998l-12.449-1.453a1.583 1.583 0 00-1.732 1.163l-2.953 11.02a4.767 4.767 0 00-2.219-.734c-2.232-.156-4.134 1.194-4.251 3.046-.117 1.852 1.581 3.47 3.813 3.626 1.999.14 3.731-.93 4.144-2.47l2.953-11.02 11.004 1.274-2.011 7.506a4.766 4.766 0 00-2.22-.734c-2.232-.157-4.133 1.194-4.25 3.046-.117 1.852 1.581 3.47 3.813 3.626 1.999.14 3.731-.93 4.144-2.47l3.598-13.428a1.599 1.599 0 00-1.384-1.998z" fill="#67A871"></path><g filter="url(#media_discs_svg__filter1_d_7226_59487)"><circle cx="96.191" cy="38" r="32" fill="#fff"></circle><circle cx="96.191" cy="38" r="31.5" stroke="#EBECF0"></circle></g><path fillRule="evenodd" clipRule="evenodd" d="M89.73 28.308h12.923a3.231 3.231 0 013.231 3.23v12.924a3.231 3.231 0 01-3.231 3.23H89.73a3.23 3.23 0 01-3.231-3.23V31.538a3.23 3.23 0 013.23-3.23zm13.384 9.771v-6.54a.461.461 0 00-.461-.462H89.73a.462.462 0 00-.462.461v12.924c0 .254.207.461.462.461h.079l9.422-9.422a.923.923 0 011.305 0l2.578 2.578zm-12.461-3.31a2.308 2.308 0 104.615 0 2.308 2.308 0 00-4.615 0z" fill="#E3AB6C"></path><g filter="url(#media_discs_svg__filter2_d_7226_59487)" transform="rotate(-15 40.192 46)"><circle cx="40.192" cy="46" r="32" fill="#fff"></circle><circle cx="40.192" cy="46" r="31.5" stroke="#EBECF0"></circle></g><path d="M44.186 43.073l3.907-4.746a.923.923 0 011.604.348l2.389 8.916a.923.923 0 01-1.216 1.103l-5.756-2.156.73 2.726a2.77 2.77 0 01-1.958 3.391l-9.808 2.628a2.77 2.77 0 01-3.391-1.958l-2.39-8.916a2.77 2.77 0 011.959-3.392l9.808-2.628a2.77 2.77 0 013.391 1.958l.73 2.726z" fill="#909CF2"></path><defs><filter id="media_discs_svg__filter0_d_7226_59487" x="112.184" y="7.992" width="80.017" height="80.016" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="2"></feOffset><feGaussianBlur stdDeviation="4"></feGaussianBlur><feColorMatrix values="0 0 0 0 0.0980392 0 0 0 0 0.105882 0 0 0 0 0.14902 0 0 0 0.06 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_7226_59487"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow_7226_59487" result="shape"></feBlend></filter><filter id="media_discs_svg__filter1_d_7226_59487" x="56.191" y="0" width="80" height="80" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="2"></feOffset><feGaussianBlur stdDeviation="4"></feGaussianBlur><feColorMatrix values="0 0 0 0 0.0980392 0 0 0 0 0.105882 0 0 0 0 0.14902 0 0 0 0.06 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_7226_59487"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow_7226_59487" result="shape"></feBlend></filter><filter id="media_discs_svg__filter2_d_7226_59487" x="0.184" y="7.992" width="80.017" height="80.016" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="2"></feOffset><feGaussianBlur stdDeviation="4"></feGaussianBlur><feColorMatrix values="0 0 0 0 0.0980392 0 0 0 0 0.105882 0 0 0 0 0.14902 0 0 0 0.06 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_7226_59487"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow_7226_59487" result="shape"></feBlend></filter></defs></svg>
                    </div>
                    <h2 className="text-3xl font-medium text-gray-800 mb-4 montserrat">Your collection is empty</h2>
                    <Link to="/explore" className=" flex items-center gap-2 px-6 py-2 bg-green-600 text-[18px] text-white rounded-lg hover:bg-green-700 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                        </svg>
                        Browse Images
                    </Link>
                </div>
            </>
        );
    }


    return (
        <>
            <div className="container mx-auto py-8">
                <div className=" flex justify-between items-center mb-8">
                    <div className='text-2xl xl:text-5xl font-medium'>
                        <Title text1={'Your'} text2={'Collection'} />
                    </div>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {bookmarkedImages.length} {bookmarkedImages.length === 1 ? 'Image' : 'Images'}
                    </span>
                </div>

                <div className="columns-2 md:columns-3 xl:columns-5 gap-5 mx-5">
                    {bookmarkedImages.map(image => (
                        <div key={image._id} className="relative group">
                            <ImageCard id={image._id} src={image.src} description={image.description} category={image.category} initialBookmarked={true} onBookmarkChange={handleBookmarkChange} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Collection