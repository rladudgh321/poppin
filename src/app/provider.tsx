'use client'

import { RecoilRoot } from 'recoil';

interface NextProviderProps {
  children: React.ReactNode
}

export default function NextProvider({children}: NextProviderProps) {
  return (
    <RecoilRoot>
      {children}
    </RecoilRoot>
  );
}