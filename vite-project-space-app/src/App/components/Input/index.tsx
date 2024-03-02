import {StylizedContainer, StylizedIcon, StylizedInput} from "./style.ts"
import lupa from "/images/lupa.svg"



const Input : React.FC<NonNullable<unknown>> =()=>{
    return(
        <StylizedContainer>
            <StylizedInput />
            <StylizedIcon src={lupa} alt="ícone lupa"/>
        </StylizedContainer>
    )
}

export default Input;