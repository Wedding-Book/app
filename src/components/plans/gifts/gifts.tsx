'use client'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import React, {useEffect, useState} from 'react';
import {Button, TextField} from '@mui/material';
import Loading from '@/components/loading/loading';

type GiftModel = {
  id: string,
  name: string,
  description: string,
  imgUrl: string,
  offerUrl: string,
  price: number,
  quantity?: number,
}

const Gifts = ({planId, initGuestGift, initParentGift}: {
  planId: string,
  initGuestGift?: GiftModel,
  initParentGift?: GiftModel
}) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [parentGiftName, setParentGiftName] = useState<string>();
  const [parentGiftDescription, setParentGiftDescription] = useState<string>();
  const [parentGiftPrice, setParentGiftPrice] = useState<number>();
  const [parentGiftQuantity, setParentGiftQuantity] = useState<number>();
  const [parentGiftOfferUrl, setParentGiftOfferUrl] = useState<string>();
  const [parentGiftImgUrl, setParentGiftImgUrl] = useState<string>();
  const [guestGiftName, setGuestGiftName] = useState<string>();
  const [guestGiftDescription, setGuestGiftDescription] = useState<string>();
  const [guestGiftPrice, setGuestGiftPrice] = useState<number>();
  const [guestGiftOfferUrl, setGuestGiftOfferUrl] = useState<string>();
  const [guestGiftImgUrl, setGuestGiftImgUrl] = useState<string>();

  useEffect(() => {
    setLoading(true);
    if (initGuestGift) {
      setGuestGiftName(initGuestGift.name)
      setGuestGiftDescription(initGuestGift.description)
      setGuestGiftPrice(initGuestGift.price)
      setGuestGiftOfferUrl(initGuestGift.offerUrl)
      setGuestGiftImgUrl(initGuestGift.imgUrl)
    }
    if (initParentGift) {
      setParentGiftName(initParentGift.name)
      setParentGiftDescription(initParentGift.description)
      setParentGiftPrice(initParentGift.price)
      setParentGiftQuantity(initParentGift.quantity)
      setParentGiftOfferUrl(initParentGift.offerUrl)
      setParentGiftImgUrl(initParentGift.imgUrl)
    }
    setLoading(false);
  }, [initGuestGift, initParentGift])

  const updateParentGift = async () => {
    await fetch('/api/plan/gifts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        planId,
        isParent: true,
        name: parentGiftName,
        description: parentGiftDescription,
        quantity: parentGiftQuantity,
        price: parentGiftPrice,
        imgUrl: parentGiftImgUrl,
        offerUrl: parentGiftOfferUrl
      })
    });
  }

  const updateGuestGift = async () => {
    await fetch('/api/plan/gifts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        planId,
        isParent: false,
        name: guestGiftName,
        description: guestGiftDescription,
        price: guestGiftPrice,
        imgUrl: guestGiftImgUrl,
        offerUrl: guestGiftOfferUrl
      })
    });
  }

  if (loading) {
    return <Loading/>
  }

  return <Box sx={{display: 'flex', flexDirection: 'column', marginLeft: 4, marginTop: 2}}>
    <Typography sx={{fontSize: 28, color: 'secondary.main', marginBottom: '16px'}}>Prezenty dla rodziców</Typography>
    <Box sx={{display: 'flex', flexDirection: 'row', width: '100%'}}>
      <Box sx={{display: 'flex', flexDirection: 'column', width: '100%', marginRight: '16px'}}>
        <TextField id="parentPresent" color="secondary" size="small" variant="outlined"
                   style={{marginBottom: '16px'}}
                   required
                   defaultValue={parentGiftName}
                   onChange={(event) => setParentGiftName(event.target.value)}
                   type="text" label="Nazwa prezentu"/>
        <TextField id="parentPresentPrice" color="secondary" size="small" variant="outlined"
                   style={{marginBottom: '16px'}}
                   required
                   defaultValue={parentGiftPrice}
                   onChange={(event) => setParentGiftPrice(+event.target.value)}
                   type="number" label="Cena prezentu"/>
        <TextField id="parentPresentQuantity" color="secondary" size="small" variant="outlined"
                   style={{marginBottom: '16px'}}
                   required
                   defaultValue={parentGiftQuantity}
                   onChange={(event) => setParentGiftQuantity(+event.target.value)}
                   type="number" label="Liczba prezentów"/>
        <TextField id="parentPresentDescription" color="secondary" size="small" variant="outlined"
                   style={{marginBottom: '16px'}}
                   defaultValue={parentGiftDescription}
                   onChange={(event) => setParentGiftDescription(event.target.value)}
                   multiline rows={4}
                   type="text" label="Opis prezentu"/>
      </Box>
      <Box sx={{display: 'flex', flexDirection: 'column', width: '100%'}}>
        {parentGiftImgUrl && <img
            style={{maxWidth: 300, maxHeight: 350}}
            src={parentGiftImgUrl}
            alt={parentGiftName}
            loading="lazy"
        />}
        <TextField id="parentPresentImgUrl" color="secondary" size="small" variant="outlined"
                   style={{marginBottom: '16px'}}
                   defaultValue={parentGiftImgUrl}
                   onChange={(event) => setParentGiftImgUrl(event.target.value)}
                   type="text" label="Link do zdjęcia prezentu"/>
        <TextField id="parentPresentOfferUrl" color="secondary" size="small" variant="outlined"
                   style={{marginBottom: '16px'}}
                   defaultValue={parentGiftOfferUrl}
                   onChange={(event) => setParentGiftOfferUrl(event.target.value)}
                   type="text" label="Link do prezentu"/>

      </Box>
    </Box>
    <Button
      sx={{marginBottom: '16px'}}
      variant="contained"
      color="primary"
      disableRipple
      onClick={() => updateParentGift()}
    >
      Zaktualizuj prezent dla rodziców
    </Button>
    <Typography sx={{fontSize: 28, color: 'secondary.main', marginBottom: '16px'}}>Prezenty dla gości</Typography>
    <Box sx={{display: 'flex', flexDirection: 'row', width: '100%'}}>
      <Box sx={{display: 'flex', flexDirection: 'column', width: '100%', marginRight: '16px'}}>
        <TextField id="parentPresent" color="secondary" size="small" variant="outlined"
                   style={{marginBottom: '16px'}}
                   required
                   defaultValue={guestGiftName}
                   onChange={(event) => setGuestGiftName(event.target.value)}
                   type="text" label="Nazwa prezentu"/>
        <TextField id="parentPresentPrice" color="secondary" size="small" variant="outlined"
                   style={{marginBottom: '16px'}}
                   required
                   defaultValue={guestGiftPrice}
                   onChange={(event) => setGuestGiftPrice(+event.target.value)}
                   type="number" label="Cena prezentu"/>
        <TextField id="parentPresentDescription" color="secondary" size="small" variant="outlined"
                   style={{marginBottom: '16px'}}
                   defaultValue={guestGiftDescription}
                   onChange={(event) => setGuestGiftDescription(event.target.value)}
                   multiline rows={4}
                   type="text" label="Opis prezentu"/>
      </Box>
      <Box sx={{display: 'flex', flexDirection: 'column', width: '100%'}}>
        {guestGiftImgUrl && <img
            style={{maxWidth: 300, maxHeight: 350}}
            src={guestGiftImgUrl}
            alt={guestGiftName}
            loading="lazy"
        />}
        <TextField id="parentPresentImgUrl" color="secondary" size="small" variant="outlined"
                   style={{marginBottom: '16px'}}
                   defaultValue={guestGiftImgUrl}
                   onChange={(event) => setGuestGiftImgUrl(event.target.value)}
                   type="text" label="Link do zdjęcia prezentu"/>
        <TextField id="parentPresentOfferUrl" color="secondary" size="small" variant="outlined"
                   style={{marginBottom: '16px'}}
                   defaultValue={guestGiftOfferUrl}
                   onChange={(event) => setGuestGiftOfferUrl(event.target.value)}
                   type="text" label="Link do prezentu"/>

      </Box>
    </Box>
    <Button
      sx={{marginBottom: '16px'}}
      variant="contained"
      color="primary"
      disableRipple
      onClick={() => updateGuestGift()}
    >
      Zaktualizuj prezent dla gości
    </Button>
  </Box>
}

export default Gifts;
