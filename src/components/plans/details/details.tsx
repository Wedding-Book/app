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
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

type PlanConfig = {
  giftsEnabled: boolean
}

type Props = {
  id: string
  initName: string
  initNotes?: string,
  initDescription: string,
  initEventDate: Date,
  planConfig: PlanConfig
  initGroom?: string,
  initBright?: string,
  initBestMan?: string,
  initBridesMaid?: string,
}

const Details = ({id, initName, initDescription, initNotes, initEventDate, planConfig, initGroom, initBright, initBridesMaid, initBestMan}: Props) => {
  const [name, setName] = useState<string>();
  const [description, setDescription] = useState<string>();
  const [groom, setGroom] = useState<string>();
  const [bright, setBright] = useState<string>();
  const [bestMan, setBestMan] = useState<string>();
  const [bridesMaid, setBridesMaid] = useState<string>();
  const [notes, setNotes] = useState<string | undefined>();
  const [eventDate, setEventDate] = useState<Dayjs | null>();
  const [configGiftsEnabled, setConfigGiftsEnabled] = useState<boolean>(false);

  useEffect(() => {
    setName(initName);
    setDescription(initDescription);
    setGroom(initGroom);
    setBright(initBright);
    setBestMan(initBestMan);
    setBridesMaid(initBridesMaid);
    setEventDate(dayjs(initEventDate));
    setConfigGiftsEnabled(planConfig.giftsEnabled);
    setNotes(initNotes)
  }, [initName, initDescription, initNotes, initEventDate, planConfig]);

  const updatePlan = async () => {
    if (!!name && !!description && !!eventDate) {
      const response = await fetch('/api/plan', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({id, name, description, notes, eventDate: eventDate?.toDate(), bright, groom, bestMan, bridesMaid})
      });
    }
  }

  const handleGiftsEnabledChange = async () => {
    setConfigGiftsEnabled(!configGiftsEnabled);
    await fetch('/api/plan/config', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({planId: id, giftsEnabled: !configGiftsEnabled})
    });
  }

  if (!name || !description || !eventDate) {
    return <Box sx={{display: 'flex', flexDirection: 'column'}}>
      <Loading/>
    </Box>
  }

  return <Box sx={{display: 'flex', flexDirection: 'column', marginLeft: 4, marginTop: 2}}>
    <Typography sx={{fontSize: 28, color: 'secondary.main'}}>Szczegóły wydarzenia</Typography>
    <Box sx={{display: 'flex', flexDirection: 'row'}}>
      <Box sx={{display: 'flex', flexDirection: 'column'}}>
        <TextField id="planName" color="secondary" variant="outlined"
                   style={{marginTop: '16px', width: '600px'}}
                   value={name}
                   required onChange={(event) => setName(event.target.value)}
                   type="text" label="Nazwa wydarzenia"/>
        <TextField id="planDescription" color="secondary" variant="outlined"
                   style={{marginTop: '16px', width: '600px'}}
                   value={description}
                   multiline rows={2}
                   required onChange={(event) => setDescription(event.target.value)}
                   type="text" label="Opis wydarzenia"/>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateTimePicker
            sx={{marginTop: '16px', width: '600px'}}
            ampm={false}
            format="DD.MM.YYYY HH:mm"
            label="Data wydarzenia"
            value={eventDate}
            onChange={(newValue) => setEventDate(newValue)}
          />
        </LocalizationProvider>
        <TextField id="planName" color="secondary" variant="outlined"
                   style={{marginTop: '16px', width: '600px'}}
                   value={bright}
                   onChange={(event) => setBright(event.target.value)}
                   type="text" label="Panna młoda"/>
        <TextField id="planName" color="secondary" variant="outlined"
                   style={{marginTop: '16px', width: '600px'}}
                   value={groom}
                   onChange={(event) => setGroom(event.target.value)}
                   type="text" label="Pan młody"/>
        <TextField id="planName" color="secondary" variant="outlined"
                   style={{marginTop: '16px', width: '600px'}}
                   value={bridesMaid}
                   onChange={(event) => setBridesMaid(event.target.value)}
                   type="text" label="Świadkowa"/>
        <TextField id="planName" color="secondary" variant="outlined"
                   style={{marginTop: '16px', width: '600px'}}
                   value={bestMan}
                   onChange={(event) => setBestMan(event.target.value)}
                   type="text" label="Świadek"/>
      </Box>
      <TextField id="planNotes" color="secondary" variant="outlined"
                 style={{marginTop: '16px', width: '600px', marginLeft: '32px', height: '100%'}}
                 value={notes ?? ""} multiline rows={8}
                 onChange={(event) => setNotes(event.target.value)}
                 type="text" label="Notatki"/>
    </Box>

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

    <Typography sx={{fontSize: 28, color: 'secondary.main', marginTop: '16px'}}>Konfiguracja wydarzenia</Typography>
    <FormControlLabel sx={{fontSize: 28, color: 'secondary.main', marginTop: '16px'}}
                      control={<Switch checked={configGiftsEnabled}
                                       onChange={handleGiftsEnabledChange}/>}
                      label="Prezentownik"/>
  </Box>
}

export default Details;
