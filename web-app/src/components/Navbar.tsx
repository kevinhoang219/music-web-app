'use client';

import { useSession, signOut } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  const handleLogin = () => {
    router.push('/login');
  };

  return (
    <nav className="bg-red-700 text-white px-6 py-4 flex justify-between items-center sticky top-0 z-50">
      {/* App Name */}
      <Link href="/" className="text-lg font-bold">Jukebox</Link>

      {/* Leaderboard */}
      <div className="flex gap-4 items-center">
        <Link href="/addmusic" className="hover:underline font-bold">Search Music</Link>
      </div>

      {/* My Profile and User Name */}
      {session?.user && (
        <div className="flex gap-4 items-center">
          <Link href="/profile" className="hover:underline font-bold">My Profile</Link>
          <span className="hidden md:inline">Hello, {session.user.name || session.user.email}</span>
        </div>
      )}

      {/* Login / Logout Buttons */}
      <div className="hidden md:block md:ml-6">
        <div className="flex items-center">
          {!session ? (
            <button
              onClick={handleLogin}
              className="flex items-center text-red-700 bg-neutral-50 hover:bg-red-900 hover:text-white rounded-md px-3 py-2"
            >
              <span>Login</span>
            </button>
          ) : (
            <button
              onClick={() => signOut()}
              className="flex items-center text-red-700 bg-neutral-50 hover:bg-red-900 hover:text-white rounded-md px-3 py-2"
            >
              <span>Logout</span>
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


