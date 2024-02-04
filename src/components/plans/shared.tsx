import Typography from '@mui/material/Typography';
import PlanCard from '@/components/plans/planCard';
import React from 'react';

const Shared = () => {
  return <>
    <Typography sx={{fontSize: 28,color: 'secondary.main', marginLeft: 4, marginTop: 2}}>Twoje udostępnione śluby</Typography>
    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap'}}>
      <PlanCard name="Test" description="Test"/>
    </div>
  </>
}

export default Shared;