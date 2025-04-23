"use client";


import { signIn } from "next-auth/react";
import { useState } from "react";


export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  return (
    <div className="flex flex-col items-center p-6">
      <h2 className="text-xl mb-4">Login</h2>
      <input
        className="border p-2 mb-2"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="border p-2 mb-4"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {/* <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => signIn("credentials", { email, password })}
      >
        Login
      </button> */}
      <button
        className="mt-4 text-green-600 underline"
        onClick={() => signIn("spotify")}
      >
        Sign in with Spotify
      </button>
    </div>
  );
}
