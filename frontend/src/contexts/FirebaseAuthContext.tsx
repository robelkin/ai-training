import { createContext } from "react";

import { FirebaseAuthContextType } from "../types/auth";

const AuthContext = createContext<FirebaseAuthContextType | null>(null);

export default AuthContext;
