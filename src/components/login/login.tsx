'use client'
import {signIn, signOut, useSession} from 'next-auth/react';
import Loading from '@/components/loading/loading';
import {Button, Divider, TextField} from '@mui/material';
import {useEffect, useState} from 'react';
import GoogleLoginButton from '@/components/login/google/googleLoginButton';
import validateEmail from '@/util/emailValidator';
import {useSearchParams} from 'next/navigation';

export default function Login() {
  const {data: session} = useSession()
  const searchParams = useSearchParams();
  const [email, setEmail] = useState<string | undefined>();
  const [emailValidation, setEmailValidation] = useState<string | undefined>();
  const [password, setPassword] = useState<string | undefined>();
  const [incorrectPassword, setIncorrectPassword] = useState<boolean>(false);

  useEffect(() => {
    const error = searchParams.get('error');
    if (!!error) {
      setEmailValidation("Niepoprawne dane logowania");
      return;
    }
    setEmailValidation(undefined);
  }, [searchParams]);

  const onEmailChange = (enteredEmail: string) => {
    if (!enteredEmail) {
      setEmailValidation("Niepoprawny email");
      setEmail(undefined);
      return;
    }
    setEmailValidation(undefined);
    setEmail(enteredEmail);
  }

  const onPasswordChange = (enteredPassword: string) => {
    if (!enteredPassword) {
      setIncorrectPassword(true);
      setPassword(undefined);
      return;
    }
    setIncorrectPassword(false);
    setPassword(enteredPassword);
  }

  const authorize = async () => {
    if (!email || !validateEmail(email ?? "")) {
      setEmailValidation("Niepoprawny email");
      return;
    }
    if (!password) {
      setIncorrectPassword(true);
      return;
    }
    await signIn('credentials', {email, password});
  }

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
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <div style={{display: 'flex', flexDirection: 'column', width: '400px', margin: '100px 16px 0 16px'}}>
        <GoogleLoginButton/>
        <Divider orientation="horizontal" flexItem style={{marginBottom: '16px'}}/>
        <TextField id="email" color="secondary" size="small" variant="outlined" style={{marginBottom: '16px'}}
                   required error={!!emailValidation} helperText={emailValidation}
                   onChange={(event) => onEmailChange(event.target.value)}
                   onInput={(event) => onEmailChange(event.target.value)}
                   type="email" label="Email" autoComplete="email"/>
        <TextField id="password" variant="outlined" color="secondary" size="small" style={{marginBottom: '16px'}}
                   required error={incorrectPassword} helperText={incorrectPassword ? "Niepoprawne hasło" : null}
                   onChange={(event) => onPasswordChange(event.target.value)}
                   onInput={(event) => onPasswordChange(event.target.value)}
                   type="password" label="Hasło" autoComplete="current-password"/>
        <Button
          color="secondary"
          variant="contained"
          onClick={() => authorize()}
        >
          Zaloguj
        </Button>

      </div>
    </div>
  );
}