import serverSessionChecker from '@/components/protected/serverSessionChecker';
import {unavailablePlanRedirector} from '@/components/plans/security/unavailablePlanRedirector';
import Gifts from '@/components/plans/gifts/gifts';
import prisma from '@/lib/prisma/prisma';

const GiftsPage = async ({params}: { params: { id: string } }) => {
  await serverSessionChecker({noSessionPath: '/login'});
  await unavailablePlanRedirector(params.id);

  const guestGift = await prisma.guestGift.findUnique({where: {planId: params.id}})
  const parentGift = await prisma.parentGift.findUnique({where: {planId: params.id}})

  return <Gifts planId={params.id} initGuestGift={guestGift} initParentGift={parentGift}/>
}

export default GiftsPage;