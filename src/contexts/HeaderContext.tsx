import { createContext } from "react";

export type HeaderContextType = {
    title: string;
    setTitle: (title: string) => void;
};

export const HeaderContext = createContext<HeaderContextType | undefined>(undefined);