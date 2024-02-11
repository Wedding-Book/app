import prisma from '@/lib/prisma/prisma';

const handler = async (req: Request) => {
  if (req.method === 'PUT') {
    const {planId, giftsEnabled}: {
      planId: string,
      giftsEnabled: boolean
    } = await req.json();

    const plan = await prisma.plan.findUnique({where: {id: planId}});

    const updatedPlanConfig = await prisma.planConfig.update({where: {id: plan.planConfigId}, data: {giftsEnabled: giftsEnabled}});

    return new Response(
      JSON.stringify(updatedPlanConfig), {
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