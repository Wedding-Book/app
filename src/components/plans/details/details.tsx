'use client'
import React, {useEffect, useState} from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import dayjs, {Dayjs} from 'dayjs';
import Loading from '@/components/loading/loading';
import {Button, TextField} from '@mui/material';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {DateTimePicker} from '@mui/x-date-pickers/DateTimePicker';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import DeletePlan from '@/components/plans/delete/deletePlan';

type Props = {
  id: string
  initName: string
  initDescription: string,
  initEventDate: Date
}

const Details = ({id, initName, initDescription, initEventDate}: Props) => {
  const [name, setName] = useState<string>();
  const [description, setDescription] = useState<string>();
  const [eventDate, setEventDate] = useState<Dayjs | null>();

  useEffect(() => {
    setName(initName);
    setDescription(initDescription);
    setEventDate(dayjs(initEventDate));
  }, [initName, initDescription, initEventDate]);

  const updatePlan = async () => {
    const response = await fetch('/api/plan', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({id, name, description, eventDate: eventDate?.toDate()})
    });
  }

  if (!name || !description || !eventDate) {
    return <Box sx={{display: 'flex', flexDirection: 'column'}}>
      <Loading/>
    </Box>
  }

  return <Box sx={{display: 'flex', flexDirection: 'column', marginLeft: 4, marginTop: 2}}>
    <Typography sx={{fontSize: 28, color: 'secondary.main'}}>Szczegóły wydarzenia</Typography>
    <TextField id="planName" color="secondary" variant="outlined"
               style={{marginTop: '16px', width: '50%'}}
               value={name}
               required onChange={(event) => setName(event.target.value)}
               type="text" label="Nazwa wydarzenia"/>
    <TextField id="planDescription" color="secondary" variant="outlined"
               style={{marginTop: '16px', width: '50%'}}
               value={description}
               required onChange={(event) => setDescription(event.target.value)}
               type="text" label="Opis wydarzenia"/>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateTimePicker
        sx={{marginTop: '16px', width: '50%'}}
        ampm={false}
        format="DD.MM.YYYY HH:mm"
        label="Data wydarzenia"
        value={eventDate}
        onChange={(newValue) => setEventDate(newValue)}
      />
    </LocalizationProvider>

    <div><Button
      sx={{marginTop: '16px', width: '250px', marginRight: 8}}
      variant="contained"
      color="primary"
      disableRipple
      onClick={() => updatePlan()}
    >
      Zaktualizuj wydarzenie
    </Button>
      <DeletePlan id={id}/>
    </div>
  </Box>
}

export default Details;
