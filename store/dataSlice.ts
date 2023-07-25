import { create, StateCreator } from "zustand";

export interface AppDataSlice {
  data: string;
  setData: (val: string) => void;
}

export const createAppDataSlice: StateCreator<AppDataSlice> = (set) => ({
  data: "Test",

  setData: (val) => set(() => ({ data: val })),
});
