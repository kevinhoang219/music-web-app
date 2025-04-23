// "use client";
// import { doCredentialLogin } from "@/app/action/index";
// import { useState } from "react";

// export default function LoginForm() {
//   const [error, setError] = useState<string | null>(null);

//   async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
//     e.preventDefault();
//     const formData = new FormData(e.currentTarget);
//     try {
//       const res = await doCredentialLogin(formData);
//       if (res?.error) {
//         setError(res.error);
//       } else {
//         // Optionally, redirect or update UI
//         window.location.href = "/";
//       }
//     } catch (err: any) {
//       setError(err.message || "Login failed");
//     }
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <input name="email" type="email" placeholder="Email" required />
//       <input name="password" type="password" placeholder="Password" required />
//       <button type="submit">Sign In</button>
//       {error && <p style={{ color: "red" }}>{error}</p>}
//     </form>
//   );
// }



