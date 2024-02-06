import dynamic from 'next/dynamic';

const NoSSR = dynamic(() => import('@/components/plans/timer/countDownTimer'), {ssr: false})

const TimerPage = () => {
  return <NoSSR />
}

export default TimerPage;
