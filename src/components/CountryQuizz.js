import { Center, CenterMiddle, Column } from '@/components/BasicLayout'
import { QuizzForm } from '@/components/QuizzForm'
import { fillStyle, flexAutoHeightStyle, flexAutoStyle, flexGrowShrinkStyle } from '@/styles/styles'

export const CountryQuizz = () => {
    return (
      <QuizzBackground>
        <Column style={{...fillStyle, overflowY: "overlay"}}>
            <Center style={flexAutoStyle}>
                <QuizzForm style={{marginTop: "40px"}}/>
            </Center>
        </Column>
      </QuizzBackground>
    );
}
  
export const QuizzBackground = ({children}) => {
    return (
        <div style={{
        ...fillStyle, 
        position: "relative",
        backgroundImage: "url(/background.png)",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        overflowY: "overlay"
        }}>
            <Footer style={flexAutoHeightStyle}/>        
            {children}
        </div>
    );
}
  




const Footer = () => {
    return (
        <Center style={{width: "100%", position: "absolute", top: "100%", marginTop: "-50px"}}>
            <footer style={{fontFamily: "Arial, sans-serif", color: "white", fontWeight: "500"}}>
                Author: Robert Renbris
            </footer>
        </Center>
    );
}
