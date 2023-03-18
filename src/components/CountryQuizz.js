import { CenterMiddle } from '@/components/layout'
import { QuizzForm } from '@/components/QuizzForm'
import { fillStyle } from '@/styles/styles'

export const CountryQuizz = () => {
    return (
      <QuizzBackground>
        <CenterMiddle>
          <QuizzForm/>
        </CenterMiddle>
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
  