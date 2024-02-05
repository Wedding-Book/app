interface PlanModel {
  id: string;
  name: string;
  description: string;
}

interface SharedPlanModel {
  userId: string;
  planId: string;
  plan: PlanModel;
}