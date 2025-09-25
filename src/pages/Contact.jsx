import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center px-6 py-12">
            <h1 className="text-4xl libertinus font-bold text-teal-700 mb-4 text-center">
                Get in Touch
            </h1>
            <p className="text-gray-600 mb-10 max-w-2xl poppins text-[15px] text-center">
                Have questions, suggestions, or just want to say hello?
                We'd love to hear from you! Fill out the form below or reach us through the contact details.
            </p>

            <div className="grid md:grid-cols-2 gap-12 w-full max-w-5xl">
                {/* ----------------- Contact Form  ---------------------- */}
                <form className="bg-white shadow-lg rounded-2xl p-8 space-y-6 border-t-4 border-orange-300">

                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Name</label>
                        <input type="text" placeholder="Your name" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-500 outline-none"/>
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Email</label>
                        <input type="email" placeholder="you@example.com" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-500 outline-none" />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Message</label>
                        <textarea placeholder="Write your message..." rows="4" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-500 outline-none"></textarea>
                    </div>

                    <button type="submit" className="w-full bg-teal-600 text-white py-3 rounded-lg hover:bg-orange-500 transition-all font-semibold" >
                        Send Message
                    </button>

                </form>

                {/* ------------------ Contact Details ------------------- */}
                <div className="flex flex-col justify-center space-y-6">
                    <div className="flex items-center gap-4">
                        <Mail className="w-6 h-6 text-teal-600" />
                        <p className="text-gray-700">hello@photogallery.com</p>
                    </div>

                    <div className="flex items-center gap-4">
                        <Phone className="w-6 h-6 text-teal-600" />
                        <p className="text-gray-700">+91 98765 43210</p>
                    </div>

                    <div className="flex items-center gap-4">
                        <MapPin className="w-6 h-6 text-orange-500" />
                        <p className="text-gray-700">
                            123 Creative Street, Mumbai, India
                        </p>
                    </div>

                    {/* --------------------- Embedded Google Map ------------------- */}
                    <div className="rounded-xl overflow-hidden shadow-lg h-64 border-2 border-teal-500">
                        <iframe
                            title="Google Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.1160995935!2d72.74109917915738!3d19.08219783986621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63c2a3a7bdf%3A0x70a1c6e64cbea672!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1675759250000!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
