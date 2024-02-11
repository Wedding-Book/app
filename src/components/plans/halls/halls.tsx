'use client'
import Box from '@mui/material/Box';
import React, {useEffect, useState} from 'react';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import Modal from '@mui/material/Modal';
import {Button, TextField} from '@mui/material';
import Loading from '@/components/loading/loading';
import {useRouter} from 'next/navigation';

type HallModel = {
  id: string,
  isPicked: boolean,
  name: string
  description?: string,
  imgUrl?: string,
  googleUrl?: string,
  personCost?: number,
  additionalCost?: number,
  partyTime?: string,
  alcoholInPrice?: boolean,
  alcoholPrice?: number,
  drinksInPrice?: boolean,
  drinksPrice?: number,
  desertsInPrice?: boolean,
  desertsPrice?: number,
  menu?: string,
  isHotel?: boolean,
  numberOfHotelGuests?: number,
  hotelPricePerPerson?: number,
  tableSettings?: string,
  decorationInPrice?: boolean,
  decorationPrice?: number,
  decorationDescription?: string,
  soundSystem?: string,
  additionalAttractions?: string,
  damagePrice?: number,
  organizationSupport?: boolean,
  organizationSupportDescription?: string,
  availableDates?: string,
  maxGuests?: number,
  fruitsInPrice?: boolean,
  childrenInPrice?: boolean,
  childrenPrice?: number,
  extensionOfWedding?: boolean,
  extensionOfWeddingPrice?: number,
  advance?: number,
  weddingCeremony?: boolean,
  weddingCeremonyDescription?: string,
}

const Halls = ({planId, initHalls, initPickedHall}: { planId: string, initHalls?: HallModel[], initPickedHall?: HallModel }) => {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState(false);
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [imgUrl, setImgUrl] = useState<string>("");
  const [halls, setHalls] = useState<HallModel[] | undefined>();
  const [pickedHall, setPickedHall] = useState<HallModel | undefined>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    setHalls(initHalls);
    setPickedHall(initPickedHall);
    setLoading(false);
  }, [initPickedHall, initHalls]);


  const addWeddingHall = async () => {
    if (!!name) {
      fetch('/api/plan/halls', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({planId: planId, name, description, imgUrl})
      })
        .then(response => response.json())
        .then(data => {
          setHalls(prevState =>{
            if (!prevState) {
              return [data];
            }
            return [
            ...prevState,
            data
          ]})
          setModalOpen(false);
        });
    }
  }

  const showHallDetails = async (hallId: string) => {
    router.push(`halls/${hallId}`)
  }


  if (loading) {
    return <Loading/>
  }


  return <Box sx={{flexGrow: 1}}>
    {pickedHall && <Box>
        <Typography sx={{fontSize: 28, color: 'secondary.main', marginLeft: 4, marginTop: 2}}>Twoja sala
            weselna</Typography>
        <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap'}}>
            <Card
                onClick={() => showHallDetails(pickedHall.id)}
                sx={{width: 400, margin: 4, height: 350, color: 'primary.main', ':hover': {backgroundColor: 'primary.light', cursor: 'pointer', color: 'primary.contrastText'}}}>
                <CardMedia
                    component="img"
                    height="200"
                    image={pickedHall.imgUrl}
                    alt={pickedHall.name}
                />
                <CardContent>
                    <Typography sx={{fontSize: 28}} gutterBottom>
                      {pickedHall.name}
                    </Typography>
                    <Typography sx={{fontSize: 18}}>
                      {pickedHall.description}
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    </Box>}


    {halls && <Box>
        <Typography sx={{fontSize: 28, color: 'secondary.main', marginLeft: 4, marginTop: 2}}>Twoje propozycje sal
            weselnych</Typography>

        <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap'}}>
          {halls.map(hall => <Card
            onClick={() => showHallDetails(hall.id)}
            key={hall.id}
            sx={{width: 400, margin: 4, height: 350, color: 'primary.main', ':hover': {backgroundColor: 'primary.light', cursor: 'pointer', color: 'primary.contrastText'}}}>
            <CardMedia
              component="img"
              height="200"
              image={hall.imgUrl}
              alt={hall.name}
            />
            <CardContent>
              <Typography sx={{fontSize: 28}} gutterBottom>
                {hall.name}
              </Typography>
              <Typography sx={{fontSize: 18}}>
                {hall.description}
              </Typography>
            </CardContent>
          </Card>)}

            <Card sx={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              width: 400, margin: 4, height: 350,
              color: 'primary.main',
              ':hover': {backgroundColor: 'primary.light', cursor: 'pointer', color: 'primary.contrastText'}
            }}>
                <CardContent sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}
                             onClick={() => setModalOpen(true)}>
                    <AddCircleOutlineOutlinedIcon fontSize="large" sx={{margin: 2}}/>
                    <Typography sx={{fontSize: 28}}>
                        Dodaj propozycję sali weselnej
                    </Typography>
                </CardContent>
            </Card>
        </Box>

        <Modal
            open={modalOpen}
            onClose={() => setModalOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={{
              position: 'absolute' as 'absolute',
              top: '30%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 400,
              bgcolor: 'primary.contrastText',
              p: 4,
            }}>
                <Typography id="modal-modal-title" variant="h5" component="h2">
                    Dodaj nową salę
                </Typography>
                <TextField id="planName" color="secondary" size="small" variant="outlined"
                           style={{marginTop: '16px', width: '100%'}}
                           required onChange={(event) => setName(event.target.value)}
                           type="text" label="Nazwa sali"/>
                <TextField id="planDescription" color="secondary" size="small" variant="outlined"
                           style={{marginTop: '16px', width: '100%'}}
                           onChange={(event) => setDescription(event.target.value)}
                           multiline rows={2} type="text" label="Opis sali"/>
                <TextField id="planDescription" color="secondary" size="small" variant="outlined"
                           style={{marginTop: '16px', width: '100%'}}
                           onChange={(event) => setImgUrl(event.target.value)}
                           type="text" label="Link do zdjęcia sali"/>
                <Button
                    sx={{marginTop: '16px'}}
                    variant="contained"
                    color="primary"
                    onClick={() => addWeddingHall()}
                >
                    Dodaj salę
                </Button>
            </Box>
        </Modal>
    </Box>}
  </Box>
}

export default Halls;