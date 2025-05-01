import { createContext } from "react";

import { JWTContextType } from "../types/auth";

const AuthContext = createContext<JWTContextType | null>(null);

export default AuthContext;
