import { toast } from "react-toastify"

type tpAlert = {
    type:'success'|'error'|'warning'|'info'
    message:string
}

export const alertSystem = (arg:tpAlert)=>{
    switch(arg.type){
        case 'success':
            toast.success(arg.message)
            break;
        case 'error':
            toast.error(arg.message)
            break;
        case 'warning':
            toast.warning(arg.message)
            break;
        case 'info':
            toast.info(arg.message)
            break;
        default:
            toast.error('error desconocido, programalo')
    }
}