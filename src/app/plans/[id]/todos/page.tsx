import {unavailablePlanRedirector} from '@/components/plans/security/unavailablePlanRedirector';
import serverSessionChecker from '@/components/protected/serverSessionChecker';
import Todos from '@/components/plans/todos/todos';
import prisma from '@/lib/prisma/prisma';

const TodosPage = async ({params}: { params: { id: string } }) => {
  await serverSessionChecker({noSessionPath: '/login'});
  await unavailablePlanRedirector(params.id);

  const todosPlan = await prisma.plan.findUnique({where: {id: params.id}, include: {todos: true}});

  return <Todos initTodos={todosPlan.todos} planId={params.id}/>
}

export default TodosPage;