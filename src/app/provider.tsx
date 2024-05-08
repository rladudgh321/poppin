'use client'

import { SessionProvider } from "next-auth/react";
import { RecoilRoot } from 'recoil';

interface NextProviderProps {
  children: React.ReactNode;
}

export default function NextProvider({children}: NextProviderProps) {
  const { session } = NextProviderProps;
  return (
    <RecoilRoot>
      <SessionProvider session={session}>
      {children}
      </SessionProvider>
    </RecoilRoot>
  );
}