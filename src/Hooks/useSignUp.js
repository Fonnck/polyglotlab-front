import { create } from "zustand";

export const useSignInStore = create((set) => ({
  itsboy: true,
  setItsBoy: (value) => set({ itsboy: value }),
  english: true,
  setEnglish: (value) => set({ english: value }),
}));
