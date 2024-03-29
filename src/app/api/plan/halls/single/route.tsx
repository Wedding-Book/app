import prisma from '@/lib/prisma/prisma';
import {NextRequest} from 'next/server';

const handler = async (req: Request) => {
  if (req.method === 'POST') {
    const {
      hallId,
      isPicked,
      name,
      description,
      basePrice,
      notes,
      imgUrl,
      googleUrl,
      personCost,
      additionalCost,
      partyTime,
      alcoholInPrice,
      alcoholPrice,
      drinksInPrice,
      drinksPrice,
      desertsInPrice,
      desertsPrice,
      desertsDescription,
      menu,
      isHotel,
      numberOfHotelGuests,
      hotelPricePerPerson,
      tableSettings,
      decorationInPrice,
      decorationDescription,
      additionalDecorationPrice,
      soundSystem,
      additionalAttractions,
      damagePrice,
      organizationSupport,
      organizationSupportDescription,
      availableDates,
      maxGuests,
      fruitsInPrice,
      fruitsPrice,
      childrenInPrice,
      childrenPrice,
      extensionOfWedding,
      extensionOfWeddingPrice,
      advance,
      weddingCeremony,
      weddingCeremonyDescription,
      weddingCeremonyPrice
    }: {
      hallId: string,
      isPicked: boolean,
      name: string,
      description: string,
      notes: string,
      imgUrl: string,
      googleUrl: string,
      personCost: number,
      basePrice: number,
      additionalCost: number,
      partyTime: string,
      alcoholInPrice: boolean,
      alcoholPrice: number,
      drinksInPrice: boolean,
      drinksPrice: number,
      desertsInPrice: boolean,
      desertsPrice: number,
      desertsDescription: string,
      menu: string,
      isHotel: boolean,
      numberOfHotelGuests: number,
      hotelPricePerPerson: number,
      tableSettings: string,
      decorationInPrice: boolean,
      decorationDescription: string,
      additionalDecorationPrice: number,
      soundSystem: string,
      additionalAttractions: string,
      damagePrice: string,
      organizationSupport: boolean,
      organizationSupportDescription: string,
      availableDates: string,
      maxGuests: number,
      fruitsInPrice: boolean,
      fruitsPrice: number,
      childrenInPrice: boolean,
      childrenPrice: number,
      extensionOfWedding: boolean,
      extensionOfWeddingPrice: number,
      advance: number,
      weddingCeremony: boolean,
      weddingCeremonyDescription: string,
      weddingCeremonyPrice: number,
    } = await req.json();

    const updatedHall = await prisma.hall.update({
      where: {id: hallId},
      data: {
        isPicked,
        name,
        description,
        basePrice,
        notes,
        imgUrl,
        googleUrl,
        personCost,
        additionalCost,
        partyTime,
        alcoholInPrice,
        alcoholPrice,
        drinksInPrice,
        drinksPrice,
        desertsInPrice,
        desertsPrice,
        desertsDescription,
        menu,
        isHotel,
        numberOfHotelGuests,
        hotelPricePerPerson,
        tableSettings,
        decorationInPrice,
        decorationDescription,
        additionalDecorationPrice,
        soundSystem,
        additionalAttractions,
        damagePrice,
        organizationSupport,
        organizationSupportDescription,
        availableDates,
        maxGuests,
        fruitsInPrice,
        fruitsPrice,
        childrenInPrice,
        childrenPrice,
        extensionOfWedding,
        extensionOfWeddingPrice,
        advance,
        weddingCeremony,
        weddingCeremonyDescription,
        weddingCeremonyPrice
      }
    });

    return new Response(
      JSON.stringify(updatedHall), {
        headers: {"content-type": "application/json"},
        status: 201
      });
  } else if (req.method === 'PUT') {
    const {hallId, isPicked}: {
      hallId: string,
      isPicked: boolean
    } = await req.json();

    const updatedHall = await prisma.hall.update({
      where: {id: hallId},
      data: {isPicked}
    });

    return new Response(
      JSON.stringify(updatedHall), {
        headers: {"content-type": "application/json"},
        status: 201
      });
  } else if (req.method === 'DELETE') {
    const hallId = (req as NextRequest).nextUrl.searchParams.get('id');

    if (!hallId) {
      return new Response(
        JSON.stringify("Hall Not Found"), {
          headers: {"content-type": "application/json"},
          status: 404
        });
    }
    await prisma.hall.delete({where: {id: hallId}});

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