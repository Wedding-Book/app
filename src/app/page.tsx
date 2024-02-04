import serverSessionChecker from '@/components/protected/serverSessionChecker';

export default async function Root() {
  await serverSessionChecker({noSessionPath: '/login'});
  await serverSessionChecker({sessionPath: '/plans'});
  return (<></>);
}
