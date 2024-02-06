'use client'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import {useSession} from 'next-auth/react';
import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import {Button, TextField} from '@mui/material';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {DateTimePicker} from '@mui/x-date-pickers/DateTimePicker';
import dayjs, {Dayjs} from 'dayjs';
import {useRouter} from 'next/navigation';

const AddCard = () => {
  const {data: session} = useSession();
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState(false);
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [date, setDate] = useState<Dayjs | null>(dayjs());

  const handleAddPlan = async () => {
    setModalOpen(true);
  }
  const createPlan = async () => {
    if (!!date && !!name && !!description) {
      const response = await fetch('/api/plan', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email: session?.user?.email, name, description, eventDate: date?.toDate()})
      });

      if (response.status === 201) {
        const body = await response.json();
        setModalOpen(false);
        router.push('/plans/' + body.id + '/details');
      }
    }
  }

  return <>
    <Card sx={{
      width: 275,
      margin: 4,
      height: 150,
      color: 'primary.main',
      ':hover': {backgroundColor: 'primary.light', cursor: 'pointer', color: 'primary.contrastText'}
    }} onClick={handleAddPlan}>
      <CardContent sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <AddCircleOutlineOutlinedIcon fontSize="large" sx={{margin: 2}}/>
        <Typography sx={{fontSize: 28}}>
          Zaplanuj ślub
        </Typography>
      </CardContent>
    </Card>

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
          Dodaj nowy plan
        </Typography>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateTimePicker
            sx={{marginTop: '16px', width: '100%'}}
            ampm={false}
            format="DD.MM.YYYY HH:mm"
            label="Data wydarzenia"
            value={date}
            onChange={(newValue) => setDate(newValue)}
          />
        </LocalizationProvider>
        <TextField id="planName" color="secondary" size="small" variant="outlined"
                   style={{marginTop: '16px', width: '100%'}}
                   required onChange={(event) => setName(event.target.value)}
                   type="text" label="Nazwa wydarzenia"/>
        <TextField id="planDescription" color="secondary" size="small" variant="outlined"
                   style={{marginTop: '16px', width: '100%'}}
                   required onChange={(event) => setDescription(event.target.value)}
                   multiline rows={2} type="text" label="Opis wydarzenia"/>
        <Button
          sx={{marginTop: '16px'}}
          variant="contained"
          color="primary"
          onClick={() => createPlan()}
        >
          Utwórz wydarzenie
        </Button>
      </Box>
    </Modal>
  </>
}

export default AddCard;