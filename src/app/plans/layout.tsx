import Navigation from '@/components/navigation/navigation';
import {AuthOptions, getServerSession} from 'next-auth';
import authOptions from '@/lib/auth/authOptions';
import React from 'react';

export default async function Home({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions as AuthOptions)

  return (
    <Navigation session={session} userImage={session?.user?.image}>
      {children}
    </Navigation>
  );
}
