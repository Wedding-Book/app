'use client'
import {useEffect} from 'react';
import {useSession} from 'next-auth/react';
import {useRouter} from 'next/navigation';
import Loading from '@/components/loading/loading';

const ProtectedRoute = ({children}: {children: any}) => {
  const router = useRouter();
  const {data: session, status} = useSession();

  useEffect(() => {
    if (status === 'loading') return;
    if (!session) router.push('/login');
  }, [session, status, router]);

  if (status === "loading" || status === "unauthenticated") {
    return <Loading/>
  }
  return <>{children}</>;
};

export default ProtectedRoute;