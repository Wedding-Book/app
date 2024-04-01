import prisma from '@/lib/prisma/prisma';
import {NextRequest} from 'next/server';

const handler = async (req: Request) => {
  if (req.method === 'POST') {
    const {invitationId}: {
      invitationId: string,
    } = await req.json();

    const createdGuest = await prisma.guest.create({data: {invitationId: invitationId, fullName: "Osoba towarzysząca"}});

    return new Response(
      JSON.stringify(createdGuest), {
        headers: {"content-type": "application/json"},
        status: 201
      });
  } else if (req.method === 'PUT') {
    const {guestId, fullName}: {
      guestId: string,
      fullName: string,
    } = await req.json();

      const updatedGuest = await prisma.guest.update({where: {id: guestId}, data: {fullName}});

      return new Response(
        JSON.stringify(updatedGuest), {
          headers: {"content-type": "application/json"},
          status: 200
        });
  } else if (req.method === 'DELETE') {
    const guestId = (req as NextRequest).nextUrl.searchParams.get('id');

    if (!guestId) {
      return new Response(
        JSON.stringify("Guest Not Found"), {
          headers: {"content-type": "application/json"},
          status: 404
        });
    }
    await prisma.guest.delete({where: {id: guestId}});

    return new Response(
      JSON.stringify("Guest Deleted"), {
        headers: {"content-type": "application/json"},
        status: 201
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