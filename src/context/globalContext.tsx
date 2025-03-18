import { createContext, FC, ReactNode, useState } from "react"
import { tpDataUserContext, tpGlobalContext } from "../types/context"

const defaultValues:tpGlobalContext = {
    dataUser:{
        idUser:0
    },

    setDataUser:(arg)=>{arg}
}

export const GlobalContext = createContext(defaultValues)



export const GlobalContextProvider:FC<{children:ReactNode}>=({children})=>{
    const [dataUser,setDataUser] = useState<tpDataUserContext>(defaultValues.dataUser)


    return <GlobalContext.Provider value={{dataUser,setDataUser}}>
        {children}
    </GlobalContext.Provider>
}
