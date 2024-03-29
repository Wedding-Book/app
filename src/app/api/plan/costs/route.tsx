import prisma from '@/lib/prisma/prisma';
import {NextRequest} from 'next/server';

type CostModel = {
  id?: string,
  name: string,
  price: number
  quantity: number
}

const handler = async (req: Request) => {
  if (req.method === 'GET') {
    const planId = (req as NextRequest).nextUrl.searchParams.get('planId');
    if (!planId)
      return new Response(JSON.stringify({error: 'Plan not found'}), {
        headers: {"content-type": "application/json"},
        status: 404
      });
    const plan = await prisma.plan.findUnique({
      where: {id: planId},
      include: {
        invitationGuests: {include: {guests: true}},
        hallPropositions: true,
        additionalCosts: true,
        trips: true,
        parentGift: true,
        guestGift: true
      }
    });

    const result: CostModel[] = [];
    let numberOfGuests = 0;
    plan.invitationGuests.forEach((inv: any) => numberOfGuests += inv.guests.length)
    result.push({name: "Prezenty dla gości", price: (plan.guestGift.price ?? 0) , quantity: numberOfGuests})
    result.push({name: "Prezenty dla rodziców", price: (plan.parentGift.price ?? 0), quantity: plan.parentGift.quantity})
    const pickedHall = plan.hallPropositions.filter((hall: any) => hall.isPicked);
    if (!!pickedHall) {
      result.push({name: "Podstawowa cena sali", price: pickedHall.basePrice ?? 0, quantity: 1});
      result.push({name: "Cena gości", price: pickedHall.personCost ?? 0, quantity: numberOfGuests});
      result.push({name: "Dodatkowe wydatki na salę", price: pickedHall.additionalCost ?? 0, quantity: 1});
      result.push({name: "Goście hotelowi na sali", price: pickedHall.hotelPricePerPerson ?? 0, quantity: pickedHall.numberOfHotelGuests ?? 0});
      result.push({name: "Dodatkowe opłaty dekorację sali", price: pickedHall.additionalDecorationPrice ?? 0, quantity: 1});
      result.push({name: "Cena ceremonii weselenj na sali", price: pickedHall.weddingCeremonyPrice ?? 0, quantity: 1});
      result.push({name: "Cena za alkohol", price: pickedHall.alcoholPrice ?? 0, quantity: 1});
      result.push({name: "Cena za napoje", price: pickedHall.drinksPrice ?? 0, quantity: 1});
      result.push({name: "Cena za napoje", price: pickedHall.drinksPrice ?? 0, quantity: 1});
      result.push({name: "Cena za desery", price: pickedHall.desertsPrice ?? 0, quantity: 1});
      result.push({name: "Cena za owoce", price: pickedHall.fruitsPrice ?? 0, quantity: 1});
    }
    const pickedTrip = plan.trips.filter((trip: any) => trip.isPicked);
    if (!!pickedTrip) {
      result.push({name: "Podróż", price: pickedTrip.price ?? 0, quantity: 1});
    }
    return new Response(JSON.stringify([...result, ...plan.additionalCosts]), {
      headers: {"content-type": "application/json"},
      status: 200
    });
  } else if (req.method === 'POST') {
    const {planId}: {
      planId: string,
    } = await req.json();

    const createdCost = await prisma.additionalCost.create({data: {planId, name: "", price: 0, quantity: 1}});

    return new Response(
      JSON.stringify(createdCost), {
        headers: {"content-type": "application/json"},
        status: 201
      });
  } else if (req.method === 'DELETE') {
    const costsId = (req as NextRequest).nextUrl.searchParams.get('id');

    if (!costsId) {
      return new Response(
        JSON.stringify("Cost Not Found"), {
          headers: {"content-type": "application/json"},
          status: 404
        });
    }
    await prisma.additionalCost.delete({where: {id: costsId}});

    return new Response(
      JSON.stringify("Delete succeed"), {
        headers: {"content-type": "application/json"},
        status: 200
      });
  } else if (req.method === 'PUT') {
    const {costId, name, price, quantity}: {
      costId: string,
      name: string,
      price: number,
      quantity: number,
    } = await req.json();

    const updatedCost = await prisma.additionalCost.update({where: {id: costId}, data: {name, price, quantity}});

    return new Response(
      JSON.stringify(updatedCost), {
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