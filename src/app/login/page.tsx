import Login from '@/components/login/login';
import serverSessionChecker from '@/components/protected/serverSessionChecker';

export default async function LoginPage() {
  await serverSessionChecker({sessionPath: '/'});

  return (
      <Login />
  )
}