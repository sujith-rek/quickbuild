import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { fetchCredentials } from "@/services/users.services";
import { compareSync } from "bcrypt";

export default NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email", placeholder: "Enter your email" },
                password: { label: "Password", type: "password" },
            },

            async authorize(credentials) {
                const user = await fetchCredentials(credentials.email);
                if (user && compareSync(credentials.password, user.password)) {
                    return {
                        id: user.id,
                        name: user.name,
                        email: user.email,
                        phone: user.phone
                    } as any;
                } else {
                    return null;
                }
            },
        }),
    ],
    pages: {
        signIn: "/auth/signin",
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.name = user.name;
                token.email = user.email;
            }
            return token;
        },
        async session({ session, token }) {
            session.user = token;
            return session;
        },
    },
    secret: process.env.NEXTAUTH_SECRET,
});
