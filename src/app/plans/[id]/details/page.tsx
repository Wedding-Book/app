import {unavailablePlanRedirector} from '@/components/plans/security/unavailablePlanRedirector';

const PlanIdPage = async ({params}: { params: { id: string } }) => {
  await unavailablePlanRedirector(params.id);

  return <div>{params.id}</div>
}

export default PlanIdPage;
