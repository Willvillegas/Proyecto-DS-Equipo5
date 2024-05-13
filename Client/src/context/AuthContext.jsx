import { createContext, useContext, useEffect, useReducer } from 'react'
import AuthReducer from './AuthReducer';

const INITIAL_STATE = {
    currentUser: JSON.parse(localStorage.getItem('login')) || null
}

export function useAuthContext() {
  return useContext(AuthContext);
}

export const AuthContext = createContext(INITIAL_STATE)

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE)

  useEffect(() => {
    // eslint-disable-next-line no-undef
    localStorage.setItem('login', JSON.stringify(state.currentUser))
  }, [state.currentUser])

  const LogOut = () => {
    dispatch({ type: 'LOGOUT', payload: null })
  }

  const GetUserID = ()=>{
    return state.currentUser?.user?.id;
  }
  const getUserType = () => {
    return state.currentUser?.user?.tipo | 0
  }
  const getLoginStatus = () => {
    return state.currentUser?.loggedIn || false
  }
  const getUser = () => {
    return state.currentUser?.user || {}
  }
  const getUserEmail = () => {
    return state.currentUser?.user?.correo || ""
  }
  return (
    <AuthContext.Provider value={{ LogOut, GetUserID, dispatch, getUserType, getLoginStatus, getUser, getUserEmail, currentUser: state.currentUser }}>
      {children}
    </AuthContext.Provider>
  )
}