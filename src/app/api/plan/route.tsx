import prisma from '@/lib/prisma/prisma';
import {NextRequest} from 'next/server';

const handler = async (req: Request) => {
  if (req.method === 'POST') {
    const {email, name, description, eventDate} = await req.json();

    const user = await prisma.user.findUnique({where: {email}})

    const createdPlanConfig = await prisma.planConfig.create({data: {}})

    const newPlan = await prisma.plan.create({
      data: {
        name,
        description,
        ownerId: user.id,
        eventDate,
        planConfigId: createdPlanConfig.id
      }
    })
    return new Response(
      JSON.stringify(newPlan), {
        headers: {"content-type": "application/json"},
        status: 201
      });
  } else if (req.method === 'GET') {
    const email = (req as NextRequest).nextUrl.searchParams.get('email');
    if (!email)
      return new Response(JSON.stringify({error: 'Plans not found'}), {
        headers: {"content-type": "application/json"},
        status: 404
      });

    const userWithPlans = await prisma.user.findUnique({
      where: {email},
      include: {
        plans: true,
      },
    })

    return new Response(JSON.stringify(userWithPlans.plans), {
      headers: {"content-type": "application/json"},
      status: 200
    });
  } else if (req.method === 'DELETE') {
    const planId = (req as NextRequest).nextUrl.searchParams.get('planId');
    if (!!planId) {
      const deletedPlan = await prisma.plan.delete({where: {id: planId}});
      return new Response(JSON.stringify(deletedPlan), {
        headers: {"content-type": "application/json"},
        status: 200
      });
    }
  } else if (req.method === 'PUT') {
    const {id, name, description, eventDate} = await req.json();
    const updated = await prisma.plan.update({where: {id}, data: {name, description, eventDate}})
    return new Response(JSON.stringify(updated), {
      headers: {"content-type": "application/json"},
      status: 200
    });
  } else {
    return new Response(
      JSON.stringify({error: 'Method Not Allowed'}), {
        headers: {"content-type": "application/json"},
        status: 405
      });
  }
}

export {handler as POST, handler as GET, handler as DELETE, handler as PUT};