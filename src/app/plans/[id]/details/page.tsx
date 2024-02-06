import {unavailablePlanRedirector} from '@/components/plans/security/unavailablePlanRedirector';
import React from 'react';
import Details from '@/components/plans/details/details';
import {getPlan} from '@/components/plans/prisma/plans';

const PlanIdPage = async ({params}: { params: { id: string } }) => {
  await unavailablePlanRedirector(params.id);
  const plan = await getPlan(params.id);

  return <>
    <Details id={params.id} initName={plan.name} initDescription={plan.description} initEventDate={plan.eventDate}/>
  </>
}

export default PlanIdPage;
