import {unavailablePlanRedirector} from '@/components/plans/security/unavailablePlanRedirector';
import React from 'react';
import DeletePlan from '@/components/plans/delete/deletePlan';

const PlanIdPage = async ({params}: { params: { id: string } }) => {
  await unavailablePlanRedirector(params.id);

  return <>
    <DeletePlan id={params.id}/>
    <div>{params.id}</div>
  </>
}

export default PlanIdPage;
