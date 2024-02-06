'use client'
import {Button} from '@mui/material';
import React from 'react';
import {useRouter} from 'next/navigation';

const DeletePlan = ({id}: { id: string }) => {
  const router = useRouter();
  const deletePlan = async () => {
    await fetch(`/api/plan?planId=${id}`, {
      method: 'DELETE'
    });
    router.push('/plans');
  }

  return <Button
    sx={{marginTop: '16px'}}
    variant="contained"
    color="error"
    onClick={() => deletePlan()}
  >
    Usuń wydarzenie
  </Button>
}

export default DeletePlan;
