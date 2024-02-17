import prisma from '@/lib/prisma/prisma';
import {NextRequest} from 'next/server';

const handler = async (req: Request) => {
  if (req.method === 'POST') {
    const {planId, name, price, imgUrl, offerUrl, isPicked}: {
      planId: string, name: string, price?: number, imgUrl: string, offerUrl?: string, isPicked: boolean
    } = await req.json();

    const newTrip = await prisma.trip.create({data: {planId, name, price, imgUrl, offerUrl, isPicked}});

    return new Response(
      JSON.stringify(newTrip), {
        headers: {"content-type": "application/json"},
        status: 201
      });
  } else if (req.method === 'DELETE') {
    const tripId = (req as NextRequest).nextUrl.searchParams.get('id');

    if (!tripId) {
      return new Response(
        JSON.stringify("Inspiration Not Found"), {
          headers: {"content-type": "application/json"},
          status: 404
        });
    }
    await prisma.trip.delete({where: {id: tripId}});

    return new Response(
      JSON.stringify("Delete succeed"), {
        headers: {"content-type": "application/json"},
        status: 200
      });
  } else if (req.method === 'PUT') {
    const {tripId, isPicked}: {
      tripId: string, isPicked: boolean
    } = await req.json();
    await prisma.trip.update({where: {id: tripId}, data: {isPicked: isPicked}});

    return new Response(
      JSON.stringify("Update succeed"), {
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