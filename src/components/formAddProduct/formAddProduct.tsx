import { FloatLabel } from "primereact/floatlabel"
import { SyntheticEvent, useContext, useState } from "react"
import { tpProducts } from "../../types/store"
import { InputText } from "primereact/inputtext"
import { InputTextarea } from "primereact/inputtextarea"
import { GlobalContext } from "../../context/globalContext"
import { getFromLocal, saveToLocal } from "../../helpers/saveToLocal"
import { alertSystem } from "../../helpers/alertSystem"

const FormAddProduct = ()=>{

    const {dataUser,setShowModal} = useContext(GlobalContext)

    const [dataProduct,setDataProduct] = useState<tpProducts>({
        id: Math.random(),
        codigo:0,
        name:'',
        price:0,
        stock:0,
        description:'',
        create:new Date()
    })


    const handleChange = (key:keyof tpProducts,value:string)=>{
        setDataProduct({
            ...dataProduct,
            [key]:value
        })
    }

    const handleSubmit = (e:SyntheticEvent)=>{
        e.preventDefault()

        const items =  JSON.parse((getFromLocal('users')as string) ?? [])
        //@ts-ignore
        const item  =  items.find((item:Object )=>item.idUser === dataUser.idUser)

        if(item){
            item.store.products.push(dataProduct)
            saveToLocal('users',JSON.stringify(items))
            alertSystem({type:'success',message:"Successfully saved"})
            setShowModal(false)
        }
    }

    return <form  onSubmit={handleSubmit}>
         <div className=" w-full card flex flex-col justify-content-center mt-6  ">
            <FloatLabel className="w-full">
                <InputText
                    className="w-full border-2 p-2"
                    value={dataProduct.name}
                    required
                    onChange={(e) => handleChange('name', e.target.value)} />
                <label className="font-poppins mx-2 text-md" >Name of Product</label>
            </FloatLabel>
            
        </div>

        <div className="w-full card flex justify-content-center mt-6">
            <FloatLabel className="w-full">
                <InputTextarea
                required
                    className="w-full border-2 text-Secondary indent-2 px-2 text-sm resize-none"
                    value={dataProduct.description}
                    onChange={(e) => handleChange("description", e.target.value)}
                    rows={4} cols={22} />
                <label className="font-poppins mx-2 text-md">Description of Product</label>
            </FloatLabel>
        </div>

        <div className=" w-full card flex flex-col justify-content-center mt-6  ">
            <FloatLabel className="w-full">
                <InputText
                required
                    className="w-full border-2 p-2"
                    value={String(dataProduct.price)}
                    onChange={(e) => handleChange('name', e.target.value)} />
                <label className="font-poppins mx-2 text-md" >Price of Product</label>
            </FloatLabel>
            
        </div>

        <div className=" w-full card flex flex-col justify-content-center mt-6  ">
            <FloatLabel className="w-full">
                <InputText
                  keyfilter={'num'}
                  className="w-full border-2 p-2"
                  required
                    value={String(dataProduct.codigo)}
                    onChange={(e) => handleChange('name', e.target.value)} />
                <label className="font-poppins mx-2 text-md" >Code of Product</label>
            </FloatLabel>
        </div>

        <div className=" w-full card flex flex-col justify-content-center mt-6  ">
            <FloatLabel className="w-full">
                <InputText
                  keyfilter={'num'}
                  className="w-full border-2 p-2"
                  required
                    value={String(dataProduct.stock)}
                    onChange={(e) => handleChange('name', e.target.value)} />
                <label className="font-poppins mx-2 text-md" >Stock</label>
            </FloatLabel>
            
        </div>

    </form>
}

export default FormAddProduct