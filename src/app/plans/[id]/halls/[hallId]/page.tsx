import {unavailablePlanRedirector} from '@/components/plans/security/unavailablePlanRedirector';
import serverSessionChecker from '@/components/protected/serverSessionChecker';

const HallPage = async ({params}: { params: { id: string, hallId: string } }) => {
  await serverSessionChecker({noSessionPath: '/login'});
  await unavailablePlanRedirector(params.id);

  return <>{params.id}/{params.hallId}</>

}

export default HallPage;