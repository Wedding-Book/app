'use client'
import {CSSObject, styled, Theme, useTheme} from '@mui/material/styles';
import MuiAppBar, {AppBarProps as MuiAppBarProps} from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import {Divider, IconButton, Typography} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import {useState} from 'react';
import UserNav from './userNav';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import {usePathname} from 'next/navigation';
import ReplyIcon from '@mui/icons-material/Reply';
import InfoIcon from '@mui/icons-material/Info';
import AlarmOnIcon from '@mui/icons-material/AlarmOn';
import {Session} from 'next-auth';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import FoodBankIcon from '@mui/icons-material/FoodBank';
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import LuggageIcon from '@mui/icons-material/Luggage';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({theme}) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({theme, open}) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {shouldForwardProp: (prop) => prop !== 'open'})(
  ({theme, open}) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

type Props = {
  children: any,
  userImage?: string,
  session: Session | null,
}

const Navigation = ({session, children, userImage}: Props) => {
  const theme = useTheme();
  const [open, setOpen] = useState<boolean>(false);
  const pathname = usePathname()
  let plansNavigation: any[] = [];

  const createPath = (href: string) => {
    const regexp = /\/plans\/\w+\b/;
    const match = pathname.match(regexp);
    if (match) {
      return match[0] + href;
    }
    return pathname + href;
  }

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  if (!session) {
    return <>{children}</>
  }

  if (pathname.includes("/plans/")) {
    plansNavigation = [
      {icon: <InfoIcon/>, text: 'Szczegóły', path: createPath('/details')},
      {icon: <FoodBankIcon/>, text: 'Sala weselna', path: createPath('/halls')},
      {icon: <TipsAndUpdatesIcon/>, text: 'Inspiracje', path: createPath('/inspirations')},
      {icon: <OtherHousesIcon/>, text: 'Pozostałe szczegóły', path: createPath('/other')},
      {icon: <FormatListBulletedIcon/>, text: 'Do zrobienia', path: createPath('/todos')},
      {icon: <PeopleAltIcon/>, text: 'Goście', path: createPath('/guests')},
      {icon: <CardGiftcardIcon/>, text: 'Prezenty dla gości', path: createPath('/gifts')},
      {icon: <LuggageIcon/>, text: 'Podróż poślubna', path: createPath('/trips')},
      {icon: <AttachMoneyIcon/>, text: 'Kosztorys', path: createPath('/costs')},
      {icon: <AlarmOnIcon/>, text: 'Licznik czasu', path: createPath('/timer')},
      {icon: <ReplyIcon/>, text: 'Udostępnij', path: createPath('/share')}
    ];
  }

  const navigation = [{icon: <CalendarMonthIcon/>, text: 'Plany', path: '/plans'}]

  return (
    <Box sx={{display: 'flex'}}>
      <CssBaseline/>
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && {display: 'none'}),
            }}
          >
            <MenuIcon/>
          </IconButton>
          <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
            WeddingBook
          </Typography>
          <UserNav userImage={userImage}/>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon/> : <ChevronLeftIcon/>}
          </IconButton>
        </DrawerHeader>
        <Divider/>
        <List>
          {navigation.map(nav => (
            <ListItem key={nav.text} disablePadding sx={{display: 'block'}}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
                href={nav.path}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {nav.icon}
                </ListItemIcon>
                <ListItemText primary={nav.text} sx={{opacity: open ? 1 : 0}}/>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider/>
        <List>
          {plansNavigation.map(nav => (
            <ListItem key={nav.text} disablePadding sx={{display: 'block'}}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
                href={nav.path}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {nav.icon}
                </ListItemIcon>
                <ListItemText primary={nav.text} sx={{opacity: open ? 1 : 0}}/>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{flexGrow: 1, p: 3}}>
        <DrawerHeader/>
        {children}
      </Box>
    </Box>
  );
}

export default Navigation;