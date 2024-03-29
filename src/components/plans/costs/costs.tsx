'use client'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import {TextField} from '@mui/material';
import Button from '@mui/material/Button';
import ClearIcon from '@mui/icons-material/Clear';
import React, {useEffect, useState} from 'react';
import Loading from '@/components/loading/loading';

type CostModel = {
  id?: string,
  name: string,
  price: number,
  quantity: number,
}

type CostsProps = {
  planId: string
}
const Costs = ({planId}: CostsProps) => {
  const [costs, setCosts] = useState<CostModel[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [tmpName, setTmpName] = useState<string>("");
  const [tmpPrice, setTmpPrice] = useState<number>(0);
  const [tmpQuantity, setTmpQuantity] = useState<number>(1);
  const [currentPrice, setCurrentPrice] = useState<number>(0);

  useEffect(() => {
    setLoading(true);
    getCosts(planId);
  }, []);

  useEffect(() => {
    setCurrentPrice(calculateGuests())
  }, [costs]);

  const getCosts = async (planId: string) => {
    await fetch(`/api/plan/costs?planId=${planId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    }).then((res) => {
      return res.json();
    }).then(initCosts => {
      setCosts(initCosts);
      setLoading(false);
    })
  }

  const handleDeleteClick = async (rid: number) => {
    await fetch(`/api/plan/costs?id=${costs[rid].id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => {
        setCosts(
          prevState => [
            ...prevState.slice(0, rid),
            ...prevState.slice(rid + 1)
          ]
        );
      }
    );
  }

  const handleAddRow = async () => {
    await fetch('/api/plan/costs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({planId: planId})
    }).then((res) => {
      return res.json();
    })
      .then((data) => {
        setCosts(
          prevState => [
            ...prevState.slice(0),
            {id: data.id, name: data.name, price: data.price, quantity: data.quantity}
          ]
        );
      })
  }

  const onBlurName = async (rowIndex: number) => {
    await fetch(`/api/plan/costs`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({costId: costs[rowIndex].id, name: tmpName, price: costs[rowIndex].price, quantity: costs[rowIndex].quantity})
    }).then((res) => {
      return res.json();
    })
      .then((data) => {
        setCosts(
          prevState => [
            ...prevState.slice(0, rowIndex),
            {
              ...prevState[rowIndex],
              name: data.name
            },
            ...prevState.slice(rowIndex + 1)
          ]
        );
      });
  }

  const onBlurPrice = async (rowIndex: number) => {
    await fetch(`/api/plan/costs`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({costId: costs[rowIndex].id, name: costs[rowIndex].name, price: tmpPrice, quantity: costs[rowIndex].quantity})
    }).then((res) => {
      return res.json();
    })
      .then((data) => {
        setCosts(
          prevState => [
            ...prevState.slice(0, rowIndex),
            {
              ...prevState[rowIndex],
              price: data.price
            },
            ...prevState.slice(rowIndex + 1)
          ]
        );
      });
  }

  const onBlurQuantity = async (rowIndex: number) => {
    if (costs[rowIndex].id){
      await fetch(`/api/plan/costs`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({costId: costs[rowIndex].id, name: costs[rowIndex].name, price: costs[rowIndex].price, quantity: tmpQuantity})
      }).then((res) => {
        return res.json();
      })
        .then((data) => {
          setCosts(
            prevState => [
              ...prevState.slice(0, rowIndex),
              {
                ...prevState[rowIndex],
                quantity: data.quantity
              },
              ...prevState.slice(rowIndex + 1)
            ]
          );
        });
    } else {
      setCosts(
        prevState => [
          ...prevState.slice(0, rowIndex),
          {
            ...prevState[rowIndex],
            quantity: tmpQuantity
          },
          ...prevState.slice(rowIndex + 1)
        ]
      );
    }
  }

  const calculateGuests = () => {
    return costs.reduce((result, current) => result + current.price * current.quantity, 0);
  }

  if (loading) {
    return <Loading/>
  }

  return (
    <Box sx={{flexGrow: 1, margin: '12px'}}>
      <Typography sx={{fontSize: 28, color: 'secondary.main'}}>Kosztorys: ({currentPrice})</Typography>
      {costs.map((row, rowId) =>
        <Grid container spacing={2} key={row.name + rowId} display="flex" alignItems="end">
          <Grid item xs="auto">
            <Typography style={{fontSize: '24px', color: 'secondary.main'}}>{rowId + 1}</Typography>
          </Grid>
          <Grid item xs="auto" display="flex" alignItems="end">
            <TextField id="costName" color="secondary" variant="outlined"
                       style={{marginTop: '16px', width: '100%'}}
                       size="small"
                       disabled={!row.id}
                       onChange={(event) => setTmpName(event.target.value)}
                       onBlur={(event) => onBlurName(rowId)}
                       defaultValue={row.name}
                       required
                       type="text" label="Koszt"/>
          </Grid>
          <Grid item xs="auto" display="flex" alignItems="end">
            <TextField id="costPrice" color="secondary" variant="outlined"
                       style={{marginTop: '16px', width: '100%'}}
                       disabled={!row.id}
                       size="small"
                       onChange={(event) => setTmpPrice(+event.target.value)}
                       onBlur={(event) => onBlurPrice(rowId)}
                       defaultValue={row.price}
                       required
                       type="number" label="Wartość"/>
          </Grid>
          <Grid item xs="auto" display="flex" alignItems="end">
            <TextField id="costQuantity" color="secondary" variant="outlined"
                       style={{marginTop: '16px', width: '100%'}}
                       size="small"
                       onChange={(event) => setTmpQuantity(+event.target.value)}
                       onBlur={(event) => onBlurQuantity(rowId)}
                       defaultValue={row.quantity}
                       required
                       type="number" label="Liczność"/>
          </Grid>
          {!!row.id && <Grid item xs="auto">
            <Button variant="contained" endIcon={<ClearIcon/>} onClick={() => handleDeleteClick(rowId)} color="error">Usuń
              wiersz</Button>
          </Grid>}
        </Grid>)
      }
      <Button sx={{marginTop: '12px', marginRight: '12px'}} variant="contained" onClick={() => handleAddRow()}
              color="primary">Dodaj wiersz</Button>
    </Box>
  );
}

export default Costs;