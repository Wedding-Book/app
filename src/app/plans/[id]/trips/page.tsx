import serverSessionChecker from '@/components/protected/serverSessionChecker';
import {unavailablePlanRedirector} from '@/components/plans/security/unavailablePlanRedirector';
import Trips from '@/components/plans/trips/trips';
import prisma from '@/lib/prisma/prisma';

const TripPage = async ({params}: { params: { id: string } }) => {
  await serverSessionChecker({noSessionPath: '/login'});
  await unavailablePlanRedirector(params.id);

  const trips = await prisma.trip.findMany({where: {planId: params.id}})

  return <Trips planId={params.id} initTrips={trips}/>
}

export default TripPage;