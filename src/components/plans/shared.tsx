import Typography from '@mui/material/Typography';
import PlanCard from '@/components/plans/planCard';
import React from 'react';

type Props = {
  plans: PlanModel[]
}

const Shared = ({plans}: Props) => {
  if (!plans.length) {
    return <></>
  }

  return <> <Typography sx={{fontSize: 28, color: 'secondary.main', marginLeft: 4, marginTop: 2}}>Twoje udostępnione śluby</Typography>
    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap'}}>
      {plans.map(plan => <PlanCard id={plan.id} key={plan.id} name={plan.name} description={plan.description}/>)}
    </div>
  </>
}

export default Shared;