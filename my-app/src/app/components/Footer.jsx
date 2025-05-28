'use client';

import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <nav className="bg-black">
            <ul className="flex justify-end space-x-6 pr-6">
                <li>
                    <Link href="/paginas/Docs" className="text-white">contact us</Link>
                </li>
                <li>
                    <Link href="/paginas/Pricing" className="text-white">terms of services</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Footer;