import React from 'react';
import Image from 'next/image';
import { PiSignatureDuotone } from 'react-icons/pi';

export default function Navbar() {
    return (
        <nav className='flex justify-between items-center p-3'>
            <div className='relative w-14 h-12'>
                <Image
                    src={'/logo.png'}
                    alt='Logo'
                    layout='fill'
                    sizes='30'
                />
            </div>
            <button
                className='flex items-center gap-1 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-600'
                aria-label='Signature Button'
            >
                <PiSignatureDuotone style={{ fontSize: '30px' }} />
                <span className='text-lg'>Signature</span>
            </button>
        </nav>
    );
}
