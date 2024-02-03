import serverSessionChecker from '@/components/protected/serverSessionChecker';
import Navigation from '@/components/navigation/navigation';
import Plans from '@/components/plans/plans';
import {AuthOptions, getServerSession} from 'next-auth';
import authOptions from '@/lib/auth/authOptions';

export default async function Home() {
  const session = await getServerSession(authOptions as AuthOptions)
  await serverSessionChecker({noSessionPath: '/login'});

  return (
    <Navigation userImage={session?.user?.image}>
      <Plans />
    </Navigation>
  );
}
