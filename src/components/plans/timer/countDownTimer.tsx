'use client'
import dayjs, {Dayjs} from 'dayjs';
import {useEffect, useState} from 'react';
import {usePathname} from 'next/navigation';
import {useCountdown} from '@/components/plans/timer/useCountdown';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import DateTimeDisplay from '@/components/plans/timer/dateTimeDisplay';

const CountDownTimer = () => {
  const pathname = usePathname();
  const [targetDate, setTargetDate] = useState<Dayjs>(dayjs());
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  useEffect(() => {
    const match = pathname.match(/plans\/(\w+)\/timer/)
    if (match) {
      fetch(`/api/plan/timer?planId=${match[1]}`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setTargetDate(dayjs(data));
        })
    }

  }, []);

  if (days + hours + minutes + seconds <= 0) {
    return (
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Typography sx={{
          textTransform: 'uppercase',
          fontSize: '36px',
          lineHeight: '48px',
          color: 'primary.main',
          fontWeight: 'bold',
          margin: '16px'
        }}>{targetDate.format('DD.MM.YYYY HH:mm')}</Typography>
        <Typography sx={{
          textTransform: 'uppercase',
          fontSize: '36px',
          lineHeight: '48px',
          color: 'primary.main',
          fontWeight: 'bold'
        }}>💒🎉🎉🎉 Gratulacje!!! 🎉🎉🎉💒</Typography>
      </Box>);
  }
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Typography sx={{
        textTransform: 'uppercase',
        fontSize: '36px',
        lineHeight: '48px',
        color: 'primary.main',
        fontWeight: 'bold',
        margin: '8px'
      }}>{targetDate.format('DD.MM.YYYY HH:mm')}</Typography>

      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <DateTimeDisplay value={days} type={'Dni'}/>
        <DateTimeDisplay value={hours} type={'Godziny'}/>
        <DateTimeDisplay value={minutes} type={'Minuty'}/>
        <DateTimeDisplay value={seconds} type={'Sekundy'}/>
      </Box>
    </Box>
  );
};
export default CountDownTimer;