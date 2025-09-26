import React from "react";
import { Link } from "react-router-dom";
import { blogPosts } from "../assets/assets1";
import { slugify } from "../utils/slugify";
import { motion } from "framer-motion";
import { usePageTitle } from "../Hook/usePageTitle";

const BlogNotebookPage = () => {

    usePageTitle('Our Latest Blogs - LoomWalls')

    return (
        <motion.div className="min-h-screen bg-gray-50 px-6 py-12" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
            <div className="max-w-3xl mx-auto">
                {/* ---------------- Page Title -------------------- */}
                <motion.h1 className="text-4xl font-bold text-center libertinus text-teal-700 mb-2" initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
                    LoomWalls Blogs Journal
                </motion.h1>
                <motion.p className="text-center montserrat text-gray-600 mb-12" initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 0.6 }}>
                    Thoughts, lessons, and stories from my photography journey.
                </motion.p>

                {/* -------------------- Blog List ---------------------- */}
                <div className="space-y-12">
                    {blogPosts.map((post, index) => (
                        <motion.div key={post.id} className="border-l-4 border-teal-600 pl-6 hover:border-orange-500 transition" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + index * 0.2, duration: 0.6 }} >
                            <h2 className="text-3xl libertinus font-bold text-gray-800 mb-2">
                                {post.title}
                            </h2>
                            <p className="text-sm text-orange-500 mb-4">{post.date}</p>
                            <p className="text-gray-600 outfit mb-4">{post.excerpt}</p>
                            <Link to={`/blog/${slugify(post.title)}`} className="text-teal-600 font-medium hover:text-orange-500 transition" >
                                Read More →
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default BlogNotebookPage;
