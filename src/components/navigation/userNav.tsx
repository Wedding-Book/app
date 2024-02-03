import Tooltip from '@mui/material/Tooltip';
import {IconButton, Typography} from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {useState} from 'react';
import Box from '@mui/material/Box';
import {signOut} from 'next-auth/react';
import UserIcon from '@/components/navigation/userIcon';

type Props = {
  userImage?: string;
}

const UserNav = ({userImage}: Props) => {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const logout = () => {
    signOut();
    handleCloseUserMenu();
  };

  return (
    <Box sx={{flexGrow: 0}}>
      <Tooltip title="Ustawienia użytkownika">
        <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
          <UserIcon image={userImage}/>
        </IconButton>
      </Tooltip>
      <Menu
        sx={{mt: '45px'}}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        <MenuItem key='Logout' onClick={logout}>
          <Typography textAlign="center">Wyloguj</Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
}

export default UserNav;
