import GoogleIcon from '@mui/icons-material/Google';
import {signIn} from 'next-auth/react';
import {Button} from '@mui/material';

const GoogleLoginButton = () => {
  return (
    <Button
      style={{marginBottom:'16px'}}
      variant="contained" startIcon={<GoogleIcon/>}
      onClick={() => signIn("google")}
    >
      Kontynuuj z Google
    </Button>
  );
};

export default GoogleLoginButton;