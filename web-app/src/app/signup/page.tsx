'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SignupForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch('/api/auth/signup', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    const data = await res.json();

    if (res.ok) {
      setMessage('Signup successful! Redirecting...');
      setTimeout(() => router.push('/login'), 1500);
    } else {
      setMessage(data.message || 'Signup failed');
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-white py-3">
    <h1 className="text-4xl font-bold mb-4 text-center">Sign in</h1>
    <form onSubmit={handleSubmit} className='flex flex-col gap-2 border border-black rounded p-3'>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" required className="p-2 border border-gray-300 rounded-md text-base focus:outline-none focus:border-blue-500"/>
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" required className="p-2 border border-gray-300 rounded-md text-base focus:outline-none focus:border-blue-500"/>
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" required className="p-2 border border-gray-300 rounded-md text-base focus:outline-none focus:border-blue-500"/>
      <button type="submit" className="mt-4 bg-red-500 text-white hover:bg-red-300 hover:text-white p-2 rounded">Sign Up</button>
      {message && <p>{message}</p>}
    </form>
    </div>
  );
}


