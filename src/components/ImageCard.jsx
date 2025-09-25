import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

const ImageCard = ({ id, src, description, category, initialBookmarked = false, onBookmarkChange }) => {

    const [isBookmarked, setIsBookmarked] = useState(() => {
        const saved = localStorage.getItem(`bookmark_${id}`);
        return saved !== null ? JSON.parse(saved) : initialBookmarked;
    });

    useEffect(() => {
        if (isBookmarked) {
            localStorage.setItem(`bookmark_${id}`, JSON.stringify(true));
        } else {
            localStorage.removeItem(`bookmark_${id}`);
        }
    }, [id, isBookmarked]);

    const showToast = (message, type = 'success') => {
        toast[type](message, {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
        });
    };

    const handleBookmark = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const newState = !isBookmarked;
        setIsBookmarked(newState);

        if (onBookmarkChange) {
            onBookmarkChange(id, newState);
        }

        if (newState) {
            showToast("Saved to Collection!", "success");
        } else {
            showToast("Removed from Collection", "error");
        }
    };

    const handleDownload = async (e) => {
        e.preventDefault();
        e.stopPropagation();

        const toastId = toast.loading('Image Downloaded', {
            position: "bottom-right",
        });

        try {
            console.log("Downloading from:", src);

            const response = await fetch(src);
            if (!response.ok) throw new Error('Failed to download');

            const blob = await response.blob();
            const blobUrl = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = blobUrl;
            link.download = `${id}${Date.now()}.${blob.type.split('/')[1] || 'jpg'}`;

            document.body.appendChild(link);
            link.click();

            window.URL.revokeObjectURL(blobUrl);
            setTimeout(() => document.body.removeChild(link), 100);

            toast.update(toastId, {
                render: "Downloaded!",
                type: "success",
                autoClose: 3000,
                isLoading: false
            });
        } catch (error) {
            console.error('Download error:', error);
            toast.update(toastId, {
                render: "Download failed!",
                type: "error",
                autoClose: 3000,
                isLoading: false,
            });
        }
    };

    return (
        <>
            <Link className="group relative block" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} to={`/explore/${id}`}>
                {/* ----------------- Image Container ---------------------- */}
                <div className='overflow-hidden mb-4 shadow-lg rounded-xl'>
                    <img className='w-full h-full rounded-xl' src={src} alt={description} category={category} loading='lazy' />
                </div>

                {/* --------------------- Hover Overlay ---------------------- */}
                <div className='absolute inset-0 flex flex-col items-end justify-between gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 bg-[#00000059] rounded-xl'>
                    {/* ------------------- Collect Buttons --------------------- */}

                    <button className={`px-2 py-1 bg-white rounded-md hover:bg-gray-100 cursor-pointer transition-all ${isBookmarked ? 'text-red-500 scale-110' : 'scale-100'}`} aria-label={isBookmarked ? 'Remove bookmark' : 'Add bookmark'} onClick={handleBookmark}>
                        <i className={`text-2xl ${isBookmarked ? "ri-bookmark-fill" : "ri-bookmark-line"}`}></i>
                    </button>

                    {/* ----------------------- Download Button ---------------------- */}
                    <button className='flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition-all cursor-pointer hover:scale-105' onClick={handleDownload} aria-label={`Download ${description}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                        </svg>
                        <span>Download</span>
                    </button>
                </div>
            </Link>
        </>
    )
}


export default ImageCard