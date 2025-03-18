import { FloatLabel } from "primereact/floatlabel"
import { InputText } from "primereact/inputtext"
import { SyntheticEvent, useContext, useState } from "react"
import { tpDataLogin, tpDataRegister } from "../../types/auth"
import { Password } from "primereact/password"
import { useNavigate } from "react-router-dom"
import { getFromLocal } from "../../helpers/saveToLocal"
import { alertSystem } from "../../helpers/alertSystem"
import { GlobalContext } from "../../context/globalContext"



const FormLogin = () => {
    const navigate = useNavigate()

    const [dataLogin,setDataLogin] = useState<tpDataLogin>({
        email:'',
        password:''
    })
    const {dataUser,setDataUser} = useContext(GlobalContext)

    const handlerChange = (key:keyof tpDataLogin,value:string)=>{
        setDataLogin({
            ...dataLogin,
            [key]:value
        })
    }

    const handlerSubmit = (e: SyntheticEvent) => {
        e.preventDefault()

        const items =  JSON.parse((getFromLocal('users')as string) ?? [])
        //@ts-ignore
        const data:tpDataRegister =  (Array.from(items)).find((item:Object )=>item.email === dataRegister.email)
        
        if(data !==undefined && data.password === dataLogin.password){
            setDataUser({...dataUser,idUser:data.id})
            alertSystem({type:'success',message:"Successfully Sign In"})
        }else{
            alertSystem({type:'error',message:"Oops, credentials Incorrects"})
        }   
    }
    
    const handlerNavigate = ()=>{
        navigate('/register')
    }

    return <form onSubmit={handlerSubmit} className="flex flex-col mt-5 gap-4" >

        <div className="mt-2">
            <FloatLabel>
                <InputText required value={dataLogin.email} onChange={(e) => handlerChange('email',e.target.value)} type="email" />
                <label htmlFor="username">Email</label>
            </FloatLabel>
        </div>
        <div className="mt-2">
            <FloatLabel>
                <Password required value={dataLogin.password} feedback={false} onChange={(e) => handlerChange('password',e.target.value)}  />
                <label htmlFor="username">Password</label>
            </FloatLabel>
        </div>
        <div className="w-full flex pl-1 ">
            <span className="text-xs ">You already have an account?</span>
            <button onClick={handlerNavigate} className="ml-2 text-xs  dashed text-blue-500 hover:cursor-pointer hover:text-blue-700 transition-all duration-200 uppercase rounded">register</button>
        </div>
        <div className="flex justify-center mt-5">
            <button className="bg-blue-500 hover:cursor-pointer transition-all duration-150 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Sign In</button>
        </div>

    </form>
}

export default FormLogin