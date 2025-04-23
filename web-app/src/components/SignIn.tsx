'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface formData {
    username: string;
    password: string;
}

interface signUpProps {
    onAddUser: (user : formData) => void;
}

const SignIn = ({ onAddUser } : signUpProps) => {
  const [formData, setFormData] = useState<formData>({
    username: "",
    password: "",
  });

  // initialize setError
  const [error, setError] = useState('');

  const updateData = (data : React.ChangeEvent<HTMLInputElement>) => {
    setFormData({...formData, [data.target.name]: data.target.value});
  };

  const handleSubmission = (submission : React.FormEvent) => {
    submission.preventDefault();

    // require username or password
    if (!formData.username || !formData.password) {
      setError('Username and password are required!');
      return;
    }

    // passing form input
    onAddUser(formData);

    // clear form
    setFormData({username: "", password: "",});

    setError(''); // reset error message
  };

    const router = useRouter();
    const gotoSignUp =  () => {
        router.push('/signup');
    };

    return (
      <div className="flex flex-col justify-center items-center min-h-screen bg-white py-3">
       <h1 className="text-4xl font-bold mb-4 text-center">Sign in</h1>
        <form onSubmit={handleSubmission} className='flex flex-col gap-2 border border-black rounded p-3'>
          <label htmlFor="username">Username</label>
          <input className="p-2 border border-gray-300 rounded-md text-base focus:outline-none focus:border-blue-500"
            name="username"
            type="text"
            value={formData.username}
            onChange={updateData}
            placeholder="Enter your username"
          />
          <label htmlFor="password">Password</label>
          <input className="p-2 border border-gray-300 rounded-md text-base focus:outline-none focus:border-blue-500"
            name="password"
            type="password"
            value={formData.password}
            onChange={updateData}
            placeholder="Enter your password"
          />
          <button type="submit" disabled={!formData.username || !formData.password} className="mt-4 bg-orange-500 text-white hover:bg-orange-300 hover:text-white p-2 rounded">Sign In</button>
        </form>
        <h2 className='mt-4'>Are you a new user?</h2>
        <button onClick={gotoSignUp} className="mt-4 bg-orange-500 text-white hover:bg-orange-300 hover:text-white p-2 rounded">Sign up</button>
      </div>
  );
}

export default SignIn;