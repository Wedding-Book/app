'use client'

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import React, {useState} from 'react';
import {TextField} from '@mui/material';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';
import RemoveIcon from '@mui/icons-material/Remove';

type Row = {
  columns: string[]
}

const Guests = () => {

  const [rows, setRows] = useState<Row[]>([
    {columns: ['test11', 'test12', 'test13']},
    {columns: ['test21', 'test22', 'test23']},
    {columns: ['test31', 'test32', 'test33']},
    {columns: ['test41', 'test42', 'test43']},
  ]);

  const handleAddClick = (rid: number) => {
    setRows(
      prevState => [
        ...prevState.slice(0, rid),
        {
          ...prevState[rid],
          columns: [...prevState[rid].columns, ""]
        },
        ...prevState.slice(rid + 1)
      ]
    );
  }

  const handleDeleteClick = (rid: number) => {
    setRows(
      prevState => [
        ...prevState.slice(0, rid),
        ...prevState.slice(rid + 1)
      ]
    );
  }

  const handleColumnDeleteClick = (rid: number, cid: number) => {
    setRows(
      prevState => [
        ...prevState.slice(0, rid),
        {
          ...prevState[rid],
          columns: [...prevState[rid].columns.slice(0, cid), ...prevState[rid].columns.slice(cid + 1)]
        },
        ...prevState.slice(rid + 1)
      ]
    );
  }

  return (
    <Box sx={{flexGrow: 1}}>
      {rows.map((row, rowId) =>
        <Grid container spacing={2} key={rowId} display="flex" alignItems="end">
          <Grid item xs="auto">
            <Typography sx={{fontSize: 24, color: 'secondary.main'}}>{rowId + 1}</Typography>
          </Grid>
          {row.columns.map((column, columnId) =>
            <Grid item key={column + columnId + rowId} xs={2} display="flex" alignItems="end">
              <TextField id="planName" color="secondary" variant="outlined"
                         style={{marginTop: '16px', width: '100%'}}
                         size="small"
                         value={column}
                         required
                         type="text" label="Nazwa wydarzenia"/>
              <Grid item xs="auto">
                <IconButton aria-label="delete" onClick={() => handleColumnDeleteClick(rowId, columnId)} color="error">
                  <RemoveIcon/>
                </IconButton>
              </Grid>
            </Grid>)}
          <Grid item xs="auto">
            <Button variant="contained" endIcon={<AddIcon/>} onClick={() => handleAddClick(rowId)} color="secondary">Dodaj
              kolumnę</Button>
          </Grid>
          <Grid item xs="auto">
            <Button variant="contained" endIcon={<ClearIcon/>} onClick={() => handleDeleteClick(rowId)} color="error">Usuń
              wiersz</Button>
          </Grid>
        </Grid>)}
    </Box>);
}

export default Guests;
