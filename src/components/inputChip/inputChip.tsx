'use client'
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import {TextField} from '@mui/material';
import Typography from '@mui/material/Typography';
import React, {useEffect, useState} from 'react';
import validateEmail from '@/util/emailValidator';

type Props = {
  emailValidatorEnabled: boolean,
  addToAccumulator: (inputValue: string) => void,
  deleteFromAccumulator: (inputValue: string) => void,
  initAccumulator: string[],
  validationError: string,
  duplicationError: string,
  sectionHeader: string,
  inputLabel: string,
  inputType: string,
}

const InputChip = ({
                     emailValidatorEnabled,
                     addToAccumulator,
                     validationError,
                     duplicationError,
                     sectionHeader,
                     inputLabel,
                     inputType,
                     initAccumulator,
                     deleteFromAccumulator
                   }: Props) => {

  const [inputValue, setInputValue] = useState<string | undefined>("");
  const [inputValueValidation, setInputValueValidation] = useState<string | undefined>();
  const [accumulator, setAccumulator] = useState<string[]>([]);

  useEffect(() => {
    setAccumulator(initAccumulator);
  }, [initAccumulator]);

  const onInputValueChange = (enteredInputValue: string) => {
    if (!enteredInputValue || (emailValidatorEnabled && !validateEmail(enteredInputValue ?? ""))) {
      setInputValueValidation(validationError);
      return;
    }
    setInputValue(enteredInputValue);
    setInputValueValidation(undefined);
  }

  const add = (event: any) => {
    if (event.key === 'Enter') {
      if (!inputValue || !validateEmail(inputValue ?? "")) {
        setInputValueValidation(validationError);
        return;
      }
      if (accumulator.includes(inputValue)) {
        setInputValueValidation(duplicationError);
        setInputValue(undefined);
        return;
      }
      addToAccumulator(inputValue);
      setInputValueValidation(undefined);
      setInputValue(undefined);
      event.target.value = "";
    }
  }

  return <div style={{marginLeft: 4, marginTop: 2}}>
    <Typography sx={{fontSize: 28, color: 'secondary.main'}}>{sectionHeader}</Typography>
    <Stack direction="row" spacing={1} sx={{marginTop: '16px'}}>
      {accumulator.map(acc => <Chip
        color="secondary"
        key={acc }
        label={acc}
        onDelete={() => deleteFromAccumulator(acc)}
      />)}
    </Stack>
    <TextField id="chipInput" color="secondary" size="small" variant="outlined" style={{marginTop: '16px'}}
               error={!!inputValueValidation} helperText={inputValueValidation}
               onChange={(event) => onInputValueChange(event.target.value)}
               onKeyDown={(event) => add(event)}
               type={inputType} label={inputLabel}/>
  </div>
}

export default InputChip;