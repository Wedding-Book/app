import GoogleIcon from '@mui/icons-material/Google';
import {signIn} from 'next-auth/react';
import {Button} from '@mui/material';

const GoogleLoginButton = () => {
  return (
    <Button
      variant="contained" startIcon={<GoogleIcon/>}
      onClick={() => signIn("google")}
    >
      Sign in with Google
    </Button>
  );
};

export default GoogleLoginButton;