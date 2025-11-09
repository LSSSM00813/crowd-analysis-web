import { createContext, useContext, useState, type ReactNode } from "react";

type AuthContextType = {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
};

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<AuthProviderProps> = (props) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    setIsAuthenticated(true);
    // TODO Cookieにログイン情報を保存？
    // 保存形式は？
    // localStorage.setItem("authToken");
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context: AuthContextType | undefined = useContext(AuthContext);
  if (!context) throw new Error("useAuthはAuthProviderの内で使用してください");
  return context;
};
