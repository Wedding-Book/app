'use client'
import {useEffect, useState} from 'react';
import dayjs, {Dayjs} from 'dayjs';
import {usePathname} from 'next/navigation';
import CountDownTimer from '@/components/plans/timer/countDownTimer';

const TimerComponent = () => {
  const pathname = usePathname();
  const [targetDate, setTargetDate] = useState<Dayjs>();

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

  if (!targetDate) {
    return <></>;
  }

  return <CountDownTimer targetDate={targetDate}/>
}

export default TimerComponent;
