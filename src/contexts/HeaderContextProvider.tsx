import { useState } from "react";
import { HeaderContext } from "./HeaderContext";

interface HeaderProviderProps {
    children: React.ReactNode;
}

export const HeaderProvider: React.FC<HeaderProviderProps> = (props) => {
    const [title, setTitle] = useState("Header");
    return (
        <HeaderContext.Provider value={{ title, setTitle }}>
            {props.children}
        </HeaderContext.Provider>
    );
}