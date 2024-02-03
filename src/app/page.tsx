import serverSessionChecker from '@/components/protected/serverSessionChecker';
import Navigation from '@/components/navigation/navigation';
import Plans from '@/app/plans/page';

export default async function Home() {
  await serverSessionChecker({noSessionPath: '/login'});

  return (
    <Navigation>
      <Plans/>
    </Navigation>
  );
}
