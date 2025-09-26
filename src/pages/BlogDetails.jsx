import React from "react";
import { useParams, Link } from "react-router-dom";
import { DummyblogDetails } from "../assets/assets1";
import { slugify } from "../utils/slugify";
import { motion } from "framer-motion";
import { usePageTitle } from "../Hook/usePageTitle";

const BlogDetailPage = () => {

    const { slug } = useParams();
    const post = DummyblogDetails.find((p) => slugify(p.title) === slug);

    usePageTitle(`Blog - ${post.title}`)

    if (!post) {
        return (
            <div className="min-h-screen flex items-center justify-center text-gray-600">
                <p>Post not found.</p>
            </div>
        );
    }


    return (
        <motion.div className="min-h-screen bg-gray-50" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
            {/* ------------------ Hero Section ------------------- */}
            <motion.div className="relative" initial={{ scale: 1.1, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.8 }}>
                <img src={post.image} alt={post.title} className="w-full h-100 object-cover"/>
                <div className="absolute inset-0 bg-opacity-40 flex items-center justify-center">
                    <motion.h1 className="text-4xl md:text-5xl libertinus font-bold text-white text-center px-4" initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }} >
                        {post.title}
                    </motion.h1>
                </div>
            </motion.div>

            {/* --------------------- Content Section ---------------------- */}
            <motion.div className="max-w-3xl mx-auto px-6 py-12" initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5, duration: 0.8 }}>
                <p className="text-orange-500 font-medium mb-6">{post.date}</p>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed whitespace-pre-line">
                    {post.content}
                </div>

                {/* ----------------------- Back button -------------------------- */}
                <motion.div className="mt-12" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7, duration: 0.6 }}>
                    <Link to="/blog" className="inline-block bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-orange-500 transition font-medium">
                        ← Back to Blog
                    </Link>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default BlogDetailPage;
