import {styled} from "styled-components"
import {StylizedContainer, StylizedIcon, StylizedInput} from "./style.ts"
import lupa from "../../../public/images/lupa.svg"



const Input : React.FC<{}> =()=>{
    return(
        <StylizedContainer>
            <StylizedInput />
            <StylizedIcon src={lupa} alt="ícone lupa"/>
        </StylizedContainer>
    )
}

export default Input;