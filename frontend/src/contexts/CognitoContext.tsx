import { createContext } from "react";

import { CognitoContextType } from "../types/auth";

const AuthContext = createContext<CognitoContextType | null>(null);

export default AuthContext;
