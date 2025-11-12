import { useContext } from "react"
import { HeaderContext } from "../contexts/HeaderContext"

export const useHeader = () => {
    const context = useContext(HeaderContext);
    if (!context) {
        // HeadrerContextが提供されていない場合のエラーハンドリング
        throw new Error("useHeaderTitle must be used within a HeaderProvider");
    }
    return context;
}