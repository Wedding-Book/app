import prisma from '@/lib/prisma/prisma';
import {NextRequest} from 'next/server';

const handler = async (req: Request) => {
  if (req.method === 'POST') {
    const {email} = await req.json();

    const user = await prisma.user.findUnique({where: {email}})
    const newPlan = await prisma.plan.create({
      data: {
        name: 'Testowe weselicho',
        description: 'Ale będzie balet na tym testowym weselichu dopiero zobaczycie!!!!!!!',
        ownerId: user.id
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
  } else {
    return new Response(
      JSON.stringify({error: 'Method Not Allowed'}), {
        headers: {"content-type": "application/json"},
        status: 405
      });
  }
}

export {handler as POST, handler as GET};