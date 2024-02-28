import {styled} from "styled-components"
import Input from "../Input";

const Headerstylized = styled.header`
    padding: 60px 0;
    display: flex;
    justify-content: space-between;
    img{
        max-width: 212px;
    }
`


const Header : React.FC<NonNullable<unknown>> = () =>{
    return(
        <Headerstylized>
            <img src="../../public/images/Logo branco.svg" alt="" />
            <Input/>
        </Headerstylized>
    )
}

export default Header;