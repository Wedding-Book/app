'use client'
import {useEffect, useState} from 'react';
import dayjs, {Dayjs} from 'dayjs';

const useCountdown = (targetDate: Dayjs) => {
  const countDownDate = targetDate.unix();

  const [countDown, setCountDown] = useState(
    countDownDate - dayjs().unix()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - dayjs().unix());
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  return getReturnValues(countDown);
};

const getReturnValues = (countDown: number) => {
  // calculate time left
  const days = Math.floor(countDown / (60 * 60 * 24));
  const hours = Math.floor(
    (countDown % (60 * 60 * 24)) / (60 * 60)
  );
  const minutes = Math.floor((countDown % (60 * 60)) / 60);
  const seconds = Math.floor((countDown % 60));

  return [days, hours, minutes, seconds];
};

export {useCountdown};