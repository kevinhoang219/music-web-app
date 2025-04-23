import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { User } from "@/models/User";
import connectMongoDB from "./connectdb";
import { NextAuthOptions } from "next-auth";

export const authConfig: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        await connectMongoDB();

        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const user = await User.findOne({ email: credentials.email });

        if (!user) {
          return null;
        }

        const isValid = await bcrypt.compare(credentials.password, user.password);

        if (!isValid) {
          return null;
        }

        return {
          id: user._id.toString(),
          email: user.email,
          name: user.name,
        };
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/signin",
    error: "/signin", // optional: route to show login errors
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (token?.id) {
        session.user = {
          ...session.user,
          id: token.id,
        };
      }
      return session;
    },
  },
};


