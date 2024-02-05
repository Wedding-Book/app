import prisma from '@/lib/prisma/prisma';
import {Session} from 'next-auth';

export const isPlanAvailable = async (id: string, session: Session | null) => {
  const plan = await prisma.plan.findUnique(
    {
      where: {id},
      include: {
        owner: true,
        collaborators: true
      },
    });

  const owner = plan.owner;
  if (owner.email === session?.user?.email) {
    return true;
  }

  const collaborators: any[] = plan.collaborators;
  const findResult = collaborators.find(collab => collab.email === session?.user?.email)
  return findResult > 0;
}