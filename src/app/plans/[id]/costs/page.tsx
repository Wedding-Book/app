import serverSessionChecker from '@/components/protected/serverSessionChecker';
import {unavailablePlanRedirector} from '@/components/plans/security/unavailablePlanRedirector';
import Costs from '@/components/plans/costs/costs';

const CostsPage = async ({params}: { params: { id: string } }) => {
  await serverSessionChecker({noSessionPath: '/login'});
  await unavailablePlanRedirector(params.id);

  return <Costs planId={params.id}/>
}

export default CostsPage;