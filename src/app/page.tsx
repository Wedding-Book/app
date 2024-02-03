import serverSessionChecker from '@/components/protected/serverSessionChecker';

export default async function Home() {
  await serverSessionChecker({noSessionPath: '/login'});

  return (
      <main className='font-sans flex flex-col h-screen'>
        Nothing
      </main>
  );
}
