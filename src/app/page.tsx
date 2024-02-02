import serverSessionChecker from '@/components/protected/serverSessionChecker';

export default async function Home() {
  await serverSessionChecker();

  return (
      <main className='font-sans flex flex-col h-screen'>
        Nothing
      </main>
  );
}
