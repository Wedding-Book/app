'use client'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {useRouter} from 'next/navigation';

type Props = {
  id: string;
  name: string,
  description: string,
}

const PlanCard = ({id, name, description}: Props) => {
  const router = useRouter();
  const hadnleCardClick = () => {
    router.push(`/plans/${id}`)
  }

  return  <Card sx={{ width: 275, margin: 4, height: 150, color:'primary.main', ':hover': {backgroundColor: 'primary.light', cursor: 'pointer', color:'primary.contrastText'} }} onClick={hadnleCardClick}>
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