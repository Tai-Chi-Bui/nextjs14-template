'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

const Footer = () => {

    return (
        <footer className='flex flex-col items-center justify-between w-full gap-2 py-5 overflow-hidden border-t border-gray-200 bg-slate-100 min-h-20 md:flex-row px-7'>
            <div className='text-center md:text-left'>
                <p className='text-sm font-medium text-muted-foreground'>
                    &copy; {new Date().getFullYear()} All Rights
                    Reserved
                </p>
            </div>

            <div className='flex items-center justify-center gap-5 font-medium'>
                <Link
                    href='#'
                    className='text-sm text-muted-foreground hover:text-gray-600'>
                    Terms
                </Link>
                <Link
                    href='#'
                    className='text-sm text-muted-foreground hover:text-gray-600'>
                    Privacy Policy
                </Link>
                <Link
                    href='#'
                    className='text-sm text-muted-foreground hover:text-gray-600'>
                    Cookie Policy
                </Link>
            </div>
        </footer>
    )
}

export default Footer