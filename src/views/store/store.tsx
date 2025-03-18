import { Outlet } from "react-router-dom"


const StoreView = ()=>{

    return <div className="bg-amber-100 w-full h-full flex flex-col flex-1 items-center justify-center ">
            
            <Outlet/>
    </div>
}

export default StoreView