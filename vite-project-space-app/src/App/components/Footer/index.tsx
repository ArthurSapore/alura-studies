import { StylizedFooter, StylizedSocial } from "./style"
import facebook from '/icons/facebook.svg'
import twitter from '/icons/twitter.svg'
import instagram from '/icons/instagram.svg'



const Footer : React.FC<NonNullable<unknown>> = () => {
   return(
    <StylizedFooter>
        <StylizedSocial>
            <img src={facebook} alt="" />
            <img src={twitter} alt="" />
            <img src={instagram} alt="" />
        </StylizedSocial>
        
        <p>
            Desenvolvido por Arthur.
        </p>
    
    </StylizedFooter>
   )
}

export default Footer;