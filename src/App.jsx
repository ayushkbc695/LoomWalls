import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import Explore from './pages/Explore'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { ToastContainer } from 'react-toastify'
import RenderImage from './pages/RenderImage'
import ScrollTo from './components/ScrollTo'
import AboutPage from './pages/About'
import ContactPage from './pages/Contact'
import BlogPage from './pages/Blog'
import BlogDetailPage from './pages/BlogDetails'
import TestimonialsPage from './components/Testimonials'
import ImagePop from './components/ImagePop'
import SearchResults from './components/SearchResult'


const App = () => {
  return (
    <div className='bg-gradient-to-b from-teal-50 to-orange-50'>
      <ScrollTo />
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/collection' element={<Collection />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/test' element={<TestimonialsPage />} />
        <Route path='/blog' element={<BlogPage />} />
        <Route path='/pop' element={<ImagePop />} />
        <Route path="/blog/:slug" element={<BlogDetailPage />} />
        <Route path='/explore' element={<Explore />} />
        <Route path='/explore/:category' element={<RenderImage />} />
        <Route path="/search" element={<SearchResults />} />
      </Routes>
      <Footer /> 
    </div>
  )
}

export default App