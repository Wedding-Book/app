import prisma from '@/lib/prisma/prisma';
import {Session} from 'next-auth';

export const plans = async (session: Session | null) => {
  const userWithPlans = await prisma.user.findUnique({
    where: {email: session?.user?.email},
    include: {
      plans: true,
    },
  });
  return userWithPlans.plans;
}

export const sharedPlans = async (session: Session | null) => {
  const userSharedPlans = await prisma.user.findUnique({
    where: {email: session?.user?.email},
    include: {
      sharedPlans: true,
    },
  });
  return userSharedPlans.sharedPlans;
}