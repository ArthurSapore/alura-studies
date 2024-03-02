import { styled }from "styled-components"
import GlobalStyles from "./App/components/Global/styles"
import Header from "./App/components/Header"
import Sidebar from "./App/components/Sidebar"
import Footer from "./App/components/Footer"
import Hero from "./App/components/Hero"

const FundoGradiente = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  height: 100vh;
`

const WrapperContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-width: 100%;
`

const WrapperMainContainer = styled.div`
  display: flex;
  gap: 24px;
`

function App() {

  return (
    <FundoGradiente>
      <GlobalStyles />
      <WrapperContainer>
        <Header />
        <WrapperMainContainer>
          <Sidebar />
          <Hero />
        </WrapperMainContainer>

        <Footer />

      </WrapperContainer>
    </FundoGradiente>
  )
}

export default App
