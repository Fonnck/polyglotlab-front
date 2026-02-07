import { create } from "zustand";

export const useScrollStore = create((set) => ({
  sectionRef: null,
  setSectionRef: (ref) => set({ sectionRef: ref }),
}));
