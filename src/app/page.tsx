'use client'
import {Button} from '@mui/material';

export default function Home() {
  return (
    <main className='font-sans flex flex-col h-screen'>
      <Button variant="contained" onClick={() => console.log("xddd")}>Test</Button>
      <Button variant="outlined" onClick={() => console.log("xddd")}>Test</Button>
      <Button variant="contained" color="secondary" onClick={() => console.log("xddd")}>Test</Button>
      <Button variant="outlined" color="secondary" onClick={() => console.log("xddd")}>Test</Button>
    </main>
  );
}
