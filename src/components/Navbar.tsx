import Link from 'next/link'
import { Icons } from './Icons'
import NavItems from './NavItems'
import { buttonVariants } from './ui/button'
import UserAccountNav from './UserAccountNav'
import MobileNav from './MobileNav'

const Navbar = async () => {
    const user = false
    return (
        <header className='sticky inset-x-0 top-0 flex items-center w-full h-16 gap-5 px-5 border-b border-gray-200 z-2 bg-slate-100'>
            <MobileNav />
            <div className='flex items-center justify-center w-10 h-full'>
                <Link href='/'>
                    <Icons.logo className='w-8 h-8' />
                </Link>
            </div>

            <div className='z-50 hidden lg:block'>
                <NavItems />
            </div>

            <div className='hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6'>
                {user ? null : (
                    <Link
                        href='/sign-in'
                        className={buttonVariants({
                            variant: 'ghost',
                        })}>
                        Sign in
                    </Link>
                )}

                {user ? (
                    <UserAccountNav user={user} />
                ) : (
                    <Link
                        href='/sign-up'
                        className={buttonVariants({
                            variant: 'ghost',
                        })}>
                        Create account
                    </Link>
                )}
            </div>
        </header>
    )
}

export default Navbar