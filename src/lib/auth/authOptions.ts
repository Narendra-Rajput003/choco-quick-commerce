import GoogleProvider from 'next-auth/providers/google';
import { db } from '../db/db';
import { users } from '../db/schema';
import { AuthOptions } from 'next-auth';
import { z } from 'zod';

// Validate environment variables
const envSchema = z.object({
    GOOGLE_CLIENT_ID: z.string(),
    GOOGLE_CLIENT_SECRET: z.string(),
});

const env = envSchema.parse(process.env);

interface GoogleProfile {
    given_name: string;
    family_name: string;
    email: string;
    sub: string;
    picture: string;
}

interface UserData {
    fname: string;
    lname: string;
    email: string;
    provider: string;
    externalId: string;
    image: string;
}

export const authOptions: AuthOptions = {
    providers: [
        GoogleProvider({
            clientId: env.GOOGLE_CLIENT_ID,
            clientSecret: env.GOOGLE_CLIENT_SECRET,
            async profile(profile: GoogleProfile, token: any) {
                const data: UserData = {
                    fname: profile.given_name,
                    lname: profile.family_name,
                    email: profile.email,
                    provider: 'GOOGLE',
                    externalId: profile.sub,
                    image: profile.picture,
                };

                try {
                    const user = await db
                        .insert(users)
                        .values(data)
                        .onConflictDoUpdate({ target: users.email, set: data })
                        .returning();

                    return {
                        ...data,
                        name: data.fname,
                        id: String(user[0].id),
                        role: user[0].role,
                    };
                } catch (err) {
                    console.error('Database error:', err);
                    throw new Error('Failed to create or update user');
                }
            },
        }),
    ],
    callbacks: {
        session({ session, token }: { session: any; token: any }) {
            if (token) {
                session.user.id = token.id;
                session.user.role = token.role;
            }
            return session;
        },
        jwt({ token, user }: { token: any; user: any }) {
            if (user) {
                token.role = user.role;
                token.id = user.id;
            }
            return token;
        },
    },
};