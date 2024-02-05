'use client'

import { PRODUCT_CATEGORIES } from '@/config'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import UserAccountNav from './UserAccountNav'

const MobileNav = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const pathname = usePathname()
    const user = false

    // whenever we click an item in the menu and navigate away, we want to close the menu
    useEffect(() => {
        setIsOpen(false)
    }, [pathname])

    // when we click the path we are currently on, we still want the mobile menu to close,
    // however we cant rely on the pathname for it because that won't change (we're already there)
    const closeOnCurrent = (href: string) => {
        if (pathname === href) {
            setIsOpen(false)
        }
    }

    // remove second scrollbar when mobile menu is open
    useEffect(() => {
        if (isOpen)
            document.body.classList.add('overflow-hidden')
        else document.body.classList.remove('overflow-hidden')
    }, [isOpen])

    if (!isOpen)
        return (
            <button
                type='button'
                onClick={() => setIsOpen(true)}
                className='relative inline-flex items-center justify-center p-2 text-gray-400 rounded-md lg:hidden'>
                <Menu className='w-6 h-6' aria-hidden='true' />
            </button>
        )

    return (
        <div className='lg:hidden'>
            <div className='relative z-49'>
                <div className='fixed inset-0 bg-black bg-opacity-25' />
            </div>

            <div className='fixed inset-0 z-50 flex overflow-y-scroll overscroll-y-none'>
                <div className='w-4/5'>
                    <div className='relative flex flex-col w-full max-w-sm pb-12 overflow-y-auto bg-white shadow-xl'>
                        <div className='flex px-4 pt-5 pb-2'>
                            <button
                                type='button'
                                onClick={() => setIsOpen(false)}
                                className='relative inline-flex items-center justify-center p-0 text-gray-400 rounded-md'>
                                <X className='w-6 h-6' aria-hidden='true' />
                            </button>
                        </div>

                        <div>
                            <ul>
                                {PRODUCT_CATEGORIES.map((category) => (
                                    <li
                                        key={category.label}
                                        className='flex flex-col gap-5 px-4 pt-10 pb-8'>
                                        <div className='flex border-b border-gray-200'>
                                            <p className='flex-1 text-base font-medium text-gray-900 border-b-2 border-transparent whitespace-nowrap'>
                                                {category.label}
                                            </p>
                                        </div>

                                        <div className='grid grid-cols-2 gap-y-10 gap-x-4'>
                                            {category.featured.map((item) => (
                                                <div
                                                    key={item.name}
                                                    className='relative flex flex-col gap-2 text-sm group'>
                                                    <div className='relative overflow-hidden bg-gray-100 rounded-lg aspect-square hover:opacity-75'>
                                                        <Image
                                                            fill
                                                            src={item.imageSrc}
                                                            alt='product category image'
                                                            className='object-cover object-center'
                                                        />
                                                    </div>
                                                    <Link
                                                        href={item.href}
                                                        className='block font-medium text-gray-900'>
                                                        {item.name}
                                                    </Link>
                                                </div>
                                            ))}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className='px-4 py-6 space-y-6 border-t border-gray-200'>
                            {
                                user ? null : (
                                    <div className='flow-root'>
                                        <Link
                                            onClick={() => closeOnCurrent('/sign-in')}
                                            href='/sign-in'
                                            className='block p-0 font-medium text-gray-900'>
                                            Sign in
                                        </Link>
                                    </div>
                                )
                            }

                            {user ? (
                                <UserAccountNav user={user} />
                            ) : (
                                <Link
                                    href='/sign-up'
                                    className='block p-0 font-medium text-gray-900'>
                                    Create account
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MobileNav