"use client";
import { signIn } from "next-auth/react";
import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const error = searchParams.get("error");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (res?.error) {
      setFormError(res.error); // Set error from backend
    } else {
      router.push("/"); // or wherever you want to go after login
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-white">
      <h1 className="text-4xl font-bold mb-4 text-center">Sign in</h1>
    <form onSubmit={handleSubmit} className='flex flex-col gap-2 border border-black rounded p-3'>
      {formError && <p className="text-red-500">{formError}</p>}
      {error && <p className="text-red-500">{decodeURIComponent(error)}</p>}

      <input className="p-2 border border-gray-300 rounded-md text-base focus:outline-none focus:border-blue-500"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input className="p-2 border border-gray-300 rounded-md text-base focus:outline-none focus:border-blue-500"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit" className="mt-4 bg-red-700 text-white hover:bg-red-400 hover:text-white p-2 rounded">Sign In</button>
    </form>
    </div>
  );
}


