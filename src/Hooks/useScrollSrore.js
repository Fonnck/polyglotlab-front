import { create } from "zustand";

export const useScrollStore = create((set) => ({
  wannaLogIn: false,
  setWannaLogIn: (value) => set({ wannaLogIn: value }),
  sectionRef: null,
  setSectionRef: (ref) => set({ sectionRef: ref }),
}));
