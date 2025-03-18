import { Outlet } from "react-router-dom"


const StoreView = ()=>{

    return <div className="bg-amber-100 w-full h-full flex flex-col flex-1 items-center justify-center ">
            <h1 className="w-full my-2 text-center font-medium">Welcome your Store</h1>
            <Outlet/>
    </div>
}

export default StoreView