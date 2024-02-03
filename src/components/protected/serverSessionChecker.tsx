import {AuthOptions, getServerSession} from 'next-auth';
import {redirect} from 'next/navigation';
import authOptions from '@/lib/auth/authOptions';

type Props = {
  noSessionPath?: string;
  sessionPath?: string;
}

const serverSessionChecker = async ({noSessionPath, sessionPath}: Props) => {
  const session = await getServerSession(authOptions as AuthOptions)
  if (!session){
    if (!!noSessionPath) {
      redirect(noSessionPath)
    }
    return false;
  }
  if (!!sessionPath) {
    redirect(sessionPath)
  }
  return true;
}

export default serverSessionChecker;