import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import prisma from '@/lib/prisma/prisma';
import {PrismaAdapter} from '@auth/prisma-adapter';
import {Adapter} from 'next-auth/adapters';

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
  ],
  adapter: PrismaAdapter(prisma) as Adapter,
}

const handler = NextAuth(authOptions);

export {handler as GET, handler as POST};