import { createContext, useState, useContext, useEffect } from "react";
import { registerRequest, loginRequest } from "../api/auth";

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [error, setError] = useState([])

  const signup = async (user) => {
    try {
      const res = await registerRequest(user);
    console.log(res.data);
    setUser(res.data)
    setIsAuthenticated(true)
    } catch (error) {
      if (Array.isArray(error.response.data)) {
        return setError(error.response.data)
      }
      setError([error.response.data.message])
    }
  };

  const signin = async (user) => {
    try {
      const res = await loginRequest(user);
      console.log(res)
    } catch (error) {
      setError(error.response.data)
    }
  }

  useEffect(() => {
    if (error.length > 0) {
      const timer = setTimeout(() => {
        setError([])
      }, 5000);
      return () => clearTimeout(timer)
    }
  }, [error])

  return( 
  <AuthContext.Provider value={{signup, signin, user, isAuthenticated, error}}>
    {children}
  </AuthContext.Provider>
  )
};
