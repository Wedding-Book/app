'use client'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import React, {useEffect, useState} from 'react';
import {TextField} from '@mui/material';
import Loading from '@/components/loading/loading';
import Button from '@mui/material/Button';

type OtherProps = {
  otherId?: string,
  planId: string,
  initFlowersUrl?: string,
  initFlowersPrice?: number,
  initFlowersDescription?: string,
  initPhotographerUrl?: string,
  initPhotographerPrice?: number,
  initPhotographerDescription?: string,
  initCameramanUrl?: string,
  initCameramanPrice?: number,
  initCameramanDescription?: string,
  initMusicUrl?: string,
  initMusicPrice?: number,
  initMusicDescription?: string,
  initConfectioneryUrl?: string,
  initConfectioneryPrice?: number,
  initConfectioneryDescription?: string,
  initAlcoholUrl?: string,
  initAlcoholPrice?: number,
  initAlcoholDescription?: string,
  initDrinksUrl?: string,
  initDrinksPrice?: number,
  initDrinksDescription?: string,
  initCeremonyUrl?: string,
  initCeremonyPrice?: number,
  initCeremonyDescription?: string,
  initBrightsDressUrl?: string,
  initBrightsDressPrice?: number,
  initBrightsDressDescription?: string,
  initGroomsSuitUrl?: string,
  initGroomsSuitPrice?: number,
  initGroomsSuitDescription?: string,
  initHairUrl?: string,
  initHairPrice?: number,
  initHairDescription?: string,
  initBeauticianUrl?: string,
  initBeauticianPrice?: number,
  initBeauticianDescription?: string,
  initCarUrl?: string,
  initCarPrice?: number,
  initCarDescription?: string,
}

const Other = ({
                 otherId,
                 planId,
                 initFlowersUrl,
                 initFlowersPrice,
                 initFlowersDescription,
                 initPhotographerUrl,
                 initPhotographerPrice,
                 initPhotographerDescription,
                 initCameramanUrl,
                 initCameramanPrice,
                 initCameramanDescription,
                 initMusicUrl,
                 initMusicPrice,
                 initMusicDescription,
                 initConfectioneryUrl,
                 initConfectioneryPrice,
                 initConfectioneryDescription,
                 initAlcoholUrl,
                 initAlcoholPrice,
                 initAlcoholDescription,
                 initDrinksUrl,
                 initDrinksPrice,
                 initDrinksDescription,
                 initCeremonyUrl,
                 initCeremonyPrice,
                 initCeremonyDescription,
                 initBrightsDressUrl,
                 initBrightsDressPrice,
                 initBrightsDressDescription,
                 initGroomsSuitUrl,
                 initGroomsSuitPrice,
                 initGroomsSuitDescription,
                 initHairUrl,
                 initHairPrice,
                 initHairDescription,
                 initBeauticianUrl,
                 initBeauticianPrice,
                 initBeauticianDescription,
                 initCarUrl,
                 initCarPrice,
                 initCarDescription,
               }: OtherProps) => {
  const [loading, setLoading] = useState<boolean>(true);

  const [flowersUrl, setFlowersUrl] = useState<string>();
  const [flowersPrice, setFlowersPrice] = useState<number>();
  const [flowersDescription, setFlowersDescription] = useState<string>();

  const [photographerUrl, setPhotographerUrl] = useState<string>();
  const [photographerPrice, setPhotographerPrice] = useState<number>();
  const [photographerDescription, setPhotographerDescription] = useState<string>();

  const [cameramanUrl, setCameramanUrl] = useState<string>();
  const [cameramanPrice, setCameramanPrice] = useState<number>();
  const [cameramanDescription, setCameramanDescription] = useState<string>();

  const [musicUrl, setMusicUrl] = useState<string>();
  const [musicPrice, setMusicPrice] = useState<number>();
  const [musicDescription, setMusicDescription] = useState<string>();

  const [confectioneryUrl, setConfectioneryUrl] = useState<string>();
  const [confectioneryPrice, setConfectioneryPrice] = useState<number>();
  const [confectioneryDescription, setConfectioneryDescription] = useState<string>();

  const [alcoholUrl, setAlcoholUrl] = useState<string>();
  const [alcoholPrice, setAlcoholPrice] = useState<number>();
  const [alcoholDescription, setAlcoholDescription] = useState<string>();

  const [drinksUrl, setDrinksUrl] = useState<string>();
  const [drinksPrice, setDrinksPrice] = useState<number>();
  const [drinksDescription, setDrinksDescription] = useState<string>();

  const [ceremonyUrl, setCeremonyUrl] = useState<string>();
  const [ceremonyPrice, setCeremonyPrice] = useState<number>();
  const [ceremonyDescription, setCeremonyDescription] = useState<string>();

  const [brightsDressUrl, setBrightsDressUrl] = useState<string>();
  const [brightsDressPrice, setBrightsDressPrice] = useState<number>();
  const [brightsDressDescription, setBrightsDressDescription] = useState<string>();

  const [groomsSuitUrl, setGroomsSuitUrl] = useState<string>();
  const [groomsSuitPrice, setGroomsSuitPrice] = useState<number>();
  const [groomsSuitDescription, setGroomsSuitDescription] = useState<string>();

  const [hairUrl, setHairUrl] = useState<string>();
  const [hairPrice, setHairPrice] = useState<number>();
  const [hairDescription, setHairDescription] = useState<string>();

  const [beauticianUrl, setBeauticianUrl] = useState<string>();
  const [beauticianPrice, setBeauticianPrice] = useState<number>();
  const [beauticianDescription, setBeauticianDescription] = useState<string>();

  const [carUrl, setCarUrl] = useState<string>();
  const [carPrice, setCarPrice] = useState<number>();
  const [carDescription, setCarDescription] = useState<string>();

  useEffect(() => {
    setLoading(true);
    if (!!otherId) {
      setFlowersUrl(initFlowersUrl)
      setFlowersPrice(initFlowersPrice)
      setFlowersDescription(initFlowersDescription)
      setPhotographerUrl(initPhotographerUrl)
      setPhotographerPrice(initPhotographerPrice)
      setPhotographerDescription(initPhotographerDescription)
      setCameramanUrl(initCameramanUrl)
      setCameramanPrice(initCameramanPrice)
      setCameramanDescription(initCameramanDescription)
      setMusicUrl(initMusicUrl)
      setMusicPrice(initMusicPrice)
      setMusicDescription(initMusicDescription)
      setConfectioneryUrl(initConfectioneryUrl)
      setConfectioneryPrice(initConfectioneryPrice)
      setConfectioneryDescription(initConfectioneryDescription)
      setAlcoholUrl(initAlcoholUrl)
      setAlcoholPrice(initAlcoholPrice)
      setAlcoholDescription(initAlcoholDescription)
      setDrinksUrl(initDrinksUrl)
      setDrinksPrice(initDrinksPrice)
      setDrinksDescription(initDrinksDescription)
      setCeremonyUrl(initCeremonyUrl)
      setCeremonyPrice(initCeremonyPrice)
      setCeremonyDescription(initCeremonyDescription)
      setBrightsDressUrl(initBrightsDressUrl)
      setBrightsDressPrice(initBrightsDressPrice)
      setBrightsDressDescription(initBrightsDressDescription)
      setGroomsSuitUrl(initGroomsSuitUrl)
      setGroomsSuitPrice(initGroomsSuitPrice)
      setGroomsSuitDescription(initGroomsSuitDescription)
      setHairUrl(initHairUrl)
      setHairPrice(initHairPrice)
      setHairDescription(initHairDescription)
      setBeauticianUrl(initBeauticianUrl)
      setBeauticianPrice(initBeauticianPrice)
      setBeauticianDescription(initBeauticianDescription)
      setCarUrl(initCarUrl)
      setCarPrice(initCarPrice)
      setCarDescription(initCarDescription)
      setLoading(false);
    }
    setLoading(false);
  }, [otherId]);

  const save = async () => {
    await fetch('/api/plan/other', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
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
      })
    });
  }

  if (loading) {
    return <Loading/>
  }

  return <Box sx={{flexGrow: 1, margin: '12px'}}>
    <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
      <Typography sx={{fontSize: 28, color: 'secondary.main'}}>Pozostałe</Typography>
      <Button variant="contained" onClick={() => save()} color="secondary">Zapisz</Button>
    </Box>
    {/* Flowers */}
    <Box sx={{flexGrow: 1, margin: '12px'}}>
      <Typography sx={{fontSize: 24, color: 'primary.main'}}>Kwiaty</Typography>
      <TextField id="otherFlowersUrl" color="secondary" variant="outlined"
                 style={{marginTop: '16px', width: '100%'}}
                 size="small"
                 onChange={(event) => setFlowersUrl(event.target.value)}
                 defaultValue={flowersUrl}
                 type="text" label="Link do kwiaciarni"/>
      <TextField id="otherFlowersPrice" color="secondary" variant="outlined"
                 style={{marginTop: '16px', width: '100%'}}
                 size="small"
                 defaultValue={flowersPrice}
                 onChange={(event) => setFlowersPrice(+event.target.value)}
                 type="number" label="Cena kwiaciarni"/>
      <TextField id="planDescription" color="secondary" size="small" variant="outlined"
                 style={{marginTop: '16px', width: '100%'}}
                 defaultValue={flowersDescription}
                 onChange={(event) => setFlowersDescription(event.target.value)}
                 multiline rows={2} type="text" label="Inne propozycje kwiatowe"/>
    </Box>
    {/* Photographer */}
    <Box sx={{flexGrow: 1, margin: '12px'}}>
      <Typography sx={{fontSize: 24, color: 'primary.main'}}>Fotograf</Typography>
      <TextField id="otherPhotographerUrl" color="secondary" variant="outlined"
                 style={{marginTop: '16px', width: '100%'}}
                 size="small"
                 defaultValue={photographerUrl}
                 onChange={(event) => setPhotographerUrl(event.target.value)}
                 type="text" label="Link do fotografa"/>
      <TextField id="otherFlowersPrice" color="secondary" variant="outlined"
                 style={{marginTop: '16px', width: '100%'}}
                 size="small"
                 defaultValue={photographerPrice}
                 onChange={(event) => setPhotographerPrice(+event.target.value)}
                 type="number" label="Cena fotografa"/>
      <TextField id="planDescription" color="secondary" size="small" variant="outlined"
                 style={{marginTop: '16px', width: '100%'}}
                 defaultValue={photographerDescription}
                 onChange={(event) => setPhotographerDescription(event.target.value)}
                 multiline rows={2} type="text" label="Inne propozycje fotografów"/>

    </Box>
    {/* Kamerzysta */}
    <Box sx={{flexGrow: 1, margin: '12px'}}>
      <Typography sx={{fontSize: 24, color: 'primary.main'}}>Kamerzysta</Typography>
      <TextField id="otherPhotographerUrl" color="secondary" variant="outlined"
                 style={{marginTop: '16px', width: '100%'}}
                 size="small"
                 defaultValue={cameramanUrl}
                 onChange={(event) => setCameramanUrl(event.target.value)}
                 type="text" label="Link do kamerzysty"/>
      <TextField id="otherFlowersPrice" color="secondary" variant="outlined"
                 style={{marginTop: '16px', width: '100%'}}
                 size="small"
                 defaultValue={cameramanPrice}
                 onChange={(event) => setCameramanPrice(+event.target.value)}
                 type="number" label="Cena kamerzysty"/>
      <TextField id="planDescription" color="secondary" size="small" variant="outlined"
                 style={{marginTop: '16px', width: '100%'}}
                 defaultValue={cameramanDescription}
                 onChange={(event) => setCameramanDescription(event.target.value)}
                 multiline rows={2} type="text" label="Inne propozycje kamerzystów"/>
    </Box>

    {/* Muzyka */}
    <Box sx={{flexGrow: 1, margin: '12px'}}>
      <Typography sx={{fontSize: 24, color: 'primary.main'}}>Muzyka</Typography>
      <TextField id="otherPhotographerUrl" color="secondary" variant="outlined"
                 style={{marginTop: '16px', width: '100%'}}
                 size="small"
                 defaultValue={musicUrl}
                 onChange={(event) => setMusicUrl(event.target.value)}
                 type="text" label="Link do muzyków"/>
      <TextField id="otherFlowersPrice" color="secondary" variant="outlined"
                 style={{marginTop: '16px', width: '100%'}}
                 size="small"
                 defaultValue={musicPrice}
                 onChange={(event) => setMusicPrice(+event.target.value)}
                 type="number" label="Cena muzyków"/>
      <TextField id="planDescription" color="secondary" size="small" variant="outlined"
                 style={{marginTop: '16px', width: '100%'}}
                 defaultValue={musicDescription}
                 onChange={(event) => setMusicDescription(event.target.value)}
                 multiline rows={2} type="text" label="Inne propozycje muzyków"/>

    </Box>

    {/* Cukiernia */}
    <Box sx={{flexGrow: 1, margin: '12px'}}>
      <Typography sx={{fontSize: 24, color: 'primary.main'}}>Cukiernia</Typography>
      <TextField id="otherPhotographerUrl" color="secondary" variant="outlined"
                 style={{marginTop: '16px', width: '100%'}}
                 size="small"
                 defaultValue={confectioneryUrl}
                 onChange={(event) => setConfectioneryUrl(event.target.value)}
                 type="text" label="Link do cukierni"/>
      <TextField id="otherFlowersPrice" color="secondary" variant="outlined"
                 style={{marginTop: '16px', width: '100%'}}
                 size="small"
                 defaultValue={confectioneryPrice}
                 onChange={(event) => setConfectioneryPrice(+event.target.value)}
                 type="number" label="Cena cukierni"/>
      <TextField id="planDescription" color="secondary" size="small" variant="outlined"
                 style={{marginTop: '16px', width: '100%'}}
                 defaultValue={confectioneryDescription}
                 onChange={(event) => setConfectioneryDescription(event.target.value)}
                 multiline rows={2} type="text" label="Inne propozycje cukierni"/>
    </Box>

    {/* Alkohole */}
    <Box sx={{flexGrow: 1, margin: '12px'}}>
      <Typography sx={{fontSize: 24, color: 'primary.main'}}>Alkohole</Typography>
      <TextField id="otherPhotographerUrl" color="secondary" variant="outlined"
                 style={{marginTop: '16px', width: '100%'}}
                 size="small"
                 defaultValue={alcoholUrl}
                 onChange={(event) => setAlcoholUrl(event.target.value)}
                 type="text" label="Link do hurtowni alkoholi"/>
      <TextField id="otherFlowersPrice" color="secondary" variant="outlined"
                 style={{marginTop: '16px', width: '100%'}}
                 size="small"
                 defaultValue={alcoholPrice}
                 onChange={(event) => setAlcoholPrice(+event.target.value)}
                 type="number" label="Cena alkoholi"/>
      <TextField id="planDescription" color="secondary" size="small" variant="outlined"
                 style={{marginTop: '16px', width: '100%'}}
                 defaultValue={alcoholDescription}
                 onChange={(event) => setAlcoholDescription(event.target.value)}
                 multiline rows={2} type="text" label="Inne propozycje alkoholi"/>
    </Box>

    {/* Napoje */}
    <Box sx={{flexGrow: 1, margin: '12px'}}>
      <Typography sx={{fontSize: 24, color: 'primary.main'}}>Napoje</Typography>
      <TextField id="otherPhotographerUrl" color="secondary" variant="outlined"
                 style={{marginTop: '16px', width: '100%'}}
                 size="small"
                 defaultValue={drinksUrl}
                 onChange={(event) => setDrinksUrl(event.target.value)}
                 type="text" label="Opis zakupu napoi"/>
      <TextField id="otherFlowersPrice" color="secondary" variant="outlined"
                 style={{marginTop: '16px', width: '100%'}}
                 size="small"
                 defaultValue={drinksPrice}
                 onChange={(event) => setDrinksPrice(+event.target.value)}
                 type="number" label="Cena napoi"/>
      <TextField id="planDescription" color="secondary" size="small" variant="outlined"
                 style={{marginTop: '16px', width: '100%'}}
                 defaultValue={drinksDescription}
                 onChange={(event) => setDrinksDescription(event.target.value)}
                 multiline rows={2} type="text" label="Inne propozycje napoi"/>
    </Box>

    {/* Urząd/Kościół */}
    <Box sx={{flexGrow: 1, margin: '12px'}}>
      <Typography sx={{fontSize: 24, color: 'primary.main'}}>Ceremonia ślubu</Typography>
      <TextField id="otherPhotographerUrl" color="secondary" variant="outlined"
                 style={{marginTop: '16px', width: '100%'}}
                 size="small"
                 defaultValue={ceremonyUrl}
                 onChange={(event) => setCeremonyUrl(event.target.value)}
                 type="text" label="Opis ceremoni ślubu"/>
      <TextField id="otherFlowersPrice" color="secondary" variant="outlined"
                 style={{marginTop: '16px', width: '100%'}}
                 size="small"
                 defaultValue={ceremonyPrice}
                 onChange={(event) => setCeremonyPrice(+event.target.value)}
                 type="number" label="Cena ceremonii ślubu"/>
      <TextField id="planDescription" color="secondary" size="small" variant="outlined"
                 style={{marginTop: '16px', width: '100%'}}
                 defaultValue={ceremonyDescription}
                 onChange={(event) => setCeremonyDescription(event.target.value)}
                 multiline rows={2} type="text" label="Inne propozycje ceremonii ślubu"/>
    </Box>

    {/* Ubranie Panny młodej*/}
    <Box sx={{flexGrow: 1, margin: '12px'}}>
      <Typography sx={{fontSize: 24, color: 'primary.main'}}>Suknia Panny młodej</Typography>
      <TextField id="otherPhotographerUrl" color="secondary" variant="outlined"
                 style={{marginTop: '16px', width: '100%'}}
                 size="small"
                 defaultValue={brightsDressUrl}
                 onChange={(event) => setBrightsDressUrl(event.target.value)}
                 type="text" label="Link do sklepu sukien ślubnych"/>
      <TextField id="otherFlowersPrice" color="secondary" variant="outlined"
                 style={{marginTop: '16px', width: '100%'}}
                 size="small"
                 defaultValue={brightsDressPrice}
                 onChange={(event) => setBrightsDressPrice(+event.target.value)}
                 type="number" label="Cena sukni ślubnej"/>
      <TextField id="planDescription" color="secondary" size="small" variant="outlined"
                 style={{marginTop: '16px', width: '100%'}}
                 defaultValue={brightsDressDescription}
                 onChange={(event) => setBrightsDressDescription(event.target.value)}
                 multiline rows={2} type="text" label="Inne propozycje sukni Panny młodej"/>
    </Box>

    {/* Ubranie Pana młodego*/}
    <Box sx={{flexGrow: 1, margin: '12px'}}>
      <Typography sx={{fontSize: 24, color: 'primary.main'}}>Ubranie Pana Młodego</Typography>
      <TextField id="otherPhotographerUrl" color="secondary" variant="outlined"
                 style={{marginTop: '16px', width: '100%'}}
                 size="small"
                 defaultValue={groomsSuitUrl}
                 onChange={(event) => setGroomsSuitUrl(event.target.value)}
                 type="text" label="Link do ubrania Pana Młodego"/>
      <TextField id="otherFlowersPrice" color="secondary" variant="outlined"
                 style={{marginTop: '16px', width: '100%'}}
                 size="small"
                 defaultValue={groomsSuitPrice}
                 onChange={(event) => setGroomsSuitPrice(+event.target.value)}
                 type="number" label="Cena ubrania Pana Młodego"/>
      <TextField id="planDescription" color="secondary" size="small" variant="outlined"
                 style={{marginTop: '16px', width: '100%'}}
                 defaultValue={groomsSuitDescription}
                 onChange={(event) => setGroomsSuitDescription(event.target.value)}
                 multiline rows={2} type="text" label="Inne propozycje ubrania Pana młodego"/>
    </Box>

    {/* Fryzjer */}
    <Box sx={{flexGrow: 1, margin: '12px'}}>
      <Typography sx={{fontSize: 24, color: 'primary.main'}}>Fryzjer</Typography>
      <TextField id="otherPhotographerUrl" color="secondary" variant="outlined"
                 style={{marginTop: '16px', width: '100%'}}
                 size="small"
                 defaultValue={hairUrl}
                 onChange={(event) => setHairUrl(event.target.value)}
                 type="text" label="Link do fryzjera"/>
      <TextField id="otherFlowersPrice" color="secondary" variant="outlined"
                 style={{marginTop: '16px', width: '100%'}}
                 size="small"
                 defaultValue={hairPrice}
                 onChange={(event) => setHairPrice(+event.target.value)}
                 type="number" label="Cena fryzjera"/>
      <TextField id="planDescription" color="secondary" size="small" variant="outlined"
                 style={{marginTop: '16px', width: '100%'}}
                 defaultValue={hairDescription}
                 onChange={(event) => setHairDescription(event.target.value)}
                 multiline rows={2} type="text" label="Inne propozycje fryzjera"/>
    </Box>

    {/* Kosmetyczka */}
    <Box sx={{flexGrow: 1, margin: '12px'}}>
      <Typography sx={{fontSize: 24, color: 'primary.main'}}>Kosmetyczka</Typography>
      <TextField id="otherPhotographerUrl" color="secondary" variant="outlined"
                 style={{marginTop: '16px', width: '100%'}}
                 size="small"
                 defaultValue={beauticianUrl}
                 onChange={(event) => setBeauticianUrl(event.target.value)}
                 type="text" label="Link do kosmetyczki"/>
      <TextField id="otherFlowersPrice" color="secondary" variant="outlined"
                 style={{marginTop: '16px', width: '100%'}}
                 size="small"
                 defaultValue={beauticianPrice}
                 onChange={(event) => setBeauticianPrice(+event.target.value)}
                 type="number" label="Cena kosmetyczki"/>
      <TextField id="planDescription" color="secondary" size="small" variant="outlined"
                 style={{marginTop: '16px', width: '100%'}}
                 defaultValue={beauticianDescription}
                 onChange={(event) => setBeauticianDescription(event.target.value)}
                 multiline rows={2} type="text" label="Inne propozycje kosmetyczki"/>
    </Box>

    {/* Samochód do ślubu */}
    <Box sx={{flexGrow: 1, margin: '12px'}}>
      <Typography sx={{fontSize: 24, color: 'primary.main'}}>Samochód do ślubu</Typography>
      <TextField id="otherPhotographerUrl" color="secondary" variant="outlined"
                 style={{marginTop: '16px', width: '100%'}}
                 size="small"
                 defaultValue={carUrl}
                 onChange={(event) => setCarUrl(event.target.value)}
                 type="text" label="Link do aut ślubnych"/>
      <TextField id="otherFlowersPrice" color="secondary" variant="outlined"
                 style={{marginTop: '16px', width: '100%'}}
                 size="small"
                 defaultValue={carPrice}
                 onChange={(event) => setCarPrice(+event.target.value)}
                 type="number" label="Cena auta"/>
      <TextField id="planDescription" color="secondary" size="small" variant="outlined"
                 style={{marginTop: '16px', width: '100%'}}
                 defaultValue={carDescription}
                 onChange={(event) => setCarDescription(event.target.value)}
                 multiline rows={2} type="text" label="Inne propozycje auta"/>
    </Box>

  </Box>
}

export default Other;
