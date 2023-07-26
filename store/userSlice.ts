import { create, StateCreator } from "zustand";

export interface UserSlice {
  data: string;
  selectedPublicAddress: string;
  addressList: string[];
  updateAddressList: (val: string) => void;

  setPublicAddress: (val: string) => void;
  setData: (val: string) => void;
  clearUserStore: () => void;
}

const initialState = {
  data: "Test",
  selectedPublicAddress: "",

  addressList: [],
};

export const createUserSlice: StateCreator<UserSlice> = (set) => ({
  ...initialState,
  setData: (val) => set(() => ({ data: val })),
  setPublicAddress: (val) => set(() => ({ selectedPublicAddress: val })),
  //check if address already exists in the address list, if not add it
  updateAddressList: (val) =>
    set((state) => {
      const tempList = [...state.addressList];
      if (!state.addressList.includes(val)) {
        tempList.push(val);
      }

      return {
        addressList: tempList,
        selectedPublicAddress: val,
      };
    }),

  clearUserStore: () => set(() => ({ ...initialState })),
});
