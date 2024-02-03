import Avatar from '@mui/material/Avatar';
import AccountCircle from '@mui/icons-material/AccountCircle';

type Props = {
  image?: string;
}

const UserIcon = ({image}: Props) => {
  if (!!image) {
    return <Avatar alt="Remy Sharp" src={image}/>
  }
  return <AccountCircle fontSize="large" style={{color: '#F6F7F3'}}/>
}

export default UserIcon;
