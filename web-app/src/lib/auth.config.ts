// // lib/auth.config.ts
// import SpotifyProvider from "next-auth/providers/spotify";
// import CredentialsProvider from "next-auth/providers/credentials";
// import bcrypt from "bcryptjs";
// import connectMongoDB from "./mongodb";
// import UserSpotify from "@/models/UserSpotify";
// import type { NextAuthConfig } from "next-auth";


// const config = {
//   providers: [
//     CredentialsProvider({
//       name: "credentials",
//       credentials: {
//         email: { label: "Email", type: "text" },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials) {
//         if (!credentials?.email || !credentials?.password) return null;


//         await connectMongoDB();
//         const user = await UserSpotify.findOne({ email: credentials.email });
//         if (!user || !user.password) return null;


//         const isValid = await bcrypt.compare(credentials.password, user.password);
//         if (!isValid) return null;


//         return {
//           id: user._id.toString(),
//           name: user.name,
//           email: user.email,
//         };
//       },
//     }),


//     SpotifyProvider({
//       clientId: process.env.AUTH_SPOTIFY_CLIENT_ID!,
//       clientSecret: process.env.AUTH_SPOTIFY_CLIENT_SECRET!,
//       authorization: "https://accounts.spotify.com/authorize?scope=user-read-email user-read-private",
//     }),
//   ],


//   callbacks: {
//     async signIn({ user, account }) {
//       if (account?.provider === "spotify") {
//         await connectMongoDB();
//         const existing = await UserSpotify.findOne({ email: user.email });


//         if (!existing) {
//           await UserSpotify.create({
//             email: user.email,
//             name: user.name,
//             spotifyId: account.providerAccountId,
//           });
//         }
//       }
//       return true;
//     },


//     async jwt({ token, account }) {
//       if (account?.access_token) {
//         token.accessToken = account.access_token;
//       }
//       return token;
//     },


//     async session({ session, token }) {
//       session.accessToken = token.accessToken;
//       return session;
//     },
//   },


//   pages: {
//     signIn: "/login",
//   },


//   session: {
//     strategy: "jwt",
//   },


//   secret: process.env.AUTH_SECRET,
// } satisfies NextAuthConfig;


// export default config;





