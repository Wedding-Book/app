import prisma from '@/lib/prisma/prisma';

const handler = async (req: Request) => {
  if (req.method === 'POST') {
    const {planId, name, price, description, imgUrl, offerUrl, isParent, quantity}: {
      planId: string,
      name: string,
      description: string,
      price?: number,
      quantity?: number,
      imgUrl: string,
      offerUrl?: string,
      isParent: boolean
    } = await req.json();

    if (isParent) {
      const parentGift = await prisma.parentGift.findUnique({where: {planId}});
      if (parentGift) {
        const newParentGift = await prisma.parentGift.update({
          where: {planId},
          data: {
            name,
            price,
            imgUrl,
            offerUrl,
            description,
            quantity
          }
        });
        return new Response(
          JSON.stringify(newParentGift), {
            headers: {"content-type": "application/json"},
            status: 201
          });
      }

      const newParentGift = await prisma.parentGift.create({
        data: {
          planId,
          name,
          price,
          imgUrl,
          offerUrl,
          description,
          quantity
        }
      });
      return new Response(
        JSON.stringify(newParentGift), {
          headers: {"content-type": "application/json"},
          status: 201
        });
    }
    const guestGift = await prisma.guestGift.findUnique({where: {planId}});
    if (guestGift) {
      const newGuestGift = await prisma.guestGift.update({
        where: {planId}, data: {
          name,
          price,
          imgUrl,
          offerUrl,
          description
        }
      });
      return new Response(
        JSON.stringify(newGuestGift), {
          headers: {"content-type": "application/json"},
          status: 201
        });
    }

    const newGuestGift = await prisma.guestGift.create({data: {planId, name, price, imgUrl, offerUrl, description}});
    return new Response(
      JSON.stringify(newGuestGift), {
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