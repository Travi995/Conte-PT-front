import { Outlet } from "react-router-dom"

const AuthView = ()=>{


    return <div className=" w-full h-full flex justify-center items-center bg-amber-100">
            <Outlet/>
    </div>
}

export default AuthView