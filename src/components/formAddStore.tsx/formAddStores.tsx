import { SyntheticEvent, useContext, useState } from "react"
import { tpStore } from "../../types/store"
import { FloatLabel } from "primereact/floatlabel"
import { InputText } from "primereact/inputtext"
import { Button } from 'primereact/button';
import { InputMask } from 'primereact/inputmask';
import { getFromLocal, saveToLocal } from "../../helpers/saveToLocal";
import { GlobalContext } from "../../context/globalContext";
import { alertSystem } from "../../helpers/alertSystem";


const FormAddStore = ()=>{
    const [dataStore,setDataStore] = useState<Omit<tpStore,'idStore'>>({
        nameStore:'',
        addressStore:'',
        phoneStore:'',
        emailStore:'',
        products:[]
    })
    const {dataUser} = useContext(GlobalContext)

    const handlerChange = (key:keyof tpStore,value:string)=>{
        setDataStore({...dataStore,[key]:value})
    }

    const handlerSubmit = (e:SyntheticEvent)=>{
        e.preventDefault()

        const items =  JSON.parse((getFromLocal('users')as string) ?? [])
        //@ts-ignore
        const item  =  items.find((item:Object )=>item.idUser === dataUser.idUser)
        if(item){
            item.store = {...dataStore}
            saveToLocal('users',JSON.stringify(items))
            alertSystem({type:'success',message:"Successfully saved"})
        }else{
            alertSystem({type:'error',message:"Oops, you are not logged in"})
        }
    }

    return <form onSubmit={handlerSubmit} className="w-max gap-4 border  border-blue-100 p-3 shadow rounded  ">
        <h1 className="w-full my-2 text-center font-medium">Add Store</h1>
        
        <div className="mt-5">
            <FloatLabel>
                <InputText required value={dataStore.nameStore} onChange={(e) => handlerChange('nameStore',e.target.value)} type="text" />
                <label htmlFor="username">Name Store</label>
            </FloatLabel>
        </div>
        <div className="mt-5">
            <FloatLabel>
                <InputText required value={dataStore.addressStore} onChange={(e) => handlerChange('addressStore',e.target.value)} type="text" />
                <label htmlFor="username">Address Store</label>
            </FloatLabel>
        </div>

        <div className="mt-5">
            <InputMask value={dataStore.phoneStore} onChange={(e)=>handlerChange("phoneStore",e.value as string)} id="phone" mask="(999) 999-9999" placeholder="(999) 999-9999"></InputMask>
        </div>

        <div className="w-full flex justify-between mt-5 ">
            <Button type="reset"  className="w-1/3 " label="Reset"></Button>
            <Button type="submit" label="Save" className="w-1/3 hover:cursor-pointer hover:bg-blue-600 transition-all duration-200" outlined></Button>
        </div>

    </form>
}

export default FormAddStore