import { ButtonHTMLAttributes, ReactNode } from 'react';
import './style.scss'

type props ={
    children: ReactNode,
    type?: "submit" | "reset" | "button" | undefined,
    onClick?: ()=> void
}

/**
 * Outra forma de escrever function component
 * Melhor para documentações utilizando typescript
 * @param param
 * @returns 
 */

const Button : React.FC <props> = ({children, type, onClick})=>{
    return(
        <button onClick={onClick} type={type} className='botao'>{children}</button>
    )
}

export default Button;