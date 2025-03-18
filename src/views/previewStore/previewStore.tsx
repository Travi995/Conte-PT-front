import { Skeleton } from "primereact/skeleton"
import Navbar from "../../components/Navbar/Navbar"
import { useContext, useEffect, useState } from "react"
import { tpStore } from "../../types/store"
import { GlobalContext } from "../../context/globalContext"
import { getFromLocal } from "../../helpers/saveToLocal"

const PreviewStore = () => {
    const data =  JSON.parse((getFromLocal('users') as string) ?? '[]')
    const [itemStore,setItemsStore] = useState<tpStore>({
        idStore:0,
        nameStore:'',
        addressStore:'',
        phoneStore:'',
        emailStore:'',
        products:[]
    })
    const {dataUser} = useContext(GlobalContext)

    useEffect(()=>{
        setItemsStore({
            //@ts-ignore
        ...data?.find(item=>item.idUser === dataUser.idUser)??itemStore
        })
    },[])


    return <div className="w-full h-full bg-amber-100 flex flex-col  ">
        <Navbar />
        <section className="w-full h-full flex gap-1 ">
            <div className="w-2/4  flex  flex-col justify-center items-center">
                <Skeleton size="14rem"></Skeleton>
                <h3 className="mt-2">Store Name: {itemStore.nameStore}</h3>
            </div>
            <div className="w-2/4  flex pl-4 justify-center flex-col gap-4 ">
                <section className="p-2 w-2/3 rounded bg-slate-50 border-slate-50 border">
                    <span className="">Store Address:{itemStore.addressStore}</span>
                </section>
                <section className="p-2 rounded w-2/3 bg-slate-50 border-slate-50 border">
                    <span>Store Phone:{itemStore.phoneStore}</span>
                </section>
                <section className="p-2 rounded w-2/3 bg-slate-50 border-slate-50 border">
                    <span>Store Email:{itemStore.emailStore}</span>
                </section>
                <section className="p-2 rounded w-2/3 bg-slate-50 border-slate-50 border">
                    <span>Count Products:{itemStore.products.length}</span>
                </section>
            </div>
        </section>
    </div>
}

export default PreviewStore