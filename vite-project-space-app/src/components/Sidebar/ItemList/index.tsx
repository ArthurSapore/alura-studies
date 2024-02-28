import { ReactNode } from 'react';
import {StylizedItem} from './style.ts'

interface Props {
    children: ReactNode,
    iconAtivo: string,
    iconInativo: string,
    ativo?: boolean
}


const ItemList : React.FC<Props> =({ children, iconAtivo, iconInativo, ativo = false}) => {
    return(
        
        <StylizedItem ativo={ativo}> 
            <img src={ativo ? iconAtivo : iconInativo} alt="" />
            {children} 
        </StylizedItem>
        
    )
}


export default ItemList;