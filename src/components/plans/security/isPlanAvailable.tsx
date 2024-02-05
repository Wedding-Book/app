import prisma from '@/lib/prisma/prisma';
import {Session} from 'next-auth';

export const isPlanAvailable = async (id: string, session: Session | null) => {
  const plan = await prisma.plan.findUnique(
    {
      where: {id},
      include: {
        owner: true,
        collaborators: {include: {user: true}}
      },
    });

  const owner = plan.owner;
  if (owner.email === session?.user?.email) {
    return true;
  }

  const collaborators: any[] = plan.collaborators;
  return !!collaborators.find(collab => collab.user.email === session?.user?.email);
}