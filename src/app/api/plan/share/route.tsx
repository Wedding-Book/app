import prisma from '@/lib/prisma/prisma';
import {NextRequest} from 'next/server';

const handler = async (req: Request) => {
  if (req.method === 'POST') {
    const {planId, sharedEmail} = await req.json();

    const sharedUser = await prisma.user.findUnique({where: {email: sharedEmail}});

    if (!sharedUser) {
      return new Response(
        JSON.stringify({error: 'User Not Found'}), {
          headers: {"content-type": "application/json"},
          status: 404
        });
    }
    const plan = await prisma.plan.findUnique({
      where: {id: planId},
      include: {
        owner: true,
        collaborators: {include: {user: true}}
      }
    });

    const existOnCollab = !!plan.collaborators.find((collab: any) => collab.user.email === sharedEmail);
    if (plan.owner.email === sharedEmail || existOnCollab) {
      return new Response(
        JSON.stringify({error: 'Not Acceptable to be collaborator of this plan'}), {
          headers: {"content-type": "application/json"},
          status: 406
        });
    }
    const newSharedPlan = await prisma.sharedPlans.create({data: {userId: sharedUser.id, planId: plan.id}});

    return new Response(
      JSON.stringify(newSharedPlan), {
        headers: {"content-type": "application/json"},
        status: 200
      });
  } else if (req.method === 'DELETE') {
    const planId = (req as NextRequest).nextUrl.searchParams.get('planId');
    const sharedEmail = (req as NextRequest).nextUrl.searchParams.get('sharedEmail');

    if (!planId && !sharedEmail) {
      return new Response(
        JSON.stringify({error: 'Bad request parameters'}), {
          headers: {"content-type": "application/json"},
          status: 400
        });
    }

    if (!!planId && !!sharedEmail) {
      const sharedUser = await prisma.user.findUnique({where: {email: sharedEmail}});

      if (!sharedUser) {
        return new Response(
          JSON.stringify({error: 'User Not Found'}), {
            headers: {"content-type": "application/json"},
            status: 404
          });
      }
      const plan = await prisma.plan.findUnique({
        where: {id: planId},
        include: {
          owner: true,
          collaborators: {include: {user: true}}
        }
      });
      if (!!sharedUser.id && !!plan.id) {
        const deletedSharedPlan = await prisma.sharedPlans.deleteMany({where: {AND: [{userId: sharedUser.id}, {planId: plan.id}]}});
        return new Response(
          JSON.stringify(deletedSharedPlan), {
            headers: {"content-type": "application/json"},
            status: 200
          });
      }
    }

  } else {
    return new Response(
      JSON.stringify({error: 'Method Not Allowed'}), {
        headers: {"content-type": "application/json"},
        status: 405
      });
  }
}

export {handler as POST, handler as DELETE};