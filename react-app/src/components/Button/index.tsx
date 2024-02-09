import { ReactNode } from 'react';
import './style.scss'

type props ={
    children: ReactNode
}


function Button ({children} : props){
    return(
        <button className='botao'>{children}</button>
    );
}

export default Button;