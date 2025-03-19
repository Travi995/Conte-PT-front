
export type tpStore = {
    idStore:number
    nameStore:string
    addressStore:string
    phoneStore:string
    emailStore:string
    products:tpProducts[]
}

export type tpProducts = {
    id:number
    codigo:number
    name:string
    price:number
    stock:number
    description:string
    create:Date
}