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
        guestGift: true,
        other: true
      }
    });

    const result: CostModel[] = [];
    let numberOfGuests = 0;
    plan.invitationGuests.forEach((inv: any) => numberOfGuests += inv.guests.length)
    result.push({name: "Prezenty dla gości", price: (+plan.guestGift?.price) , quantity: numberOfGuests})
    result.push({name: "Prezenty dla rodziców", price: (+plan.parentGift?.price), quantity: plan.parentGift?.quantity})
    const pickedHall = plan.hallPropositions.filter((hall: any) => hall.isPicked);
    if (!!pickedHall) {
      result.push({name: "Podstawowa cena sali", price: +pickedHall[0].basePrice, quantity: 1});
      result.push({name: "Cena gości", price: +pickedHall[0].personCost, quantity: numberOfGuests});
      result.push({name: "Dodatkowe wydatki na salę", price: +pickedHall[0].additionalCost, quantity: 1});
      result.push({name: "Goście hotelowi na sali", price: +pickedHall[0].hotelPricePerPerson, quantity: pickedHall[0].numberOfHotelGuests ?? 0});
      result.push({name: "Dodatkowe opłaty dekorację sali", price: +pickedHall[0].additionalDecorationPrice, quantity: 1});
      result.push({name: "Cena ceremonii weselenj na sali", price: +pickedHall[0].weddingCeremonyPrice, quantity: 1});
      result.push({name: "Cena za alkohol", price: +pickedHall[0].alcoholPrice, quantity: 1});
      result.push({name: "Cena za napoje", price: +pickedHall[0].drinksPrice, quantity: 1});
      result.push({name: "Cena za napoje", price: +pickedHall[0].drinksPrice, quantity: 1});
      result.push({name: "Cena za desery", price: +pickedHall[0].desertsPrice, quantity: 1});
      result.push({name: "Cena za owoce", price: +pickedHall[0].fruitsPrice, quantity: 1});
    }
    if (!!plan.other) {
      result.push({name: "Kwiaty", price: +plan.other.flowersPrice, quantity: 1});
      result.push({name: "Fotograf", price: +plan.other.photographerPrice, quantity: 1});
      result.push({name: "Kamerzysta", price: +plan.other.cameramanPrice, quantity: 1});
      result.push({name: "Muzyka", price: +plan.other.musicPrice, quantity: 1});
      result.push({name: "Słodkości", price: +plan.other.confectioneryPrice, quantity: 1});
      result.push({name: "Alkohol", price: +plan.other.alcoholPrice, quantity: 1});
      result.push({name: "Napoje", price: +plan.other.drinksPrice, quantity: 1});
      result.push({name: "Ceremonia", price: +plan.other.ceremonyPrice, quantity: 1});
      result.push({name: "Suknia ślubna", price: +plan.other.brightsDressPrice, quantity: 1});
      result.push({name: "Garnitur", price: +plan.other.groomsSuitPrice, quantity: 1});
      result.push({name: "Fryzjer", price: +plan.other.hairPrice, quantity: 1});
      result.push({name: "Kosmetyczka", price: +plan.other.beauticianPrice, quantity: 1});
      result.push({name: "Samochód", price: +plan.other.carPrice, quantity: 1});
    }
    const pickedTrip = plan.trips.filter((trip: any) => trip.isPicked);
    if (!!pickedTrip) {
      result.push({name: "Podróż", price: +pickedTrip.price, quantity: 1});
    }
    console.log(result)
    console.log([...result, ...plan.additionalCosts])
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