import {AuthOptions, getServerSession} from 'next-auth';
import authOptions from '@/lib/auth/authOptions';
import {isPlanAvailable} from '@/components/plans/security/isPlanAvailable';
import {redirect} from 'next/navigation';

export const unavailablePlanRedirector = async (id: string) => {
  const session = await getServerSession(authOptions as AuthOptions)
  const isPageAvailable = await isPlanAvailable(id, session);

  if (!isPageAvailable) {
    redirect('/plans')
  }

}