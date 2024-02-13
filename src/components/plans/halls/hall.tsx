'use client'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {Button, TextField} from '@mui/material';
import React, {useEffect, useState} from 'react';
import Loading from '@/components/loading/loading';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import {useRouter} from 'next/navigation';

type Props = {
  planId: string,
  hallId: string,
  initName: string,
  initDescription?: string,
  initNotes?: string,
  initImgUrl?: string,
  initGoogleMapsUrl?: string,
  initPartyTime?: string,
  initMenu?: string,
  initTableSettings?: string,
  initPersonCost?: number,
  initAdditionalCost?: number,
  initAlcoholInPrice?: boolean,
  initAlcoholPrice?: number,
  initDrinksInPrice?: boolean,
  initDrinksPrice?: number,
  initDesertsInPrice?: boolean,
  initDesertsPrice?: number,
  initDesertsDescription?: string,
  initFruitsInPrice?: boolean,
  initFruitsPrice?: number,
  initIsHotel?: boolean,
  initHotelPrice?: number,
  initHotelGuests?: number,
  initIsDecorationInPrice?: boolean,
  initDecorationDescription?: string,
  initAdditionalDecorationPrice?: number,
  initSoundSystemDescription?: string,
  initDamagePriceAgreement?: string,
  initIsOrganizationSupport?: boolean,
  initAvailableDates?: string,
  initOrganizationSupportDescription?: string,
  initMaxGuests?: number,
  initIsChildrenInPrice?: boolean,
  initChildPrice?: number,
  initIsWeddingExtension?: boolean,
  initWeddingExtensionPrice?: number,
  initIsWeddingCeremony?: boolean,
  initWeddingCeremonyPrice?: number,
  initWeddingCeremonyDescription?: string,
  initAdditionalAttractions?: string,
  initAdvance?: number,
  initIsPicked?: boolean,
}

const Hall = (props: Props) => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(true);
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string | undefined>("");
  const [notes, setNotes] = useState<string | undefined>("");
  const [imgUrl, setImgUrl] = useState<string | undefined>("");
  const [googleMapsUrl, setGoogleMapsUrl] = useState<string | undefined>("");
  const [partyTime, setPartyTime] = useState<string | undefined>("");
  const [menu, setMenu] = useState<string | undefined>("");
  const [tableSettings, setTableSettings] = useState<string | undefined>("");
  const [personCost, setPersonCost] = useState<number | undefined>();
  const [additionalCost, setAdditionalCost] = useState<number | undefined>();
  const [alcoholInPrice, setAlcoholInPrice] = useState<boolean | undefined>();
  const [alcoholPrice, setAlcoholPrice] = useState<number | undefined>();
  const [drinksInPrice, setDrinksInPrice] = useState<boolean | undefined>();
  const [drinksPrice, setDrinksPrice] = useState<number | undefined>();
  const [desertsInPrice, setDesertsInPrice] = useState<boolean | undefined>();
  const [desertsPrice, setDesertsPrice] = useState<number | undefined>();
  const [desertsDescription, setDesertsDescription] = useState<string | undefined>("");
  const [fruitsInPrice, setFruitsInPrice] = useState<boolean | undefined>();
  const [fruitsPrice, setFruitsPrice] = useState<number | undefined>();
  const [isHotel, setIsHotel] = useState<boolean | undefined>();
  const [hotelPrice, setHotelPrice] = useState<number | undefined>();
  const [hotelGuests, setHotelGuests] = useState<number | undefined>();
  const [isDecorationInPrice, setIsDecorationInPrice] = useState<boolean | undefined>();
  const [decorationDescription, setDecorationDescription] = useState<string | undefined>("");
  const [additionalDecorationPrice, setAdditionalDecorationPrice] = useState<number | undefined>();
  const [soundSystemDescription, setSoundSystemDescription] = useState<string | undefined>("");
  const [damagePriceAgreement, setDamagePriceAgreement] = useState<string | undefined>("");
  const [isOrganizationSupport, setIsOrganizationSupport] = useState<boolean | undefined>();
  const [availableDates, setAvailableDates] = useState<string | undefined>("");
  const [organizationSupportDescription, setOrganizationSupportDescription] = useState<string | undefined>("");
  const [maxGuests, setMaxGuests] = useState<number | undefined>();
  const [isChildrenInPrice, setIsChildrenInPrice] = useState<boolean | undefined>();
  const [childPrice, setChildPrice] = useState<number | undefined>();
  const [isWeddingExtension, setIsWeddingExtension] = useState<boolean | undefined>();
  const [weddingExtensionPrice, setWeddingExtensionPrice] = useState<number | undefined>();
  const [isWeddingCeremony, setIsWeddingCeremony] = useState<boolean | undefined>();
  const [weddingCeremonyPrice, setWeddingCeremonyPrice] = useState<number | undefined>();
  const [weddingCeremonyDescription, setWeddingCeremonyDescription] = useState<string | undefined>("");
  const [additionalAttractions, setAdditionalAttractions] = useState<string | undefined>("");
  const [advance, setAdvance] = useState<number | undefined>();
  const [isPicked, setIsPicked] = useState<boolean | undefined>();

  useEffect(() => {
    setLoading(true);
    setName(props.initName);
    setDescription(props.initDescription ?? "");
    setNotes(props.initNotes ?? "");
    setImgUrl(props.initImgUrl ?? "");
    setGoogleMapsUrl(props.initGoogleMapsUrl ?? "");
    setPartyTime(props.initPartyTime ?? "");
    setMenu(props.initMenu ?? "");
    setTableSettings(props.initTableSettings ?? "");
    setPersonCost(props.initPersonCost);
    setAdditionalCost(props.initAdditionalCost);
    setAlcoholInPrice(props.initAlcoholInPrice);
    setAlcoholPrice(props.initAlcoholPrice);
    setDrinksInPrice(props.initDrinksInPrice);
    setDrinksPrice(props.initDrinksPrice);
    setDesertsInPrice(props.initDesertsInPrice);
    setDesertsPrice(props.initDesertsPrice);
    setDesertsDescription(props.initDesertsDescription ?? "");
    setFruitsInPrice(props.initFruitsInPrice);
    setFruitsPrice(props.initFruitsPrice);
    setIsHotel(props.initIsHotel);
    setHotelPrice(props.initHotelPrice);
    setHotelGuests(props.initHotelGuests);
    setIsDecorationInPrice(props.initIsDecorationInPrice);
    setDecorationDescription(props.initDecorationDescription ?? "");
    setAdditionalDecorationPrice(props.initAdditionalDecorationPrice);
    setSoundSystemDescription(props.initSoundSystemDescription ?? "");
    setDamagePriceAgreement(props.initDamagePriceAgreement ?? "");
    setIsOrganizationSupport(props.initIsOrganizationSupport);
    setAvailableDates(props.initAvailableDates ?? "");
    setOrganizationSupportDescription(props.initOrganizationSupportDescription ?? "");
    setMaxGuests(props.initMaxGuests);
    setIsChildrenInPrice(props.initIsChildrenInPrice);
    setChildPrice(props.initChildPrice);
    setIsWeddingExtension(props.initIsWeddingExtension);
    setWeddingExtensionPrice(props.initWeddingExtensionPrice);
    setIsWeddingCeremony(props.initIsWeddingCeremony);
    setWeddingCeremonyPrice(props.initWeddingCeremonyPrice);
    setWeddingCeremonyDescription(props.initWeddingCeremonyDescription ?? "");
    setAdditionalAttractions(props.initAdditionalAttractions ?? "");
    setAdvance(props.initAdvance);
    setIsPicked(props.initIsPicked);
    setLoading(false);
  }, [props]);

  const saveHallData = async () => {
    await fetch(`/api/plan/halls/single`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        hallId: props.hallId,
        isPicked: isPicked,
        name: name,
        description: description,
        notes: notes,
        imgUrl: imgUrl,
        googleUrl: googleMapsUrl,
        personCost: personCost,
        additionalCost: additionalCost,
        partyTime: partyTime,
        alcoholInPrice: alcoholInPrice,
        alcoholPrice: alcoholPrice,
        drinksInPrice: drinksInPrice,
        drinksPrice: drinksPrice,
        desertsInPrice: desertsInPrice,
        desertsPrice: desertsPrice,
        desertsDescription: desertsDescription,
        menu: menu,
        isHotel: isHotel,
        numberOfHotelGuests: hotelGuests,
        hotelPricePerPerson: hotelPrice,
        tableSettings: tableSettings,
        decorationInPrice: isDecorationInPrice,
        decorationDescription: decorationDescription,
        additionalDecorationPrice: additionalDecorationPrice,
        soundSystem: soundSystemDescription,
        additionalAttractions: additionalAttractions,
        damagePrice: damagePriceAgreement,
        organizationSupport: isOrganizationSupport,
        organizationSupportDescription: organizationSupportDescription,
        availableDates: availableDates,
        maxGuests: maxGuests,
        fruitsInPrice: fruitsInPrice,
        fruitsPrice: fruitsPrice,
        childrenInPrice: isChildrenInPrice,
        childrenPrice: childPrice,
        extensionOfWedding: isWeddingExtension,
        extensionOfWeddingPrice: weddingExtensionPrice,
        advance: advance,
        weddingCeremony: isWeddingCeremony,
        weddingCeremonyDescription: weddingCeremonyDescription,
        weddingCeremonyPrice: weddingCeremonyPrice,})
    }).then((response) => response.json());
  }

  const star = async () => {
    await fetch(`/api/plan/halls/single`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({hallId: props.hallId, isPicked: !isPicked})
    }).then((response) => {
        setIsPicked(!isPicked)
      }
    );
  }


  const deleteHall = async () => {
    await fetch(`/api/plan/halls/single?id=${props.hallId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => {
        router.push(`/plans/${props.planId}/halls`);
      }
    );
  }


  if (loading) {
    return <Loading/>
  }

  return (<Box sx={{display: 'flex', flexDirection: 'column', marginLeft: 4, marginTop: 2}}>
    <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
      < Typography sx={{fontSize: 28, color: 'secondary.main'}}>Szczegóły sali</Typography>
      {isPicked && <Button
          sx={{marginLeft: 4}}
          color="secondary"
          variant="contained"
          startIcon={<StarBorderIcon/>}
          onClick={() => star()}
      >
          Nie wybieram!
      </Button>}
      {!isPicked && <Button
          sx={{marginLeft: 4}}
          color="primary"
          variant="contained"
          startIcon={<StarIcon/>}
          onClick={() => star()}
      >
          Wybieram!
      </Button>}

      <Button
        sx={{marginLeft: 4}}
        color="success"
        variant="contained"
        onClick={() => saveHallData()}
      >
        Zapisz
      </Button>

      <Button
        sx={{marginLeft: 4}}
        color="error"
        variant="contained"
        onClick={() => deleteHall()}
      >
        Usuń
      </Button>

    </Box>
    <Box sx={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
      <Box sx={{display: 'flex', flexDirection: 'column', marginRight: 8}}>
        <TextField id="hallName" color="secondary" variant="outlined"
                   style={{marginTop: '16px', width: '600px'}}
                   value={name ?? ""}
                   required onChange={(event) => setName(event.target.value)}
                   type="text" label="Nazwa sali"/>
        <TextField id="hallDescription" color="secondary" variant="outlined"
                   style={{marginTop: '16px', width: '600px'}}
                   value={description ?? ""}
                   multiline rows={2}
                   onChange={(event) => setDescription(event.target.value)}
                   type="text" label="Opis sali"/>
        <TextField id="hallNotes" color="secondary" variant="outlined"
                   style={{marginTop: '16px', width: '600px'}}
                   value={notes ?? ""}
                   multiline rows={2}
                   onChange={(event) => setNotes(event.target.value)}
                   type="text" label="Notatki na temat sali"/>

        <TextField id="hallAvailableDates" color="secondary" variant="outlined"
                   style={{marginTop: '16px', width: '600px'}}
                   value={availableDates ?? ""}
                   multiline rows={4}
                   onChange={(event) => setAvailableDates(event.target.value)}
                   type="text" label="Dostępne daty"/>

        <TextField id="hallMaxGuests" color="secondary" variant="outlined"
                   style={{marginTop: '16px', width: '600px'}}
                   value={maxGuests}
                   onChange={(event) => setMaxGuests(+event.target.value)}
                   type="number" label="Maksymalna liczba gości"/>
        <TextField id="hallPersonPrice" color="secondary" variant="outlined"
                   style={{marginTop: '16px', width: '600px'}}
                   onChange={(event) => setPersonCost(+event.target.value)}
                   value={personCost}
                   type="number" label="Koszt za tależyk"/>

        <FormControlLabel sx={{fontSize: 28, color: 'secondary.main', marginTop: '16px'}}
                          control={<Switch checked={isChildrenInPrice}
                                           onChange={() => setIsChildrenInPrice(!isChildrenInPrice)}/>}
                          label="Czy dzieci dodatkowo płatne?"/>
        {
          isChildrenInPrice && <TextField id="hallChild" color="secondary" variant="outlined"
                                          style={{marginTop: '16px', width: '600px'}}
                                          value={childPrice}
                                          onChange={(event) => setChildPrice(+event.target.value)}
                                          type="number" label="Opłata za dziecko"/>
        }

        <TextField id="hallAdditionalCost" color="secondary" variant="outlined"
                   style={{marginTop: '16px', width: '600px'}}
                   value={additionalCost}
                   onChange={(event) => setAdditionalCost(+event.target.value)}
                   type="number" label="Dodatkowe koszty sali"/>

        <FormControlLabel sx={{fontSize: 28, color: 'secondary.main', marginTop: '16px'}}
                          control={<Switch checked={isWeddingCeremony}
                                           onChange={() => setIsWeddingCeremony(!isWeddingCeremony)}/>}
                          label="Czy można zorganizować ceremonię ślubu?"/>
        {
          isWeddingCeremony && <TextField id="hallWeddingCeremony" color="secondary" variant="outlined"
                                          style={{marginTop: '16px', width: '600px'}}
                                          value={weddingCeremonyPrice}
                                          onChange={(event) => setWeddingCeremonyPrice(+event.target.value)}
                                          type="number" label="Cena za organizację ceremonii ślubu"/>
        }
        {
          isWeddingCeremony && <TextField id="hallWeddingCeremonyDesc" color="secondary" variant="outlined"
                                          style={{marginTop: '16px', width: '600px'}}
                                          value={weddingCeremonyDescription ?? ""}
                                          multiline rows={4}
                                          onChange={(event) => setWeddingCeremonyDescription(event.target.value)}
                                          type="text" label="Opis ceremonii ślubu"/>
        }

        <TextField id="hallPartyTime" color="secondary" variant="outlined"
                   style={{marginTop: '16px', width: '600px'}}
                   value={partyTime ?? ""}
                   onChange={(event) => setPartyTime(event.target.value)}
                   type="text" label="Dozwolony czas wesela"/>

        <FormControlLabel sx={{fontSize: 28, color: 'secondary.main', marginTop: '16px'}}
                          control={<Switch checked={isWeddingExtension}
                                           onChange={() => setIsWeddingExtension(!isWeddingExtension)}/>}
                          label="Czy wesele można przedłużyć?"/>
        {
          isWeddingExtension && <TextField id="hallExtension" color="secondary" variant="outlined"
                                           style={{marginTop: '16px', width: '600px'}}
                                           value={weddingExtensionPrice}
                                           onChange={(event) => setWeddingExtensionPrice(+event.target.value)}
                                           type="number" label="Cena za godzinę przedłużenia wesela"/>
        }

        <FormControlLabel sx={{fontSize: 28, color: 'secondary.main', marginTop: '16px'}}
                          control={<Switch checked={isHotel}
                                           onChange={() => setIsHotel(!isHotel)}/>}
                          label="Hotel"/>
        {
          isHotel && <TextField id="hallHotelPrice" color="secondary" variant="outlined"
                                style={{marginTop: '16px', width: '600px'}}
                                value={hotelPrice}
                                onChange={(event) => setHotelPrice(+event.target.value)}
                                type="number" label="Cena hotelu za osobę/pokój"/>
        }
        {
          isHotel && <TextField id="hallHotelGuests" color="secondary" variant="outlined"
                                style={{marginTop: '16px', width: '600px'}}
                                value={hotelGuests}
                                onChange={(event) => setHotelGuests(+event.target.value)}
                                type="number" label="Liczba gości hotelowych"/>
        }

      </Box>
      <Box sx={{display: 'flex', flexDirection: 'column', marginRight: 8}}>
        <TextField id="hallMenu" color="secondary" variant="outlined"
                   style={{marginTop: '16px', width: '600px'}}
                   value={menu ?? ""}
                   multiline rows={4}
                   onChange={(event) => setMenu(event.target.value)}
                   type="text" label="Menu"/>

        <FormControlLabel sx={{fontSize: 28, color: 'secondary.main', marginTop: '16px'}}
                          control={<Switch checked={alcoholInPrice}
                                           onChange={() => setAlcoholInPrice(!alcoholInPrice)}/>}
                          label="Alkohol w cenie"/>
        {
          !alcoholInPrice && <TextField id="hallAlcoholPrice" color="secondary" variant="outlined"
                                        style={{marginTop: '16px', width: '600px'}}
                                        value={alcoholPrice}
                                        onChange={(event) => setAlcoholPrice(+event.target.value)}
                                        type="number" label="Cena alkoholu"/>
        }

        <FormControlLabel sx={{fontSize: 28, color: 'secondary.main', marginTop: '16px'}}
                          control={<Switch checked={drinksInPrice}
                                           onChange={() => setDrinksInPrice(!drinksInPrice)}/>}
                          label="Napoje w cenie"/>
        {
          !drinksInPrice && <TextField id="hallDrinksPrice" color="secondary" variant="outlined"
                                       style={{marginTop: '16px', width: '600px'}}
                                       value={drinksPrice}
                                       onChange={(event) => setDrinksPrice(+event.target.value)}
                                       type="number" label="Cena napoi"/>
        }

        <FormControlLabel sx={{fontSize: 28, color: 'secondary.main', marginTop: '16px'}}
                          control={<Switch checked={desertsInPrice}
                                           onChange={() => setDesertsInPrice(!desertsInPrice)}/>}
                          label="Desery w cenie"/>
        {
          !desertsInPrice && <TextField id="hallDesertsPrice" color="secondary" variant="outlined"
                                        style={{marginTop: '16px', width: '600px'}}
                                        value={desertsPrice}
                                        onChange={(event) => setDesertsPrice(+event.target.value)}
                                        type="number" label="Cena deserów"/>
        }
        <TextField id="hallDesertsDescription" color="secondary" variant="outlined"
                   style={{marginTop: '16px', width: '600px'}}
                   value={desertsDescription ?? ""}
                   multiline rows={4}
                   onChange={(event) => setDesertsDescription(event.target.value)}
                   type="text" label="Opis deserów"/>

        <FormControlLabel sx={{fontSize: 28, color: 'secondary.main', marginTop: '16px'}}
                          control={<Switch checked={fruitsInPrice}
                                           onChange={() => setFruitsInPrice(!fruitsInPrice)}/>}
                          label="Owoce w cenie"/>
        {
          !fruitsInPrice && <TextField id="hallDesertsPrice" color="secondary" variant="outlined"
                                       style={{marginTop: '16px', width: '600px'}}
                                       value={fruitsPrice}
                                       onChange={(event) => setFruitsPrice(+event.target.value)}
                                       type="number" label="Cena owoców"/>
        }

        <FormControlLabel sx={{fontSize: 28, color: 'secondary.main', marginTop: '16px'}}
                          control={<Switch checked={isDecorationInPrice}
                                           onChange={() => setIsDecorationInPrice(!isDecorationInPrice)}/>}
                          label="Dekoracje w cenie"/>
        {
          isDecorationInPrice && <TextField id="hallDecorationDescription" color="secondary" variant="outlined"
                                            style={{marginTop: '16px', width: '600px'}}
                                            value={decorationDescription ?? ""}
                                            multiline rows={2}
                                            onChange={(event) => setDecorationDescription(event.target.value)}
                                            type="text" label="Opis dekoracji"/>
        }
        <TextField id="hallAdditionalDecorationPrice" color="secondary" variant="outlined"
                   style={{marginTop: '16px', width: '600px'}}
                   value={additionalDecorationPrice}
                   onChange={(event) => setAdditionalDecorationPrice(+event.target.value)}
                   type="number" label="Cena dodatkowych dekoracji sali"/>

        <TextField id="hallAdvance" color="secondary" variant="outlined"
                   style={{marginTop: '16px', width: '600px'}}
                   value={advance}
                   onChange={(event) => setAdvance(+event.target.value)}
                   type="number" label="Przedpłata"/>
      </Box>
      <Box sx={{display: 'flex', flexDirection: 'column'}}>
        {
          imgUrl && <img
                style={{maxWidth: 400, maxHeight: 350}}
                src={imgUrl}
                alt={name}
                loading="lazy"
            />
        }
        {
          !imgUrl && <Box
                sx={{width: 400, height: 350, display: 'flex', justifyContent: 'center', alignItems: 'center'}}
            >
                <Typography sx={{fontSize: 28, color: 'primary.main'}}>Tutaj będzie Twoje zdjęcie sali</Typography></Box>
        }
        <TextField id="hallImageUrl" color="secondary" variant="outlined"
                   style={{marginTop: '16px', width: '600px'}}
                   value={imgUrl ?? ""}
                   onChange={(event) => setImgUrl(event.target.value)}
                   type="text" label="Link do zdjęcia sali"/>
        <TextField id="hallGoogleurl" color="secondary" variant="outlined"
                   style={{marginTop: '16px', width: '600px'}}
                   value={googleMapsUrl ?? ""}
                   onChange={(event) => setGoogleMapsUrl(event.target.value)}
                   type="text" label="Link do Map Google"/>
        <TextField id="hallTableSettings" color="secondary" variant="outlined"
                   style={{marginTop: '16px', width: '600px'}}
                   value={tableSettings ?? ""}
                   multiline rows={2}
                   onChange={(event) => setTableSettings(event.target.value)}
                   type="text" label="Opis układu stołów"/>
        <FormControlLabel sx={{fontSize: 28, color: 'secondary.main', marginTop: '16px'}}
                          control={<Switch checked={isOrganizationSupport}
                                           onChange={() => setIsOrganizationSupport(!isOrganizationSupport)}/>}
                          label="Wsparcie w organizacji wesela"/>
        {
          isOrganizationSupport && <TextField id="hallOrganizationSupport" color="secondary" variant="outlined"
                                              style={{marginTop: '16px', width: '600px'}}
                                              value={organizationSupportDescription ?? ""}
                                              multiline rows={2}
                                              onChange={(event) => setOrganizationSupportDescription(event.target.value)}
                                              type="text" label="Opis wsparcia w organizacji"/>
        }

        <TextField id="hallSoundsystemDescription" color="secondary" variant="outlined"
                   style={{marginTop: '16px', width: '600px'}}
                   value={soundSystemDescription ?? ""}
                   multiline rows={2}
                   onChange={(event) => setSoundSystemDescription(event.target.value)}
                   type="text" label="Opis nagłośnienia sali"/>

        <TextField id="hallAdditionalAttraction" color="secondary" variant="outlined"
                   style={{marginTop: '16px', width: '600px'}}
                   value={additionalAttractions ?? ""}
                   multiline rows={2}
                   onChange={(event) => setAdditionalAttractions(event.target.value)}
                   type="text" label="Opis dodatkowych atrkacji"/>

        <TextField id="hallDamagePriceAgreement" color="secondary" variant="outlined"
                   style={{marginTop: '16px', width: '600px'}}
                   value={damagePriceAgreement ?? ""}
                   multiline rows={2}
                   onChange={(event) => setDamagePriceAgreement(event.target.value)}
                   type="text" label="Opis kosztów zniszczeń podczas wesela"/>
      </Box>
    </Box>


    <Button
      sx={{marginTop: 4}}
      color="success"
      variant="contained"
      onClick={() => saveHallData()}
    >
      Zapisz
    </Button>
  </Box>)
    ;
}

export default Hall;