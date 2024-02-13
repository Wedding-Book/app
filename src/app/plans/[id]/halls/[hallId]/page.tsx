import {unavailablePlanRedirector} from '@/components/plans/security/unavailablePlanRedirector';
import serverSessionChecker from '@/components/protected/serverSessionChecker';
import Hall from '@/components/plans/halls/hall';
import prisma from '@/lib/prisma/prisma';

const HallPage = async ({params}: { params: { id: string, hallId: string } }) => {
  await serverSessionChecker({noSessionPath: '/login'});
  await unavailablePlanRedirector(params.id);

  const displayedHall = await prisma.hall.findUnique({where: {id: params.hallId}});

  return <Hall planId={params.id} hallId={params.hallId}
               initName={displayedHall.name}
               initDescription={displayedHall.description}
               initNotes={displayedHall.notes}
               initImgUrl={displayedHall.imgUrl}
               initGoogleMapsUrl={displayedHall.googleUrl}
               initPartyTime={displayedHall.partyTime}
               initMenu={displayedHall.menu}
               initTableSettings={displayedHall.tableSettings}
               initPersonCost={displayedHall.personCost}
               initAdditionalCost={displayedHall.additionalCost}
               initAlcoholInPrice={displayedHall.alcoholInPrice}
               initAlcoholPrice={displayedHall.alcoholPrice}
               initDrinksInPrice={displayedHall.drinksInPrice}
               initDrinksPrice={displayedHall.drinksPrice}
               initDesertsInPrice={displayedHall.desertsInPrice}
               initDesertsPrice={displayedHall.desertsPrice}
               initDesertsDescription={displayedHall.desertsDescription}
               initFruitsInPrice={displayedHall.fruitsInPrice}
               initFruitsPrice={displayedHall.fruitsPrice}
               initIsHotel={displayedHall.isHotel}
               initHotelPrice={displayedHall.hotelPricePerPerson}
               initHotelGuests={displayedHall.numberOfHotelGuests}
               initIsDecorationInPrice={displayedHall.decorationInPrice}
               initDecorationDescription={displayedHall.decorationDescription}
               initAdditionalDecorationPrice={displayedHall.additionalDecorationPrice}
               initSoundSystemDescription={displayedHall.soundSystem}
               initDamagePriceAgreement={displayedHall.damagePrice}
               initIsOrganizationSupport={displayedHall.organizationSupport}
               initAvailableDates={displayedHall.availableDates}
               initOrganizationSupportDescription={displayedHall.organizationSupportDescription}
               initMaxGuests={displayedHall.maxGuests}
               initIsChildrenInPrice={displayedHall.childrenInPrice}
               initChildPrice={displayedHall.childrenPrice}
               initIsWeddingExtension={displayedHall.extensionOfWedding}
               initWeddingExtensionPrice={displayedHall.extensionOfWeddingPrice}
               initIsWeddingCeremony={displayedHall.weddingCeremony}
               initWeddingCeremonyPrice={displayedHall.weddingCeremonyPrice}
               initWeddingCeremonyDescription={displayedHall.weddingCeremonyDescription}
               initAdditionalAttractions={displayedHall.additionalAttractions}
               initAdvance={displayedHall.advance}
               initIsPicked={displayedHall.isPicked}
  />

}

export default HallPage;