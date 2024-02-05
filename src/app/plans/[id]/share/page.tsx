import {unavailablePlanRedirector} from '@/components/plans/security/unavailablePlanRedirector';

const Share = async ({params}: { params: { id: string } }) => {
  await unavailablePlanRedirector(params.id);

  return <div>{params.id}</div>
}

export default Share