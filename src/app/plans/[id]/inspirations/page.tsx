import {unavailablePlanRedirector} from '@/components/plans/security/unavailablePlanRedirector';
import serverSessionChecker from '@/components/protected/serverSessionChecker';

const InspirationPage = async ({params}: { params: { id: string } }) => {
  await serverSessionChecker({noSessionPath: '/login'});
  await unavailablePlanRedirector(params.id);

  return <>Inspirations</>
}

export default InspirationPage;