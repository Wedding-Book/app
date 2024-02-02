'use client'
import {signOut, useSession} from 'next-auth/react';
import GoogleLoginButton from '@/app/login/google/googleLoginButton';
import Loading from '@/components/loading/loading';
import {TextField} from '@mui/material';
import {useState} from 'react';

export default function Login() {
  const {data: session} = useSession()
  const [email, setEmail] = useState<string | undefined>();
  const [password, setPassword] = useState<string | undefined>();

  if (session) {
    return (
      <>
        <Loading/>
        Signed in as {session.user.email} <br/>
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      <TextField id="outlined-basic" color="secondary" label="Outlined" variant="outlined"/>
      <GoogleLoginButton/>
    </>
  );
}