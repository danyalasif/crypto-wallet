import { create } from "zustand";
import { createUserSlice, UserSlice } from "./userSlice";
import { createAppDataSlice, AppDataSlice } from "./dataSlice";
import { createJSONStorage, persist } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useStore = create<UserSlice>()(
  persist(
    (...a) => ({
      ...createUserSlice(...a),
    }),
    {
      name: "crypto-wallet-store",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
