'use client'
import Typography from '@mui/material/Typography';
import PlanCard from '@/components/plans/planCard';
import AddCard from '@/components/plans/addCard';
import React from 'react';

type Props = {
  plans: PlanModel[]
}

const Owned = ({plans}: Props) => {
  return <>
    <Typography sx={{fontSize: 28, color: 'secondary.main', marginLeft: 4, marginTop: 2}}>Twoje planowane
      śluby</Typography>
    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap'}}>
      {plans?.map(plan => <PlanCard key={plan.id} id={plan.id} name={plan.name} description={plan.description}/>)}

      <AddCard/>
    </div>
  </>
}

export default Owned;