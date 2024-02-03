import serverSessionChecker from '@/components/protected/serverSessionChecker';
import React from 'react';

export default async function Home() {
  await serverSessionChecker({noSessionPath: '/login'});

  return (<>
      Test
    </>
  );
}
