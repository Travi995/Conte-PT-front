import { tpStore } from "./store"


type tpDataLogin = {
    email: string
    password: string
}


type tpDataRegister ={
    email: string
    nameStore:string
    password: string
    store:tpStore
}



export type {
    tpDataLogin,
    tpDataRegister
}