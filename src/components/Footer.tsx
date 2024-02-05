'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

const Footer = () => {

    return (
        <footer className='bg-slate-100 w-full min-h-20 border-t border-gray-200 flex flex-col md:flex-row gap-2 items-center justify-between px-7 py-5'>
            <div className='text-center md:text-left'>
                <p className='text-sm text-muted-foreground'>
                    &copy; {new Date().getFullYear()} All Rights
                    Reserved
                </p>
            </div>

            <div className='flex items-center justify-center gap-5'>
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