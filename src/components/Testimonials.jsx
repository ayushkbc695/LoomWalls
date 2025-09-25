import React from "react";
import { motion } from "framer-motion";

const testimonials = [
    {
        id: 1,
        name: "Emily Carter",
        role: "Travel Blogger",
        feedback:
            "This gallery is absolutely stunning! The photos capture emotions in the purest form. I visit often for inspiration.",
        img: "https://source.unsplash.com/200x200/?woman,portrait",
    },
    {
        id: 2,
        name: "James Lee",
        role: "Photographer",
        feedback:
            "A perfect blend of creativity and storytelling. I’ve even discovered new photography styles here.",
        img: "https://source.unsplash.com/201x201/?man,portrait",
    },
    {
        id: 3,
        name: "Sophia Johnson",
        role: "Artist",
        feedback:
            "Each photo feels like a piece of art. The gallery is a wonderful place to get inspired.",
        img: "https://source.unsplash.com/202x202/?artist,portrait",
    },
    {
        id: 4,
        name: "David Kim",
        role: "Designer",
        feedback:
            "The layout is modern and minimal. It lets the photos shine while keeping the browsing experience smooth.",
        img: "https://source.unsplash.com/203x203/?designer,portrait",
    },
];

const TestimonialsPage = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-6 py-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
                What People Say
            </h1>

            {/* Slider container */}
            <div className="overflow-hidden w-full max-w-5xl">
                <motion.div
                    className="flex gap-6"
                    initial={{ x: 0 }}
                    animate={{
                        x: ["0%", "-100%"], // Slide left continuously
                    }}
                    transition={{
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 20,
                        ease: "linear",
                    }}
                >
                    {/* Duplicate testimonials for infinite loop */}
                    {[...testimonials, ...testimonials].map((t, i) => (
                        <div key={i} className="min-w-[300px] max-w-sm bg-white shadow-md rounded-2xl p-6 flex-shrink-0">

                            <img src={t.img} alt={t.name} className="w-16 h-16 rounded-full mx-auto mb-4 object-cover" />

                            <p className="text-gray-600 italic mb-4">“{t.feedback}”</p>
                            <h3 className="font-semibold text-gray-800">{t.name}</h3>
                            <p className="text-gray-500 text-sm">{t.role}</p>
                            
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default TestimonialsPage;
