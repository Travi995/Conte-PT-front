
type tpGlobalContext = {
    dataUser:tpDataUserContext
    setDataUser:(arg:tpDataUserContext)=>void
}


type tpDataUserContext = {
    idUser:number
}

export type {
    tpGlobalContext,
    tpDataUserContext
}