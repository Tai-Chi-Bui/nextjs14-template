'use client'
import { Button } from './ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from './ui/dropdown-menu'
import Link from 'next/link'
import { useAuth } from '@/hooks/use-auth'

const UserAccountNav = ({ user }: { user: any }) => {
    const { signOut } = useAuth()

    return (
        <DropdownMenu>
            <DropdownMenuTrigger
                asChild
                className='overflow-visible'>
                <Button
                    variant='ghost'
                    size='sm'
                    className='relative p-0 font-medium text-gray-900'>
                    My account
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent
                className='bg-white w-60'
                align='end'>
                <div className='flex items-center justify-start gap-2 p-2'>
                    <div className='flex flex-col space-y-0.5 leading-none'>
                        <p className='text-sm font-medium text-black'>
                            {user.email}
                        </p>
                    </div>
                </div>

                <DropdownMenuSeparator />

                <DropdownMenuItem asChild>
                    <Link href='/Settings'>Settings</Link>
                </DropdownMenuItem>

                <DropdownMenuItem
                    onClick={signOut}
                    className='cursor-pointer'>
                    Log out
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default UserAccountNav