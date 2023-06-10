import { create, StateCreator } from "zustand";

export interface DataSlice {
  data: string;
  setData: (val: string) => void;
}

export const createUserSlice: StateCreator<DataSlice> = (set) => ({
  data: "Test",

  setData: (val) => set(() => ({ data: val })),
});
