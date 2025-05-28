'use client';

import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
        <nav className="bg-black py-2">
            <div className="flex justify-between items-center">
                <ul className="flex space-x-6 pl-6">
                    <li>
                        <Link href="/Docs">
                            <span className="text-white">Docs</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/Pricing">
                            <span className="text-white">Pricing</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/Status">
                            <span className="text-white">Status</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/faqs">
                            <span className="text-white">Faqs</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/Contact">
                            <span className="text-white">Contact Us</span>
                        </Link>
                    </li>
                </ul>
                <div className="flex space-x-4 pr-6">
                    <Link href="/login">
                        <span className="text-white px-4 py-1 rounded">Login</span>
                    </Link>
                    <Link href="/signUp">
                        <span className="bg-white text-black px-4 py-1 rounded">Sign Up</span>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Header;