import { FloatLabel } from "primereact/floatlabel"
import { InputText } from "primereact/inputtext"
import { SyntheticEvent, useState } from "react"
import { tpDataRegister } from "../../types/auth"
import { Password } from "primereact/password"
import { useNavigate } from "react-router-dom"
import { getFromLocal, saveToLocal } from "../../helpers/saveToLocal"
import { alertSystem } from "../../helpers/alertSystem"

const FormRegister = ()=>{
    const [dataRegister,setDataRegister] = useState<tpDataRegister>({
        email:'',
        nameStore:'',
        password:'',
        store:{
            idStore:0,
            nameStore:'',
            addressStore:'',
            phoneStore:'',
            emailStore:'',
            products:[]
        }
    })
    const navigate = useNavigate()

    const handlerChange = (key:keyof tpDataRegister,value:string)=>{
        setDataRegister({
            ...dataRegister,
            [key]:value
        })
    }

    const handlerSubmit = (e:SyntheticEvent)=>{
        e.preventDefault()
        const items =  JSON.parse((getFromLocal('users')as string) ?? [])
        //@ts-ignore
        const data =  (Array.from(items)).find((item:Object )=>item.email === dataRegister.email)
        if(data){
            alertSystem({type:'error',message:"Oops, a user with this email already exists."})
        }else{
            saveToLocal('users',JSON.stringify([...items,dataRegister]))
            alertSystem({type:'success',message:"Successfully registered"})
        }

    }

    const handlerNavigate =()=>{
        navigate('/login')
    }

    return <form onSubmit={handlerSubmit} className="flex flex-col mt-5 gap-4">
         <div className="mt-2">
            <FloatLabel>
                <InputText required value={dataRegister.email} onChange={(e) => handlerChange('email',e.target.value)} type="email" />
                <label htmlFor="username">Email</label>
            </FloatLabel>
        </div>
        <div className="mt-2">
            <FloatLabel>
                <InputText required value={dataRegister.email} onChange={(e) => handlerChange('nameStore',e.target.value)} type="text" />
                <label htmlFor="username">Name Store</label>
            </FloatLabel>
        </div>

        <div className="mt-2">
            <FloatLabel>
                <Password required value={dataRegister.password} feedback={false} onChange={(e) => handlerChange('password',e.target.value)}  />
                <label htmlFor="username">Password</label>
            </FloatLabel>
        </div>
        <div className="w-full flex pl-1 ">
            <span className="text-xs ">You already have an account?</span>
            <button onClick={handlerNavigate} className="ml-2 text-xs  dashed text-blue-500 hover:cursor-pointer hover:text-blue-700 transition-all duration-200 uppercase rounded">Sign Inr</button>
        </div>

        <div className="flex justify-center mt-5">
            <button className="bg-blue-500 hover:cursor-pointer transition-all duration-150 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Register</button>
        </div>

    </form>
}


export default FormRegister