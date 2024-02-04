'use client'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

type Props = {
  name: string,
  description: string,
}

const PlanCard = ({name, description}: Props) => {
  const cardClicker = () => {
    console.log('TBD')
  }

  return  <Card sx={{ width: 275, margin: 4, height: 150, color:'primary.main', ':hover': {backgroundColor: 'primary.light', cursor: 'pointer', color:'primary.contrastText'}   }} onClick={cardClicker}>
    <CardContent>
      <Typography sx={{ fontSize: 28 }} gutterBottom>
        {name}
      </Typography>
      <Typography sx={{ fontSize: 18 }}>
        {description}
      </Typography>
    </CardContent>
  </Card>
}

export default PlanCard;