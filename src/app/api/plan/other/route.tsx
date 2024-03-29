import prisma from '@/lib/prisma/prisma';

const handler = async (req: Request) => {
  if (req.method === 'POST') {
    const {
      planId,
      flowersUrl,
      flowersPrice,
      flowersDescription,
      photographerUrl,
      photographerPrice,
      photographerDescription,
      cameramanUrl,
      cameramanPrice,
      cameramanDescription,
      musicUrl,
      musicPrice,
      musicDescription,
      confectioneryUrl,
      confectioneryPrice,
      confectioneryDescription,
      alcoholUrl,
      alcoholPrice,
      alcoholDescription,
      drinksUrl,
      drinksPrice,
      drinksDescription,
      ceremonyUrl,
      ceremonyPrice,
      ceremonyDescription,
      brightsDressUrl,
      brightsDressPrice,
      brightsDressDescription,
      groomsSuitUrl,
      groomsSuitPrice,
      groomsSuitDescription,
      hairUrl,
      hairPrice,
      hairDescription,
      beauticianUrl,
      beauticianPrice,
      beauticianDescription,
      carUrl,
      carPrice,
      carDescription,
    }: {
      planId: string,
      flowersUrl: string,
      flowersPrice: number,
      flowersDescription: string,
      photographerUrl: string,
      photographerPrice: number,
      photographerDescription: string,
      cameramanUrl: string,
      cameramanPrice: number,
      cameramanDescription: string,
      musicUrl: string,
      musicPrice: number,
      musicDescription: string,
      confectioneryUrl: string,
      confectioneryPrice: number,
      confectioneryDescription: string,
      alcoholUrl: string,
      alcoholPrice: number,
      alcoholDescription: string,
      drinksUrl: string,
      drinksPrice: number,
      drinksDescription: string,
      ceremonyUrl: string,
      ceremonyPrice: number,
      ceremonyDescription: string,
      brightsDressUrl: string,
      brightsDressPrice: number,
      brightsDressDescription: string,
      groomsSuitUrl: string,
      groomsSuitPrice: number,
      groomsSuitDescription: string,
      hairUrl: string,
      hairPrice: number,
      hairDescription: string,
      beauticianUrl: string,
      beauticianPrice: number,
      beauticianDescription: string,
      carUrl: string,
      carPrice: number,
      carDescription: string,
    } = await req.json();

    const found = await prisma.other.findUnique({where: {planId: planId}});
    if (!!found) {
      const updatedOther = await prisma.other.update({
        where: {planId: planId},
        data: {
          flowersUrl,
          flowersPrice,
          flowersDescription,
          photographerUrl,
          photographerPrice,
          photographerDescription,
          cameramanUrl,
          cameramanPrice,
          cameramanDescription,
          musicUrl,
          musicPrice,
          musicDescription,
          confectioneryUrl,
          confectioneryPrice,
          confectioneryDescription,
          alcoholUrl,
          alcoholPrice,
          alcoholDescription,
          drinksUrl,
          drinksPrice,
          drinksDescription,
          ceremonyUrl,
          ceremonyPrice,
          ceremonyDescription,
          brightsDressUrl,
          brightsDressPrice,
          brightsDressDescription,
          groomsSuitUrl,
          groomsSuitPrice,
          groomsSuitDescription,
          hairUrl,
          hairPrice,
          hairDescription,
          beauticianUrl,
          beauticianPrice,
          beauticianDescription,
          carUrl,
          carPrice,
          carDescription,
        }
      });

      return new Response(
        JSON.stringify(updatedOther), {
          headers: {"content-type": "application/json"},
          status: 202
        });
    }
    const newOther = await prisma.other.create({
      data: {
        planId,
        flowersUrl,
        flowersPrice,
        flowersDescription,
        photographerUrl,
        photographerPrice,
        photographerDescription,
        cameramanUrl,
        cameramanPrice,
        cameramanDescription,
        musicUrl,
        musicPrice,
        musicDescription,
        confectioneryUrl,
        confectioneryPrice,
        confectioneryDescription,
        alcoholUrl,
        alcoholPrice,
        alcoholDescription,
        drinksUrl,
        drinksPrice,
        drinksDescription,
        ceremonyUrl,
        ceremonyPrice,
        ceremonyDescription,
        brightsDressUrl,
        brightsDressPrice,
        brightsDressDescription,
        groomsSuitUrl,
        groomsSuitPrice,
        groomsSuitDescription,
        hairUrl,
        hairPrice,
        hairDescription,
        beauticianUrl,
        beauticianPrice,
        beauticianDescription,
        carUrl,
        carPrice,
        carDescription,
      }
    });

    return new Response(
      JSON.stringify(newOther), {
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