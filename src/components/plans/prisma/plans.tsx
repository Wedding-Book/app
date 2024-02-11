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
      sharedPlans: { include: { plan: true }},
    },
  });
  return userSharedPlans.sharedPlans;
}

export const getCollaboratorEmails = async (planId: string) => {
  const planWithCollaborators = await prisma.plan.findUnique({
    where: {id: planId},
    include: {
      collaborators: { include: { user: true }},
    },
  });
  return planWithCollaborators.collaborators.map((col: any) => col.user.email)
}

export const getPlan = async (planId: string) => {
  return await prisma.plan.findUnique({
    where: {id: planId},
    include: {config: true}
  });
}