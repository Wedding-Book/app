'use client'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import React, {useEffect, useState} from 'react';
import {TextField} from '@mui/material';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';
import RemoveIcon from '@mui/icons-material/Remove';
import Loading from '@/components/loading/loading';


type InvitationGuest = {
  id?: string,
  guests: Guest[],
  moneyGift?: number,
  otherGift?: string,
}

type Guest = {
  id?: string,
  fullName: string,
}

const Guests = ({initInvitationGuests, planId, giftsEnabled}: { initInvitationGuests: InvitationGuest[], planId: string, giftsEnabled: boolean }) => {
  const [invitationGuests, setInvitationGuests] = useState<InvitationGuest[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [tmpFullName, setTmpFullName] = useState<string>("");
  const [tmpMoneyGift, setTmpMoneyGift] = useState<string>("");
  const [tmpOtherGift, setTmpOtherGift] = useState<string>("");

  useEffect(() => {
    setLoading(true);
    setInvitationGuests(initInvitationGuests);
    setLoading(false);
  }, [initInvitationGuests]);

  const handleAddClick = async (rid: number) => {
    await fetch('/api/plan/invitations/guests', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({invitationId: invitationGuests[rid].id})
    }).then((res) => {
      return res.json();
    })
      .then((data) => {
        setInvitationGuests(
          prevState => [
            ...prevState.slice(0, rid),
            {
              ...prevState[rid],
              guests: [...prevState[rid].guests, {id: data.id, fullName: data.fullName}]
            },
            ...prevState.slice(rid + 1)
          ]
        );
      });
  }

  const handleDeleteClick = async (rid: number) => {
    await fetch(`/api/plan/invitations?id=${invitationGuests[rid].id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => {
          setInvitationGuests(
            prevState => [
              ...prevState.slice(0, rid),
              ...prevState.slice(rid + 1)
            ]
          );
        }
      );
  }

  const handleColumnDeleteClick = async (rid: number, cid: number) => {
    await fetch(`/api/plan/invitations/guests?id=${invitationGuests[rid].guests[cid].id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => {
          setInvitationGuests(
            prevState => [
              ...prevState.slice(0, rid),
              {
                ...prevState[rid],
                guests: [...prevState[rid].guests.slice(0, cid), ...prevState[rid].guests.slice(cid + 1)]
              },
              ...prevState.slice(rid + 1)
            ]
          );
        }
      );

  }

  const handleAddRow = async () => {
    await fetch('/api/plan/invitations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({planId: planId})
    }).then((res) => {
      return res.json();
    })
      .then((data) => {
        setInvitationGuests(
          prevState => [
            ...prevState.slice(0),
            {id: data.id, guests: [{fullName: ""}], moneyGift: 0}
          ]
        );
      })
  }

  const onChangeFullName = (value: string) => {
    setTmpFullName(value);
  }

  const onBlurFullName = async (rowIndex: number, columnIndex: number) => {
    await fetch(`/api/plan/invitations/guests`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({guestId: invitationGuests[rowIndex].guests[columnIndex].id, fullName: tmpFullName})
    }).then((res) => {
      return res.json();
    })
      .then((data) => {
        setInvitationGuests(
          prevState => [
            ...prevState.slice(0, rowIndex),
            {
              ...prevState[rowIndex],
              guests: [...prevState[rowIndex].guests.slice(0, columnIndex), {...prevState[rowIndex].guests[columnIndex], fullName: data.fullName}, ...prevState[rowIndex].guests.slice(columnIndex + 1)]
            },
            ...prevState.slice(rowIndex + 1)
          ]
        );
        setTmpFullName("");
      });
  }

  const onChangeMoneyGift = (value: string) => {
    setTmpMoneyGift(value);
  }

  const onBlurMoneyGift = async (rowIndex: number) => {
    await fetch(`/api/plan/invitations`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({invitationId: invitationGuests[rowIndex].id, moneyGift: +tmpMoneyGift, otherGift: invitationGuests[rowIndex].otherGift})
    }).then((res) => {
      return res.json();
    })
      .then((data) => {
        setInvitationGuests(
          prevState => [
            ...prevState.slice(0, rowIndex),
            {
              ...prevState[rowIndex],
              moneyGift: data.moneyGift
            },
            ...prevState.slice(rowIndex + 1)
          ]
        );
        setTmpMoneyGift("");
      });
  }

  const onChangeOtherGift = (value: string) => {
    setTmpOtherGift(value);
  }

  const onBlurOtherGift = async (rowIndex: number) => {
    await fetch(`/api/plan/invitations`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({invitationId: invitationGuests[rowIndex].id, otherGift: tmpOtherGift, moneyGift: !invitationGuests[rowIndex].moneyGift ? 0 : invitationGuests[rowIndex].moneyGift})
    }).then((res) => {
      return res.json();
    })
      .then((data) => {
        setInvitationGuests(
          prevState => [
            ...prevState.slice(0, rowIndex),
            {
              ...prevState[rowIndex],
              otherGift: data.otherGift
            },
            ...prevState.slice(rowIndex + 1)
          ]
        );
        setTmpOtherGift("");
      });

  }

  const calculateGuests = () => {
    return invitationGuests.reduce((acc, invitation) => acc + invitation.guests.length, 0);
  }

  if (loading) {
    return <Loading/>
  }

  return (
    <Box sx={{flexGrow: 1, margin: '12px'}}>
      <Typography sx={{fontSize: 28, color: 'secondary.main'}}>Lista gości ({calculateGuests()})</Typography>
      {invitationGuests.map((row, rowId) =>
        <Grid container spacing={2} key={rowId} display="flex" alignItems="end">
          <Grid item xs="auto">
            <Typography style={{fontSize: '24px', color: 'secondary.main'}}>{rowId + 1}</Typography>
          </Grid>
          {row.guests.map((column, columnId) =>
            <Grid item key={column.fullName + columnId + rowId} xs="auto" display="flex" alignItems="end">
              <TextField id="planName" color="secondary" variant="outlined"
                         style={{marginTop: '16px', width: '100%'}}
                         size="small"
                         onChange={(event) => onChangeFullName(event.target.value)}
                         onBlur={(event) => onBlurFullName(rowId, columnId)}
                         defaultValue={column.fullName}
                         required
                         type="text" label="Gość"/>
              {row.guests.length > 1 &&
                  <Grid item xs="auto">
                      <IconButton aria-label="delete" onClick={() => handleColumnDeleteClick(rowId, columnId)}
                                  color="error">
                          <RemoveIcon/>
                      </IconButton>
                  </Grid>}
            </Grid>)}
          <Grid item xs="auto">
            <IconButton aria-label="delete" onClick={() => handleAddClick(rowId)} color="secondary">
              <AddIcon/>
            </IconButton>
          </Grid>
          {giftsEnabled && <>
              <Grid item xs={1}>
                  <TextField id={"moneyGift" + rowId} color="secondary" variant="outlined"
                             style={{marginTop: '16px', width: '100%'}}
                             size="small"
                             onChange={(event) => onChangeMoneyGift(event.target.value)}
                             onBlur={(event) => onBlurMoneyGift(rowId)}
                             defaultValue={!row.moneyGift ? "" : row.moneyGift > 0 ? row.moneyGift : ""}
                             type="number" label="Prezent pieniężny"/>
              </Grid>
              <Grid item xs={1}>
                  <TextField id={"otherGift" + rowId} color="secondary" variant="outlined"
                             style={{marginTop: '16px', width: '100%'}}
                             size="small"
                             onChange={(event) => onChangeOtherGift(event.target.value)}
                             onBlur={(event) => onBlurOtherGift(rowId)}
                             defaultValue={row.otherGift ?? ""}
                             type="text" label="Inne prezenty"/>
              </Grid>
          </>}
          <Grid item xs="auto">
            <Button variant="contained" endIcon={<ClearIcon/>} onClick={() => handleDeleteClick(rowId)} color="error">Usuń
              wiersz</Button>
          </Grid>
        </Grid>)
      }
      <Button sx={{marginTop: '12px', marginRight: '12px'}} variant="contained" onClick={() => handleAddRow()}
              color="primary">Dodaj
        wiersz</Button>
    </Box>
  );
}

export default Guests;
