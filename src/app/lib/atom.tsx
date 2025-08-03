'use client'

import { atom, RecoilRoot } from "recoil";

export const loadingState = atom({
  key: "loadingState",
  default: true,
});

export default function RecoidContextProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return <RecoilRoot>
    {children}
  </RecoilRoot>
}