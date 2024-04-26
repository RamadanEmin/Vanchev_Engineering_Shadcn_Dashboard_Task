import Link from 'next/link';
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';

export default function Home() {
    return (
        <section className='py-4 px-6'>
            <nav className=' flex items-center justify-between'>
                <ul className='flex gap-6'>
                    <li>
                        <Link className='hover:text-blue-500' href='/'>Home</Link>
                    </li>
                    <li>
                        <Link className='hover:text-blue-500' href='/dashboard'>Dashboard</Link>
                    </li>
                </ul>

                <div className='flex items-center justify-between gap-6'>
                    <SignedOut>
                        <SignInButton mode='modal'>
                            <Button size='sm'>Sign in</Button>
                        </SignInButton>
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                </div>
            </nav>
            
            <div className="flex items-center justify-center min-h-[80vh]">
                <div className="p-8 bg-white shadow-lg rounded-lg">
                    <h1 className="text-center text-xl font-semibold text-gray-900">Get started by signing in or signing up to explore the Dashboard!</h1>
                </div>
            </div>
        </section>
    );
}