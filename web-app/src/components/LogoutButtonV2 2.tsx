'use client';


import { signOut } from 'next-auth/react';


const LogoutButtonV2 = () => {
  return (
    <button
      onClick={() => signOut({ callbackUrl: '/' })}
      className="px-4 py-2 bg-red-500 text-white rounded"
    >
      Logout
    </button>
  );
};


export default LogoutButtonV2;
