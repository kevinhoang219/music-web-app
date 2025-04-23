'use client';
import { useSession } from 'next-auth/react';
import DisplaySongs from './DisplaySongs';
import Content from './Content';
import BioSection from './BioSection';

const AuthenticatedView = () => {
    const { data: session, status } = useSession();

    return (
    <div className="min-h-screen bg-white flex flex-col justify-items-center">
      <div className='flex flex-row justify-center'>
        <div className="mx-2 max-w-5xl mt-8 px-4 grid gap-8 items-center border-red-700 p-4 rounded border-3">
          <h1 className="text-5xl font-bold capitalize">{session?.user.name}</h1> 
        </div>
        <div className="max-w-5xl mx-2 mt-8 px-4 grid gap-8 items-center border-red-700 p-4 rounded border-3">
          <BioSection/>
      </div>
      </div>
      <div className='flex flex-col items-center min-h-screen bg-white py-3 mt-8'>
      
      <Content>
        <DisplaySongs/>
      </Content>
      </div>
    </div>
);
}

export default AuthenticatedView;