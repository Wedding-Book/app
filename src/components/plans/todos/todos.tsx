'use client'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {TextField} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import ClearIcon from '@mui/icons-material/Clear';
import React, {useEffect, useState} from 'react';
import CheckIcon from '@mui/icons-material/Check';
import Loading from '@/components/loading/loading';

type Todo = {
  id?: string,
  value: string,
  status: TodoStatus
}

enum TodoStatus {
  DONE = 'DONE', TODO = 'TODO'
}

const Todos = ({initTodos, planId}: { initTodos: Todo[], planId }) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [tmpTodoValue, setTmpTodoValue] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    setTodos(initTodos);
    setLoading(false);
  }, [initTodos]);

  const onChangeValue = (newValue: string) => {
    setTmpTodoValue(newValue);
  }

  const onBlurValue = async (rowId: number) => {
    await fetch(`/api/plan/todo`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({todoId: todos[rowId].id, value: tmpTodoValue, status: TodoStatus.TODO})
    }).then((res) => {
      return res.json();
    })
      .then((data) => {
        setTodos(
          prevState => [
            ...prevState.slice(0, rowId),
            {
              ...prevState[rowId],
              value: data.value,
              status: data.status
            },
            ...prevState.slice(rowId + 1)
          ]
        );
        setTmpTodoValue("");
      });
  }

  const handleDone = async (rowId: number) => {
    await fetch(`/api/plan/todo`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({todoId: todos[rowId].id, value: todos[rowId].value, status: TodoStatus.DONE})
    }).then((res) => {
      return res.json();
    })
      .then((data) => {
        setTodos(
          prevState => [
            ...prevState.slice(0, rowId),
            {
              ...prevState[rowId],
              value: data.value,
              status: TodoStatus.DONE
            },
            ...prevState.slice(rowId + 1)
          ]
        );
        setTmpTodoValue("");
      });
  }

  const handleDeleteTodo = async (rowId: number) => {
    await fetch(`/api/plan/todo?id=${todos[rowId].id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => {
        setTodos(
          prevState => [
            ...prevState.slice(0, rowId),
            ...prevState.slice(rowId + 1)
          ]
        );
      }
    );
  }

  const handleAddRow = async () => {
    await fetch('/api/plan/todo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({planId: planId})
    }).then((res) => {
      return res.json();
    })
      .then((data) => {
        setTodos(
          prevState => [
            ...prevState.slice(0),
            {
              id: data.id,
              status: TodoStatus.TODO,
              value: ""
            }
          ]
        );
      });
  }

  if (loading) {
    return <Loading/>
  }

  return (
    <Box sx={{flexGrow: 1, margin: '12px'}}>
      <Typography sx={{fontSize: 28, color: 'secondary.main'}}>Lista zadań do zrobienia</Typography>

      <Box sx={{display: 'flex', margin: '12px', flexDirection: 'row'}}>
        <Box sx={{flexGrow: 1}}>
          <Typography sx={{fontSize: 24, color: 'primary.main'}}>Do zrobienia</Typography>
          {todos.map((todo, rowId) =>
              todo.status === TodoStatus.TODO && <Box key={"todo" + todo.id + todo.value} sx={{display: 'flex', flexDirection: 'row', alignItems: 'end'}}>
                      <TextField  id="planName" color="secondary" variant="outlined"
                                 style={{marginTop: '16px', width: '75%'}}
                                 size="small"
                                 onChange={(event) => onChangeValue(event.target.value)}
                                 onBlur={(event) => onBlurValue(rowId)}
                                 defaultValue={todo.value}
                                 required
                                 type="text" label="Do zrobienia"/>
                      <IconButton aria-label="delete" onClick={() => handleDone(rowId)} color="secondary">
                          <CheckIcon/>
                      </IconButton>
                      <IconButton aria-label="delete" onClick={() => handleDeleteTodo(rowId)} color="error">
                          <ClearIcon/>
                      </IconButton>
                  </Box>
          )
          }
        </Box>
        <Box sx={{flexGrow: 1}}>
          <Typography sx={{fontSize: 24, color: 'primary.main'}}>Zrobione</Typography>
          {todos.map((todo, rowId) =>
              todo.status === TodoStatus.DONE && <Box key={"done" + todo.id + todo.value} sx={{display: 'flex', flexDirection: 'row', alignItems: 'end'}}>
                      <TextField id="planName" color="secondary" variant="outlined"
                                 style={{marginTop: '16px', width: '75%'}}
                                 size="small"
                                 defaultValue={todo.value}
                                 disabled={true}
                                 type="text" label="Zrobione"/>
                  </Box>
          )
          }
        </Box>
      </Box>
      <Button sx={{marginTop: '12px', marginRight: '12px'}} variant="contained" onClick={() => handleAddRow()}
              color="primary">Dodaj zadanie</Button>
    </Box>
  );

}

export default Todos;