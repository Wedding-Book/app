import prisma from '@/lib/prisma/prisma';
import {NextRequest} from 'next/server';

const handler = async (req: Request) => {
  if (req.method === 'GET') {
    const planId = (req as NextRequest).nextUrl.searchParams.get('planId');
    if (!planId)
      return new Response(JSON.stringify({error: 'Plan not found'}), {
        headers: {"content-type": "application/json"},
        status: 404
      });

    const plan = await prisma.plan.findUnique({
      where: {id: planId}
    })

    return new Response(JSON.stringify(plan.eventDate), {
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

export {handler as GET};