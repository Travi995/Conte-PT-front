import { FC, ReactNode } from "react"
import { Dialog } from 'primereact/dialog';
        


interface ModalGenericProps {
    isVisible: boolean,
    onClose:()=>void
    position?:'center' | 'top' | 'bottom' | 'left' | 'right' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | undefined;
    style?: React.CSSProperties  
    children:ReactNode
}

const ModalGeneric:FC<ModalGenericProps> = ({isVisible,children,position = 'center',style }) => {
  
    return <>
    <Dialog
    closeOnEscape={true}
    className="m-0"
    contentClassName="p-0"
    showHeader={false}
    breakpoints={{
        '2040px': '420px', 
        '1360px': '420px',  // En pantallas de 1024px, el ancho máximo será 420px
        '1020px': '420px',   // En pantallas grandes, el ancho máximo será 420px
        '720px': '420px',    // En pantallas medianas-grandes, el ancho será de 400px
        '680px': '420px',    // En pantallas medianas, el ancho será de 380px
        '480px': '420px',    // En pantallas más pequeñas, el ancho será de 360px
        '420px': '100vw',
        '360px': '100vw',   // En pantallas móviles más pequeñas, el ancho será de 320px
        '320px': '100vw'
    }}
    onHide={()=>{}}

    
     style={{...style ,}} visible={isVisible} position={position} >
        {children}
    </Dialog>
    </>
}

export default ModalGeneric