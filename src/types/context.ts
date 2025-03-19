
type tpGlobalContext = {
    dataUser:tpDataUserContext
    setDataUser:(arg:tpDataUserContext)=>void

    showModal:boolean
    setShowModal :(arg:boolean)=>void
}


type tpDataUserContext = {
    idUser:number
}

export type {
    tpGlobalContext,
    tpDataUserContext
}