import prisma from '@/lib/prisma/prisma';
import {NextRequest} from 'next/server';

const handler = async (req: Request) => {
  if (req.method === 'POST') {
    const {planId, name, description, imgUrl}: {
      planId: string,
      name: string,
      description: string,
      imgUrl: string,
    } = await req.json();

    const createdHall = await prisma.hall.create({data: {planId, name, description, imgUrl}});

    return new Response(
      JSON.stringify(createdHall), {
        headers: {"content-type": "application/json"},
        status: 201
      });
  } else if (req.method === 'PUT') {
    const {invitationId, moneyGift, otherGift}: {
      invitationId: string,
      moneyGift: number,
      otherGift: string
    } = await req.json();

    const updatedInvitation = await prisma.invitationGuest.update({
      where: {id: invitationId},
      data: {moneyGift, otherGift}
    });

    return new Response(
      JSON.stringify(updatedInvitation), {
        headers: {"content-type": "application/json"},
        status: 201
      });
  } else if (req.method === 'DELETE') {
    const invitationId = (req as NextRequest).nextUrl.searchParams.get('id');

    if (!invitationId){
      return new Response(
        JSON.stringify("Invitation Not Found"), {
          headers: {"content-type": "application/json"},
          status: 404
        });
    }
    await prisma.invitationGuest.delete({where: {id: invitationId}});

    return new Response(
      JSON.stringify("Delete succeed"), {
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