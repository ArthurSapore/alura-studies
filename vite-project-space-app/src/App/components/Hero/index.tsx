import { StylizedHero } from "./style"
import imageBanner from "/images/image-banner.png"




const Hero : React.FC<NonNullable<unknown>> = () =>{
    return(
        <StylizedHero $backgroundImage={imageBanner}>
            <h1>A galeria mais completa de fotos no espaço!</h1>
        </StylizedHero>

    )
}

export default Hero;


