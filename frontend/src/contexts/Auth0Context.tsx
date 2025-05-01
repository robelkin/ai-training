import { createContext } from "react";

import { Auth0ContextType } from "../types/auth";

const AuthContext = createContext<Auth0ContextType | null>(null);

export default AuthContext;
