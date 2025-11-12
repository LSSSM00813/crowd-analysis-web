import { useContext } from "react";
import { AuthContext, type AuthContextType } from "../contexts/AuthContext";

export const useAuth = () => {
    const context: AuthContextType | undefined = useContext(AuthContext);
    if (!context) throw new Error("useAuthはAuthProviderの内で使用してください");
    return context;
};