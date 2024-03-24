import React, { useState } from 'react';
import axios from 'axios';
import Navigation from '../utils/Navigation';
import Footer from '../utils/Footer';

const Contact = (handleClick,login,setLogin,size,setCart) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            await axios.post('/api/contact', formData);
            setSubmitSuccess(true);
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitSuccess(false);
        } finally {
            setIsSubmitting(false);
        }
    };
    return (
        <div>
            <Navigation login={login} setLogin={setLogin} size={size} setCart={setCart}/>
            <div className="container mt-48 mb-36 p-4">
                <h2 className="text-center text-3xl font-semibold mb-6">Contact Us</h2>
                <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                            Name
                        </label>
                        <input
                            placeholder='Enter your name'
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="mt-1 p-2 w-full border text-sm border-gray-300 rounded-md"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                            Email
                        </label>
                        <input
                            placeholder='Enter your email'
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="mt-1 p-2 w-full text-sm border border-gray-300 rounded-md"
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-600">
                            Message
                        </label>
                        <textarea
                            placeholder='Enter your message here'
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows="4"
                            className="mt-1 p-2 w-full text-sm border border-gray-300 rounded-md"
                        />
                    </div>

                    <div className="flex items-center">
                        <button
                            style={{ backgroundColor: "#099f94" }}
                            type="submit"
                            className="px-4 py-2 rounded-md text-white focus:outline-none"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Submitting...' : 'Submit'}
                        </button>
                    </div>

                    {submitSuccess === true && (
                        <p className="mt-3 text-green-600">Form submitted successfully!</p>
                    )}
                    {submitSuccess === false && (
                        <p className="mt-3 text-red-600">Failed to submit the form. Please try again.</p>
                    )}
                </form>
            </div>
            <Footer />
        </div>

    );
};

export default Contact;
