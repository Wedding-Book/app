import {unavailablePlanRedirector} from '@/components/plans/security/unavailablePlanRedirector';
import serverSessionChecker from '@/components/protected/serverSessionChecker';
import Halls from '@/components/plans/halls/halls';
import prisma from '@/lib/prisma/prisma';

const HallsPage = async ({params}: { params: { id: string } }) => {
  await serverSessionChecker({noSessionPath: '/login'});
  await unavailablePlanRedirector(params.id);

  const pickedHall = await prisma.hall.count({where: {planId: params.id, isPicked: true}});
  if (pickedHall === 0){
    const pickedHalls = await prisma.hall.findMany({where: {planId: params.id, isPicked: false}});
    return <Halls planId={params.id} initHalls={pickedHalls}/>
  }
  const pickedHalls = await prisma.hall.findFirst({where: {AND: [{planId: params.id}, {isPicked: true}]}});
  return <Halls planId={params.id} initPickedHall={pickedHalls}/>

}

export default HallsPage;