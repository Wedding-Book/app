'use client'
import Typography from '@mui/material/Typography';
import PlanCard from '@/components/plans/planCard';
import AddCard from '@/components/plans/addCard';
import React, {useEffect, useState} from 'react';

type Props = {
  session: any
}

const Owned = ({session}: Props) => {
  const [plans, setPlans] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/api/plan?email=${session?.user?.email}`, {
        method: 'GET'
      });
      setPlans(await response.json());
    };

    fetchData();


  }, []);

  // TODO loading
  // Refactor
  // Plan model
  // ITP. :)
  return <>
    <Typography sx={{fontSize: 28, color: 'secondary.main', marginLeft: 4, marginTop: 2}}>Twoje planowane
      śluby</Typography>
    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap'}}>
      {plans.map(plan => <PlanCard name={plan.name} description={plan.description}/>)}

      <AddCard/>
    </div>
  </>
}

export default Owned;