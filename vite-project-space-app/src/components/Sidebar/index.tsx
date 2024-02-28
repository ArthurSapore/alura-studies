import ItemList from './ItemList/index.tsx';
import {StylizedSidebar} from './style.ts'

const Sidebar : React.FC<NonNullable<unknown>> = () =>{
    return(
        <StylizedSidebar>
            <nav>
                <ul>
                    <ItemList iconAtivo ='/icons/home-ativo.svg' iconInativo='/icons/home-inativo.svg' ativo={true}>
                        <a href="">Início</a>
                    </ItemList>
                    <ItemList iconAtivo ='/icons/mais-vistas-ativo.svg' iconInativo='/icons/mais-vistas-inativo.svg'>
                        <a href="">Mais vistos</a>
                    </ItemList>
                    <ItemList iconAtivo ='/icons/mais-curtidas-ativo.svg' iconInativo='/icons/mais-curtidas-inativo.svg'>
                        <a href="">Mais curtidas</a>
                    </ItemList>
                    <ItemList iconAtivo ='/icons/novas-ativo.svg' iconInativo='/icons/novas-inativo.svg'>
                        <a href="">Novas</a>
                    </ItemList>
                    <ItemList iconAtivo ='/icons/surpreenda-me-ativo.svg' iconInativo='/icons/surpreenda-me-inativo.svg'>
                        <a href="">Surpreenda-me</a>
                    </ItemList>
                </ul>
            </nav>
        </StylizedSidebar>
    )
}

export default Sidebar;