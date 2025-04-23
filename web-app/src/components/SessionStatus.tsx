'use client';


import { useSession } from 'next-auth/react';


const SessionStatus = () => {
  const { data: session, status } = useSession();


  if (status === 'loading') return <p>Loading session...</p>;


  if (status === 'authenticated') {
    return (
      <div>
        <p>✅ Logged in as {session.user?.email}</p>
      </div>
    );
  }


  return <p>❌ Not logged in</p>;
};


export default SessionStatus;





