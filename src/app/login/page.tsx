'use client';
import { signIn, useSession } from 'next-auth/react';
import Image from 'next/image';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import GoogleIcon from '../../../public/googleicon.png';

const LoginPage = () => {
  const { status } = useSession();
  const router = useRouter();

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (status === 'authenticated') {
    router.push('/');
  }

  return (
    <div className="p-4 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex items-center justify-center">
      <div className=" h-full shadow-2xl rounded-md flex flex-col md:flex-row md:h-[70%] md:w-full lg:w-[60%] 2xl:w-1/2">
        <div className="relative h-1/3 w-full md:h-full md:w-1/2"></div>

        <div className="p-10 flex flex-col gap-8 md:w-1/2">
          <h1 className="font-bold text-xl xl:text-3xl">Welcome</h1>
          <p>Log into your account or create a new one using social buttons</p>
          <div className="flex items-center gap-4">
            <button
              className="flex gap-4 px-4 ring-1 ring-orange-100 rounded-md"
              onClick={() => signIn('google')}
            >
              <Image src={GoogleIcon} width={20} height={20} alt="googleIcon" />
              <span>Sign in with Google</span>
            </button>
          </div>

          <p className="text-sm">
            Have a problem?
            <Link className="underline" href="/">
              {' '}
              Contact us
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
