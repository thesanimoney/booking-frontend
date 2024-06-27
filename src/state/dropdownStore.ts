import {create} from "zustand";

interface DropdownState {
    bedroom: string;
    setBedroom: (value: string) => void;
    bathroom: string;
    setBathroom: (value: string) => void;
}

export const useDropdownStore = create<DropdownState>((set) => ({
    bedroom: '',
    setBedroom: (value: string) => set({ bedroom: value }),
    bathroom: '',
    setBathroom: (value: string) => set({ bathroom: value }),
}));