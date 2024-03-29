import serverSessionChecker from '@/components/protected/serverSessionChecker';
import {unavailablePlanRedirector} from '@/components/plans/security/unavailablePlanRedirector';
import Other from '@/components/plans/other/other';
import prisma from '@/lib/prisma/prisma';

const OthersPage = async ({params}: { params: { id: string } }) => {
  await serverSessionChecker({noSessionPath: '/login'});
  await unavailablePlanRedirector(params.id);

  const displayedOther = await prisma.other.findUnique({where: {planId: params.id}});

  return <Other otherId={displayedOther?.id} planId={params.id}
                initAlcoholDescription={displayedOther?.alcoholDescription} initAlcoholPrice={displayedOther?.alcoholPrice} initAlcoholUrl={displayedOther?.alcoholUrl}
                initBeauticianDescription={displayedOther?.beauticianDescription} initBeauticianPrice={displayedOther?.beauticianPrice} initBeauticianUrl={displayedOther?.beauticianUrl}
                initBrightsDressDescription={displayedOther?.brightsDressDescription} initBrightsDressPrice={displayedOther?.brightsDressPrice}  initBrightsDressUrl={displayedOther?.brightsDressUrl}
                initCameramanDescription={displayedOther?.cameramanDescription} initCameramanPrice={displayedOther?.cameramanPrice} initCameramanUrl={displayedOther?.cameramanUrl}
                initCarDescription={displayedOther?.carDescription} initCarPrice={displayedOther?.carPrice} initCarUrl={displayedOther?.carUrl}
                initCeremonyDescription={displayedOther?.ceremonyDescription} initCeremonyPrice={displayedOther?.ceremeonyPrice} initCeremonyUrl={displayedOther?.ceremonyUrl}
                initConfectioneryDescription={displayedOther?.confectioneryDescription} initConfectioneryPrice={displayedOther?.confectioneryPrice} initConfectioneryUrl={displayedOther?.confectioneryUrl}
                initDrinksDescription={displayedOther?.drinksDescription} initDrinksPrice={displayedOther?.drinksPrice} initDrinksUrl={displayedOther?.drinksUrl}
                initFlowersDescription={displayedOther?.flowersDescription} initFlowersPrice={displayedOther?.flowersPrice} initFlowersUrl={displayedOther?.flowersUrl}
                initGroomsSuitDescription={displayedOther?.groomsSuitDescription} initGroomsSuitPrice={displayedOther?.groomsSuitPrice} initGroomsSuitUrl={displayedOther?.groomsSuitUrl}
                initHairDescription={displayedOther?.hairDescription} initHairPrice={displayedOther?.hairPrice} initHairUrl={displayedOther?.hairUrl}
                initMusicDescription={displayedOther?.musicDescription} initMusicPrice={displayedOther?.musicPrice} initMusicUrl={displayedOther?.musicUrl}
                initPhotographerDescription={displayedOther?.photographerDescription} initPhotographerPrice={displayedOther?.photographerPrice} initPhotographerUrl={displayedOther?.photographerUrl}
  />
}

export default OthersPage;