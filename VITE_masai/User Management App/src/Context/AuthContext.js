import { createContext, useState,} from "react";

export  const AuthContext = createContext()

export  const  AuthContextProvider=({children})=>{
    const [isLogged,setIsLogged] = useState(false)
  const [data ,setData] = useState({
    email:'',
    password:''
  })

const login=(userData,navigate)=>{
    if(userData.email==='test@gmail.com'&&userData.password==='1234'){
       setIsLogged(true)
       navigate('/dashboard')
       return true
    }else{
        alert("ID or password is wrong , Please Check")
        return false
    }
}

const logout = ()=>{
    setIsLogged(false)
    navigate('/')
}


    return (
        <AuthContext.Provider value={{data,setData}}>
            {children}
        </AuthContext.Provider>
    )
}