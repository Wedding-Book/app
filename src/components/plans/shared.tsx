import Typography from '@mui/material/Typography';
import PlanCard from '@/components/plans/planCard';
import React from 'react';

type Props = {
  sharedPlans: SharedPlanModel[]
}

const Shared = ({sharedPlans}: Props) => {
  if (!sharedPlans.length) {
    return <></>
  }

  return <> <Typography sx={{fontSize: 28, color: 'secondary.main', marginLeft: 4, marginTop: 2}}>Twoje udostępnione śluby</Typography>
    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap'}}>
      {sharedPlans.map(sharedPlan => <PlanCard id={sharedPlan.plan.id} key={sharedPlan.plan.id} name={sharedPlan.plan.name} description={sharedPlan.plan.description}/>)}
    </div>
  </>
}

export default Shared;