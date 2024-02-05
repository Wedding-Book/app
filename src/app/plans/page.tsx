import serverSessionChecker from '@/components/protected/serverSessionChecker';
import React from 'react';
import Owned from '@/components/plans/owned';
import Shared from '@/components/plans/shared';
import {AuthOptions, getServerSession} from 'next-auth';
import authOptions from '@/lib/auth/authOptions';
import {plans, sharedPlans} from '@/components/plans/prisma/plans';

export default async function Home() {
  await serverSessionChecker({noSessionPath: '/login'});
  const session = await getServerSession(authOptions as AuthOptions);
  const userPlans = await plans(session)
  const userSharedPlans = await sharedPlans(session)

  return (<>
    <Owned plans={userPlans}/>
    <Shared plans={userSharedPlans}/>
  </>);
}
