import { createContext, useState } from "react";
import { useNavigate } from "react-router";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [data, setData] = useState({ email: "", password: "" });
  
  function login(userData, navigate) {
    if (userData.email === "test@gmail.com" && userData.password === "1234") {
      setIsLogged(true);
      if (navigate) {
        navigate("/home");
      }
      return true;
    } else {
      alert("Invalid credentials!");
      return false;
    }
  }

  function logout(navigate) {
    setIsLogged(false);
    if (navigate) {
      navigate("/");
    }
  }

  return (
    <AuthContext.Provider value={{ login, logout, isLogged, setIsLogged, data, setData }}>
      {children}
    </AuthContext.Provider>
  );
};