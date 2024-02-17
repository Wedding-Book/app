'use client'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import {TextField} from '@mui/material';
import React, {useEffect, useState} from 'react';
import Loading from '@/components/loading/loading';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import Link from '@mui/material/Link';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import AddIcon from '@mui/icons-material/Add';

type Props = {
  planId: string,
  initTrips: TripModel[]
};

type TripModel = {
  id: string,
  name: string,
  price?: number,
  imgUrl: string,
  offerUrl?: string,
  isPicked: boolean,
};

const Trips = ({planId, initTrips}: Props) => {
  const [tripList, setTripList] = useState<TripModel[]>([]);
  const [name, setName] = useState<string>();
  const [price, setPrice] = useState<number>(0);
  const [imgUrl, setImgUrl] = useState<string>();
  const [offerLink, setOfferLink] = useState<string>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    setTripList(initTrips)
    setLoading(false);
  }, []);

  const add = async () => {
    await fetch('/api/plan/trips', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({planId: planId, name, price, imgUrl, offerUrl: offerLink, isPicked: false})
    }).then((res) => {
      return res.json();
    }).then(data => {
      setTripList(prevState => [
        data,
        ...prevState.slice(0)
      ]);
      setName('');
      setImgUrl('');
      setPrice(0);
      setOfferLink('');
    })
  }

  const deleteTrip = async (id: string, index: number) => {
    await fetch(`/api/plan/trips?id=${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => {
      return res.json();
    }).then(data => {
      setTripList(prevState => [
        ...prevState.slice(0, index),
        ...prevState.slice(index + 1)
      ])
    })
  }

  const pickTrip = async (id: string, index: number) => {
    await fetch(`/api/plan/trips`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({tripId: id, isPicked: !tripList[index].isPicked})
    }).then((res) => {
      return res.json();
    }).then(data => {
      setTripList(prevState => [
        ...prevState.slice(0, index),
        {
          ...prevState[index],
          isPicked: !prevState[index].isPicked
        },
        ...prevState.slice(index + 1)
      ])
    })
  }

  if (loading) {
    return <Loading/>
  }

  return <Box sx={{display: 'flex', flexDirection: 'column', marginLeft: 4, marginTop: 2}}>
    <Typography sx={{fontSize: 28, color: 'secondary.main'}}>Podróż poślubna</Typography>
    <Box sx={{display: 'flex', flexDirection: 'row', width: '100%', alignItems: 'end'}}>
      <TextField id="offername" color="secondary" size="small" variant="outlined"
                 style={{marginTop: '16px', marginRight: '8px', flexGrow: 1}}
                 required
                 value={name}
                 onChange={(event) => setName(event.target.value)}
                 type="text" label="Tytuł podróży"/>
      <TextField id="offerImage" color="secondary" size="small" variant="outlined"
                 style={{marginTop: '16px', marginRight: '8px', flexGrow: 1}}
                 required
                 value={imgUrl}
                 onChange={(event) => setImgUrl(event.target.value)}
                 type="text" label="Link do zdjęcia"/>
      <TextField id="offerPrice" color="secondary" size="small" variant="outlined"
                 style={{marginTop: '16px', marginRight: '8px', flexGrow: 1}}
                 onChange={(event) => setPrice(+event.target.value)}
                 value={price}
                 type="number" label="Cena podróży"/>
      <TextField id="offerLink" color="secondary" size="small" variant="outlined"
                 style={{marginTop: '16px', marginRight: '8px', flexGrow: 1}}
                 onChange={(event) => setOfferLink(event.target.value)}
                 value={offerLink}
                 type="text" label="Link do oferty"/>
      <IconButton aria-label="add" color="success" onClick={add}>
        <AddIcon/>
      </IconButton>
    </Box>
    <ImageList variant="masonry" cols={4} gap={8}>
      {tripList.map((trip, index) => (
        <ImageListItem key={trip.id}>
          <img
            srcSet={`${trip.imgUrl}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${trip.imgUrl}?w=248&fit=crop&auto=format`}
            alt={trip.name}
            loading="lazy"
          />
          <ImageListItemBar
            sx={{
              background:
                'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
            }}
            position="top"
            actionIcon={
              <IconButton
                sx={{color: 'white'}}
                aria-label={`star ${trip.name}`}
                onClick={() => pickTrip(trip.id, index)}
              >
                {trip.isPicked ? <StarIcon/> : <StarBorderIcon/>}
              </IconButton>
            }
            actionPosition="left"
          />
          <ImageListItemBar
            title={trip.name}
            subtitle={trip.price}
            actionIcon={<Box
              sx={{display: 'flex', alignItems: 'center'}}>
              {trip.offerUrl && <Link
                  sx={{display: 'flex', alignItems: 'center', marginRight: '8px', color: 'primary.light'}}
                  variant="body2"
                  target="_blank"
                  href={trip.offerUrl}
              >
                  <InsertLinkIcon/>
              </Link>}<IconButton
              onClick={() => deleteTrip(trip.id, index)}
              sx={{color: 'primary.light'}}
            >
              <DeleteIcon/>
            </IconButton></Box>

            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  </Box>
}

export default Trips;
