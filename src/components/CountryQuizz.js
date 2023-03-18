import { Center, CenterMiddle, Column } from '@/components/layout'
import { QuizzForm } from '@/components/QuizzForm'
import { fillStyle, flexAutoHeightStyle, flexGrowShrinkStyle } from '@/styles/styles'

export const CountryQuizz = () => {
    return (
      <QuizzBackground>
        <Column style={fillStyle}>
            <Center style={flexGrowShrinkStyle}>
                <QuizzForm style={{marginTop: "80px"}}/>
            </Center>
            <Footer style={flexAutoHeightStyle}/>
        </Column>
      </QuizzBackground>
    );
}
  
export const QuizzBackground = ({children}) => {
    return (
        <div style={{
        ...fillStyle, 
        backgroundImage: "url(/background.png)",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        }}>{children}</div>
    );
}
  
const Footer = () => {
    return (
        <Center>
            <footer style={{fontFamily: "Arial, sans-serif", color: "white", fontWeight: "500"}}>
                Author: Robert Renbris
            </footer>
        </Center>
    );
}