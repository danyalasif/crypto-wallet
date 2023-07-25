import { create, StateCreator } from "zustand";

export interface UserSlice {
  data: string;
  publicWalletAddress: string;
  setData: (val: string) => void;
}

export const createUserSlice: StateCreator<UserSlice> = (set) => ({
  data: "Test",
  publicWalletAddress: "",

  setData: (val) => set(() => ({ data: val })),
});
