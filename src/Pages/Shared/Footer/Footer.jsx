import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="bg-gray-800 py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-gray-300">
                            <h3 className="text-lg font-semibold mb-4">About Us</h3>
                            <p className="text-sm">
                                Your photography school is committed to providing high-quality photography education and training to aspiring photographers. We offer a wide range of courses, workshops, and resources to help you enhance your photography skills and unleash your creative potential.
                            </p>
                        </div>
                        <div className="text-gray-300">
                            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
                            <p className="text-sm">
                                Address: 123 Main Street, City, State ZIP
                            </p>
                            <p className="text-sm">
                                Phone: (123) 456-7890
                            </p>
                            <p className="text-sm">
                                Email: info@photographyschool.com
                            </p>
                        </div>
                        <div className="text-gray-300">
                            <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
                            <ul className="space-y-2">
                                <li>
                                    <a href="/courses" className="text-sm hover:text-white">Courses</a>
                                </li>
                                <li>
                                    <a href="/instructors" className="text-sm hover:text-white">Instructors</a>
                                </li>
                                <li>
                                    <a href="/blog" className="text-sm hover:text-white">Blog</a>
                                </li>
                                <li>
                                    <a href="/contact" className="text-sm hover:text-white">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-8 text-center text-gray-300">
                        <p className="text-sm">
                            &copy; {new Date().getFullYear()} Photography School. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;