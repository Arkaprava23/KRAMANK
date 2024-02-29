import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export default function AuthContextProvider({ children }) {
  const [signupName, setSignupName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");

  return (
    <AuthContext.Provider value={{ signupName, setSignupName, signupEmail, setSignupEmail }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthContext = () => useContext(AuthContext);
