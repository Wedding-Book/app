import {unavailablePlanRedirector} from '@/components/plans/security/unavailablePlanRedirector';
import Share from '@/components/plans/share/share';
import {getCollaboratorEmails} from '@/components/plans/prisma/plans';
import serverSessionChecker from '@/components/protected/serverSessionChecker';

const SharedPage = async ({params}: { params: { id: string } }) => {
  await serverSessionChecker({noSessionPath: '/login'});
  await unavailablePlanRedirector(params.id);

  const collaboratorEmails: string[] = await getCollaboratorEmails(params.id);


  return <>
    <Share initCollaborators={collaboratorEmails} initPlanId={params.id}/>
  </>
}

export default SharedPage;