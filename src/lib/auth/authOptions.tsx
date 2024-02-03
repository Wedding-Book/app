import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import prisma from '@/lib/prisma/prisma';
import bcrypt from 'bcrypt';
import {PrismaAdapter} from '@auth/prisma-adapter';
import {Adapter} from 'next-auth/adapters';

export const authOptions = {
  pages: {
    signIn: '/login',
    signOut: '/',
    error: '/',
    verifyRequest: '/',
    newUser: '/'
  },
  session: {
    strategy: 'jwt'
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        const user = await prisma.user.findUnique({where: {email: credentials?.email}})
        if (!!user && user.password === null)
          return null;
        if (!!user && !!user.password && !!credentials?.password){
          const validPassword = await bcrypt.compare(credentials?.password, user.password);
          if (validPassword)
            return user;
          return null;
        }
        const encryptedValue = bcrypt.hashSync(credentials?.password ?? "", 10)
        const newUser = await prisma.user.create({data: {email: credentials?.email, password: encryptedValue}})
        if (newUser) {
          return newUser
        } else {
          return null
        }
      }
    })
  ],
  adapter: PrismaAdapter(prisma) as Adapter,
}

export default authOptions;
