import {getServerSession} from 'next-auth';
import {authOptions} from '@/app/api/auth/[...nextauth]/route';
import {redirect} from 'next/navigation';


const serverSessionChecker = async () => {
  const session = await getServerSession(authOptions)
  if (!session){
    redirect('/login')
    return false;
  }
  return true;
}

export default serverSessionChecker;