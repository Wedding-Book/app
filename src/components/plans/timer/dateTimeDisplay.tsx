'use client'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const DateTimeDisplay = ({ value, type }: {value: number, type: string}) => {
  return (
    <Box sx={{margin: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <Typography sx={{margin: 2, fontSize: '32px', lineHeight: '42px', color: 'primary.main', fontWeight: 'bold'}}>{value}</Typography>
      <Typography sx={{textTransform: 'uppercase', fontSize: '28px', lineHeight: '34px', color: 'secondary.main', fontWeight: 'bold'}}>{type}</Typography>
    </Box>
  );
};
export default DateTimeDisplay;