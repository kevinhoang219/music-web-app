'use client';
import { useSession } from 'next-auth/react';
import DisplaySongs from './DisplaySongs';
import Content from './Content';

const AuthenticatedView = () => {
    const { data: session, status } = useSession();

    return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="max-w-5xl mx-auto mt-8 px-4 grid md:grid-cols-2 gap-8 items-center border border-orange-500 p-4 rounded border-3">
        <div>
            <h1 className="text-2xl font-bold">{session?.user.name}</h1> 
        </div>
      </div>
      <Content>
        <DisplaySongs/>
      </Content>
    </div>
);
}

export default AuthenticatedView;