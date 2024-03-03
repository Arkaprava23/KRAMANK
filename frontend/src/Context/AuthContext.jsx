import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export default function AuthContextProvider({ children }) {
  const [signupName, setSignupName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [verifyStep, setverifyStep] = useState(0);

  return (
    <AuthContext.Provider value={{ signupName, setSignupName, signupEmail, setSignupEmail,verifyStep,setverifyStep}}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthContext = () => useContext(AuthContext);
