import { create, StateCreator } from "zustand";

interface AppDataState {
  [key: string]: any;
}
export interface AppDataActions {
  setGlobalState: (data: AppDataState) => void;
  clearGlobalState: () => void;
}

export type AppDataSlice = AppDataState & AppDataActions;

export const createAppDataSlice: StateCreator<AppDataSlice> = (set) => ({
  setGlobalState: (data) => set((state) => ({ ...state, ...data })),
  clearGlobalState: () => set({}),
});
