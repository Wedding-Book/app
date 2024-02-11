import prisma from '@/lib/prisma/prisma';
import {NextRequest} from 'next/server';
import {$Enums} from '.prisma/client';
import TodoStatus = $Enums.TodoStatus;

const handler = async (req: Request) => {
  if (req.method === 'POST') {
    const {planId}: {
      planId: string,
    } = await req.json();

    const newTodo = await prisma.todo.create({data: {value: "", planId: planId}});

    return new Response(
      JSON.stringify(newTodo), {
        headers: {"content-type": "application/json"},
        status: 201
      });
  } else if (req.method === 'PUT') {
    const {todoId, value, status}: {
      todoId: string,
      value: string,
      status: TodoStatus,
    } = await req.json();

    const updatedTodo = await prisma.todo.update({where: {id: todoId}, data: {value, status: status}});

    return new Response(
      JSON.stringify(updatedTodo), {
        headers: {"content-type": "application/json"},
        status: 200
      });
  } else if (req.method === 'DELETE') {
    const todoId = (req as NextRequest).nextUrl.searchParams.get('id');

    if (!todoId) {
      return new Response(
        JSON.stringify("Todo Not Found"), {
          headers: {"content-type": "application/json"},
          status: 404
        });
    }
    await prisma.todo.delete({where: {id: todoId}});

    return new Response(
      JSON.stringify("Todo Deleted"), {
        headers: {"content-type": "application/json"},
        status: 201
      });
  } else {
    return new Response(
      JSON.stringify({error: 'Method Not Allowed'}), {
        headers: {"content-type": "application/json"},
        status: 405
      });
  }
}

export {handler as POST, handler as GET, handler as DELETE, handler as PUT};