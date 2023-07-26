import { create } from "zustand";
import { createUserSlice, UserSlice } from "./userSlice";
import { createAppDataSlice, AppDataSlice } from "./dataSlice";
import { createJSONStorage, persist } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

type MainSlice = UserSlice & AppDataSlice;

export const useZustandStore = create<MainSlice>()(
  persist(
    (...a) => ({
      ...createUserSlice(...a),
      ...createAppDataSlice(...a),
    }),
    {
      name: "crypto-wallet-store",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
