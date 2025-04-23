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
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true); // Start loading state

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (res?.error) {
      setFormError(res.error); // Set error from backend
    } else {
      router.push("/"); // Redirect on successful login
    }

    setIsLoading(false); // End loading state
  };

  return (
    <form onSubmit={handleSubmit}>
      {formError && <p className="text-red-500">{formError}</p>}
      {error && <p className="text-red-500">{decodeURIComponent(error)}</p>}

      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <button type="submit" disabled={isLoading}>
        {isLoading ? "Signing In..." : "Sign In"}
      </button>
    </form>
  );
}


