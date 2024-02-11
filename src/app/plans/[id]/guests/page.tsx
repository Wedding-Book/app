import serverSessionChecker from '@/components/protected/serverSessionChecker';
import {unavailablePlanRedirector} from '@/components/plans/security/unavailablePlanRedirector';
import Guests from '@/components/plans/guests/guests';
import prisma from '@/lib/prisma/prisma';

const GuestPage = async ({params}: { params: { id: string } }) => {
  await serverSessionChecker({noSessionPath: '/login'});
  await unavailablePlanRedirector(params.id);

  const invitationGuests = await prisma.plan.findUnique({where: {id: params.id}, include: {invitationGuests: {include: {guests: true}}, config: true}});

  return <Guests initInvitationGuests={invitationGuests.invitationGuests} planId={params.id} giftsEnabled={invitationGuests.config.giftsEnabled}/>
}

export default GuestPage;
