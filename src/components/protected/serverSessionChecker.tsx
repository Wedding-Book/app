import {getServerSession} from 'next-auth';
import {authOptions} from '@/app/api/auth/[...nextauth]/route';
import {redirect} from 'next/navigation';

type Props = {
  noSessionPath?: string;
  sessionPath?: string;
}

const serverSessionChecker = async ({noSessionPath, sessionPath}: Props) => {
  const session = await getServerSession(authOptions)
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