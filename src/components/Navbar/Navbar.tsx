import { Button } from "primereact/button"
import { getFromLocal } from "../../helpers/saveToLocal"
import { useContext, useEffect, useState } from "react"
import { GlobalContext } from "../../context/globalContext"
import { tpStore } from "../../types/store"


const Navbar = ()=>{
    const data =  JSON.parse((getFromLocal('users') as string) ?? '[]')
    const {dataUser,setShowModal} = useContext(GlobalContext)
    const [itemStore,setItemsStore] = useState<tpStore>({
        idStore:0,
        nameStore:'',
        addressStore:'',
        phoneStore:'',
        emailStore:'',
        products:[]
    })

    useEffect(()=>{
        setItemsStore({
            //@ts-ignore
        ...data?.find(item=>item.idUser === dataUser.idUser)??itemStore
        })
    },[])

    return <nav className="w-full flex justify-between items-center border  p-1 mt-1 shadow">
        <h1 className="text-2xl font-bold">{itemStore.nameStore}</h1>
        <ul className="list-none items-center flex gap-4   mx-2">
            <li className="font-medium  text-blue-950 p-3 rounded hover:bg-blue-500 hover:text-white hover:cursor-pointer tranisition-all duration-200 ">Show Products</li>
            <li className=""><Button onClick={()=>setShowModal(true)} label="Add Product" className="hover:cursor-pointer hover:bg-blue-600 transition-all duration-200" outlined></Button></li>
            <li className=""><Button label="Suppport" className="hover:cursor-pointer hover:bg-blue-600 transition-all duration-200" outlined></Button></li>
        </ul>
    </nav>
}

export default Navbar