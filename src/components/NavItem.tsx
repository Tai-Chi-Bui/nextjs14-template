'use client'

import { PRODUCT_CATEGORIES } from '@/config'
import { Button } from './ui/button'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

type Category = (typeof PRODUCT_CATEGORIES)[number]

interface NavItemProps {
    category: Category
    handleOpen: () => void
    close: () => void
    isOpen: boolean
    isAnyOpen: boolean
}

const NavItem = ({
    isAnyOpen,
    category,
    handleOpen,
    close,
    isOpen,
}: NavItemProps) => {
    return (
        <div className='flex'>

            <div className='relative flex items-center'>
                <Button
                    className='gap-1.5'
                    onClick={handleOpen}
                    variant={isOpen ? 'secondary' : 'ghost'}>
                    {category.label}
                    <ChevronDown
                        className={cn(
                            'h-4 w-4 transition-all text-muted-foreground',
                            {
                                '-rotate-180': isOpen,
                            }
                        )}
                    />
                </Button>
            </div>

            {isOpen ? (
                <div
                    onClick={() => close()}
                    className={cn(
                        'absolute inset-x-0 top-full text-sm text-muted-foreground bg-slate-100',
                        {
                            'animate-in fade-in-10 slide-in-from-top-5':
                                !isAnyOpen,
                        }
                    )}>
                    <div className='grid grid-cols-3 p-16 gap-x-8 gap-y-10'>
                        {category.featured.map((item) => (
                            <div
                                onClick={() => close}
                                key={item.name}
                                className='relative flex flex-col justify-start gap-3 text-base sm:text-sm'>
                                <div className='relative overflow-hidden bg-gray-100 rounded-lg w-65 aspect-video group-hover:opacity-75'>
                                    <Image
                                        src={item.imageSrc}
                                        alt='product category image'
                                        fill
                                        className='object-cover object-center'
                                    />
                                </div>

                                <Link
                                    href={item.href}
                                    className='block font-medium text-gray-900'>
                                    {item.name}
                                </Link>
                                <p
                                    className=''
                                    aria-hidden='true'>
                                    Shop now
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            ) : null}
        </div>
    )
}

export default NavItem