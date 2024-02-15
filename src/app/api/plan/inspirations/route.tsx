import prisma from '@/lib/prisma/prisma';
import {NextRequest} from 'next/server';

const handler = async (req: Request) => {
  if (req.method === 'POST') {
    const {planId, url}: {
      planId: string,
      url: string
    } = await req.json();

    const newInspiration = await prisma.inspiration.create({data: {planId, url}});

    return new Response(
      JSON.stringify(newInspiration), {
        headers: {"content-type": "application/json"},
        status: 201
      });
  } else if (req.method === 'DELETE') {
    const inspirationId = (req as NextRequest).nextUrl.searchParams.get('id');

    if (!inspirationId){
      return new Response(
        JSON.stringify("Inspiration Not Found"), {
          headers: {"content-type": "application/json"},
          status: 404
        });
    }
    await prisma.inspiration.delete({where: {id: inspirationId}});

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