import { useContext, useEffect, useState } from "react"
import ModalGeneric from "../../components/ModalGeneric/ModalGeneric"
import { GlobalContext } from "../../context/globalContext"
import { tpProducts } from "../../types/store"
import FormAddProduct from "../../components/formAddProduct/formAddProduct"
import { getFromLocal, saveToLocal } from "../../helpers/saveToLocal"
import BoxProduct from "../../components/BoxPorduct/BoxProduct"
import FilterProducts from "../../components/filterProducts/filterProducts"

const ListProducts = ()=>{
    const {showModal,setShowModal,dataUser} = useContext(GlobalContext)
    const [dataProducts,setDataProducts] = useState<tpProducts[]>([])

    const handlerCloseModal = ()=>{
        setShowModal(false)
    }

    const handlerDelete = (id:number)=>{
        const items =  JSON.parse((getFromLocal('users')as string) ?? [])
        
        const updatedItems = dataProducts.filter((item)=>item.id !== id)
        setDataProducts(updatedItems)
        // @ts-ignore
        const item  =  items.find((item:Object )=>item.idUser === dataUser.idUser)
        item.store.products= [...updatedItems]
        saveToLocal('users',JSON.stringify(items))
    }

    useEffect(()=>{
        const items =  JSON.parse((getFromLocal('users')as string) ?? [])
        //@ts-ignore
        const item  =  items.find((item:Object )=>item.idUser === dataUser.idUser)
        if(item){
            setDataProducts(item.store.products)
        }
    },[showModal])


    return <div className="w-full h-full bg-amber-100 flex flex-col">
            <section className="w-full flex justify-center">
                <FilterProducts data={dataProducts} onSearch={(filteredData)=>{setDataProducts(filteredData)}} />
            </section>
            <section className="mt-2">
                {dataProducts.map((item,index)=><BoxProduct key={index} create={item.create} delete={()=>{handlerDelete(item.id)}} name={item.name} price={item.price} stock={item.stock} description={item.description} />)}
            </section>

            <ModalGeneric children={<FormAddProduct/>} isVisible={showModal} onClose={()=>handlerCloseModal()}/>
    </div>
}

export default ListProducts