import { createContext, FC, ReactNode, useState } from "react"
import { tpDataUserContext, tpGlobalContext } from "../types/context"

const defaultValues:tpGlobalContext = {
    dataUser:{
        idUser:0
    },
    showModal:false,
    
    setDataUser:(arg)=>{arg},
    setShowModal:(arg)=>{arg}
}

export const GlobalContext = createContext(defaultValues)



export const GlobalContextProvider:FC<{children:ReactNode}>=({children})=>{
    const [dataUser,setDataUser] = useState<tpDataUserContext>(defaultValues.dataUser)
    const [showModal,setShowModal] = useState<boolean>(defaultValues.showModal)


    return <GlobalContext.Provider value={{dataUser,setDataUser,showModal,setShowModal}}>
        {children}
    </GlobalContext.Provider>
}
