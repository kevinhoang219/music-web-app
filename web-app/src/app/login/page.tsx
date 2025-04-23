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
    <form onSubmit={handleSubmit}>
      {formError && <p className="text-red-500">{formError}</p>}
      {error && <p className="text-red-500">{decodeURIComponent(error)}</p>}

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Sign In</button>
    </form>
  );
}


