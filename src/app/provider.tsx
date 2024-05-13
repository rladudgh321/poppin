'use client'

import { getServerSession } from "next-auth";
import SessionProvider from '@/app/shared/SessionProvider';
import { RecoilRoot } from 'recoil';

interface NextProviderProps {
  children: React.ReactNode;
}

export default async  function NextProvider({children}: NextProviderProps) {
  const session = await getServerSession();

  return (
      <SessionProvider session={session}>
        <RecoilRoot>
          {children}
        </RecoilRoot>
      </SessionProvider>
  );
}