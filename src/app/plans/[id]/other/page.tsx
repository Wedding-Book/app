import serverSessionChecker from '@/components/protected/serverSessionChecker';
import {unavailablePlanRedirector} from '@/components/plans/security/unavailablePlanRedirector';
import Other from '@/components/plans/other/other';

const OthersPage = async ({params}: { params: { id: string } }) => {
  await serverSessionChecker({noSessionPath: '/login'});
  await unavailablePlanRedirector(params.id);

  return <Other planId={params.id}/>
}

export default OthersPage;