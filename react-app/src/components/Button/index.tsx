import { ButtonHTMLAttributes, ReactNode } from 'react';
import './style.scss'

type props ={
    children: ReactNode,
    type?: "submit" | "reset" | "button" | undefined,
    onClick?: ()=> void
}

function Button ({children, type, onClick} : props){
    return(
        <button onClick={onClick} type={type} className='botao'>{children}</button>
    );
}

export default Button;