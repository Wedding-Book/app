import {unavailablePlanRedirector} from '@/components/plans/security/unavailablePlanRedirector';
import serverSessionChecker from '@/components/protected/serverSessionChecker';
import Inspirations from '@/components/plans/inspirations/inspirations';
import prisma from '@/lib/prisma/prisma';

const InspirationPage = async ({params}: { params: { id: string } }) => {
  await serverSessionChecker({noSessionPath: '/login'});
  await unavailablePlanRedirector(params.id);

  const inspirations = await prisma.inspiration.findMany({where: {planId: params.id}});

  return <Inspirations initInspirationLinks={inspirations} planId={params.id}/>
}

export default InspirationPage;