'use client'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import {TextField} from '@mui/material';
import React, {useEffect, useState} from 'react';
import Loading from '@/components/loading/loading';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

type Props = {
  planId: string,
  initInspirationLinks: { id: string, url: string }[]
}

const Inspirations = ({planId, initInspirationLinks}: Props) => {
  const [inspirationLink, setInspirationLink] = useState<string>("");
  const [inspirationLinks, setInspirationLinks] = useState<{ id: string, url: string }[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    setInspirationLinks(initInspirationLinks);
    setLoading(false);
  }, [initInspirationLinks]);
  const onInputValueChange = (enteredInputValue: string) => {
    setInspirationLink(enteredInputValue);
  }
  const add = async (event: any) => {
    if (event.key === 'Enter') {
      await fetch('/api/plan/inspirations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({planId: planId, url: inspirationLink})
      }).then(response => response.json())
        .then(data => {
          setInspirationLinks(prevState => [
            ...prevState.slice(0),
            data
          ]);
          setInspirationLink("");
          event.target.value = "";
        });
    }
  }

  const deleteImage = async (imgId: string, index: number) => {
    await fetch(`/api/plan/inspirations?id=${imgId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(response => {
        if (response.status === 200) {
          setInspirationLinks(prevState => [
            ...prevState.slice(0, index),
            ...prevState.slice(index + 1)
          ]);
        }
      });
  }

  if (loading) {
    return <Loading/>
  }

  return <Box sx={{display: 'flex', flexDirection: 'column', marginLeft: 4, marginTop: 2}}>
    <Typography sx={{fontSize: 28, color: 'secondary.main'}}>Inspiracje</Typography>
    <TextField id="inspirationInput" color="secondary" size="small" variant="outlined"
               style={{marginTop: '16px', width: '50%'}}
               onChange={(event) => onInputValueChange(event.target.value)}
               onKeyDown={(event) => add(event)}
               type="text" label="Link do inspiracji"/>
    <ImageList variant="masonry" cols={4} gap={8}>
      {inspirationLinks.map((item, index) => (
        <ImageListItem key={item.id}>
          <img
            srcSet={`${item.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.url}?w=248&fit=crop&auto=format`}
            alt={item.id}
            loading="lazy"
          />
          <ImageListItemBar
            actionIcon={
              <IconButton
                onClick={() => deleteImage(item.id, index)}
                sx={{color: 'primary.light'}}
              >
                <DeleteIcon/>
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  </Box>
}

export default Inspirations;
