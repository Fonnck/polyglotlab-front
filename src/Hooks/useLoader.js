import { create } from "zustand";

export const useLoader = create((set) => ({
  loading: true,
  setLoading: (value) => set({ loading: value }),
}));
