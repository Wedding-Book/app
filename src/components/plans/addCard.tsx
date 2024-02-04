'use client'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import {useSession} from 'next-auth/react';
import React, {useState} from 'react';
import Snackbar from '@mui/material/Snackbar';

const AddCard = () => {
  const {data: session} = useSession();
  const [open, setOpen] = useState(false);

  const handleAddPlan = async () => {
    const response = await fetch('/api/plan', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({email: session?.user?.email})
    });

    if (response.status === 201) {
      setOpen(true);
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
    <Snackbar
      open={open}
      onClose={() => setOpen(false)}
      autoHideDuration={2000}
      message="Utworzone wesele"
    />
  </>
}

export default AddCard;