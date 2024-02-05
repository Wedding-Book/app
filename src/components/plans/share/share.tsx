'use client'
import InputChip from '@/components/inputChip/inputChip';
import React, {useEffect, useState} from 'react';
import Snackbar from '@mui/material/Snackbar';

const Share = ({initPlanId, initCollaborators}: { initPlanId: string, initCollaborators: string[] }) => {

  const [accumulator, setAccumulator] = useState<string[]>([]);
  const [planId, setPlanId] = useState<string>();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setPlanId(initPlanId);
  }, [initPlanId]);

  useEffect(() => {
    setAccumulator(initCollaborators);
  }, [initCollaborators]);

  const add = async (value: string) => {
    const response = await fetch('/api/plan/share', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({planId: planId, sharedEmail: value})
    });
    if (response.status === 200) {
      setAccumulator([...accumulator, value]);
      return;
    }
    setOpen(true);
  }

  const deleteEmail = async (value: string) => {
    const response = await fetch(`/api/plan/share?planId=${planId}&sharedEmail=${value}`, {
      method: 'DELETE'
    });
    if (response.status === 200) {
      setAccumulator(accumulator.filter(acc => acc !== value));
      return;
    }
  }

  return <>
    <InputChip emailValidatorEnabled={true} inputLabel="Email użytkownika" inputType="email"
               initAccumulator={accumulator} addToAccumulator={add} deleteFromAccumulator={deleteEmail}
               duplicationError="Podany email istnieje już na liście" sectionHeader="Udostępnij swój plan"
               validationError="Niepoprawny email"/>
    <Snackbar
      open={open}
      onClose={() => setOpen(false)}
      autoHideDuration={2000}
      message="Nie można dodać użytkownika"
    />
  </>
}

export default Share;