

export const saveToLocal = (key:string,value:string)=>{
    localStorage.setItem(key,value)
}

export const getFromLocal = (key:string)=>{
    return localStorage.getItem(key)
}