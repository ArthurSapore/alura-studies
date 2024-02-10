import { ReactNode } from 'react';
import './style.scss'

type props ={
    children: ReactNode,
    type?: "submit" | "reset" | "button" | undefined
}

function Button ({children, type} : props){
    return(
        <button type={type} className='botao'>{children}</button>
    );
}

export default Button;