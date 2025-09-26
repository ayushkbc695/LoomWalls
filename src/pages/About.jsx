import React from "react";
import { motion } from "framer-motion";
import { Camera, Heart, Image as ImageIcon, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { usePageTitle } from "../Hook/usePageTitle";

const AboutPage = () => {

    usePageTitle('')

    const navigate = useNavigate()
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center">

            {/* ---------------- Banner ------------------ */}
            <div className="relative w-full h-[60vh]">
                <img src="/heroImage.jpg" alt="Gallery Banner" className="w-full h-full object-cover"/>

                <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center px-4">
                    <motion.h1 initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-5xl md:text-5xl libertinus font-bold text-white mb-4" >
                        Capturing Moments, Creating Stories
                    </motion.h1>
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.8 }} className="text-gray-200 poppins text-[17px] max-w-[700px]">
                        Welcome to <span className="font-bold libertinus text-white">LoomWalls</span>,
                        where every picture tells a story. Explore collections that celebrate
                        beauty, creativity, and emotions through photography.
                    </motion.p>
                </div>

            </div>

            {/* ------------------- Mission Section -------------------- */}
            <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-6xl px-6">
                <motion.div whileHover={{ scale: 1.05 }} className="bg-white shadow-md rounded-2xl p-6 text-center">
                    <Camera className="mx-auto h-10 w-10 text-indigo-500 mb-3" />
                    <h3 className="font-semibold text-lg mb-2">Our Mission</h3>
                    <p className="text-gray-600">
                        Sharing breathtaking photography and inspiring creativity in every visitor.
                    </p>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} className="bg-white shadow-md rounded-2xl p-6 text-center">
                    <ImageIcon className="mx-auto h-10 w-10 text-pink-500 mb-3" />
                    <h3 className="font-semibold text-lg mb-2">Collections</h3>
                    <p className="text-gray-600">
                        From landscapes to portraits, discover diverse perspectives of art, culture, nature and we also have anime collection.
                    </p>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} className="bg-white shadow-md rounded-2xl p-6 text-center">
                    <Heart className="mx-auto h-10 w-10 text-red-500 mb-3" />
                    <h3 className="font-semibold text-lg mb-2">Community</h3>
                    <p className="text-gray-600">
                        Join our growing family of photography lovers and creators.
                    </p>
                </motion.div>
            </div>

            {/* --------------------- Stats Section ----------------------- */}
            <div className="mt-16 grid md:grid-cols-3 gap-6 text-center max-w-5xl px-6">
                <div className="bg-white shadow rounded-2xl p-6">
                    <h2 className="text-3xl font-semibold text-indigo-600">5000+</h2>
                    <p className="text-gray-600">Photos to Explore</p>
                </div>
                <div className="bg-white shadow rounded-2xl p-6">
                    <h2 className="text-3xl font-semibold text-pink-500">20+</h2>
                    <p className="text-gray-600">Categories</p>
                </div>
                <div className="bg-white shadow rounded-2xl p-6">
                    <h2 className="text-3xl font-semibold text-green-500">10K+</h2>
                    <p className="text-gray-600">Happy Visitors</p>
                </div>
            </div>


            {/* ----------------------- Newsletter Section  ---------------------------*/}
            <div className="mt-16 max-w-2xl text-center px-6">
                <h2 className="text-3xl font-semibold text-gray-800 libertinus mb-2">Stay Connected with Us</h2>
                <p className="text-gray-600 mb-6">
                    Subscribe to our newsletter to get the latest updates and new collections.
                </p>
                <div className="flex gap-2">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="flex-1 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <button className="px-6 py-3 rounded-xl bg-indigo-600 cursor-pointer text-white font-semibold shadow hover:bg-indigo-700 transition">
                        <Mail className="inline-block w-5 h-5 mr-1" /> Subscribe
                    </button>
                </div>
            </div>

            {/* ----------------------- Call to Action ------------------------ */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.8 }} className="mt-16 mb-16">
                <button onClick={() => navigate('/')} className="px-6 py-3 cursor-pointer rounded-xl bg-pink-600 text-white font-semibold shadow-md hover:bg-pink-700 transition">
                    Join the Journey
                </button>
            </motion.div>
        </div>
    );
};

export default AboutPage;
