'use client';

import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
        <nav className="bg-black py-2">
            <div className="flex justify-between items-center">
                <ul className="flex space-x-6 pl-6">
                    <li>
                        <Link href="/paginas/Docs" className="text-white">Docs</Link>
                    </li>
                    <li>
                        <Link href="/paginas/Pricing" className="text-white">Pricing</Link>
                    </li>
                    <li>
                        <Link href="/Status" className="text-white">Status</Link>
                    </li>
                    <li>
                        <Link href="/faqs" className="text-white">Faqs</Link>
                    </li>
                    <li>
                        <Link href="/contactUs" className="text-white">Contact Us</Link>
                    </li>
                </ul>
                <div className="flex space-x-4 pr-6">
                    <Link href="/login" className="text-white px-4 py-1 rounded">Login</Link>
                    <Link href="/signup" className="bg-white text-black px-4 py-1 rounded">Sign Up</Link>
                </div>
            </div>
        </nav>
    );
};

export default Header;