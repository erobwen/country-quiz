import Image from "next/image";
import { Column } from "./layout";


export const QuizzFrame = ({style, children, icon}) => {

    const frameStyle = {
        position: "relative",
        width: "464px",
    } 

    return (
        <Column style={{...frameStyle, ...style}}>
            <QuizzHeader/>
            {children}
            {icon && <QuizzIcon/>}
        </Column>
    )
}

export const QuizzIcon = ({}) => {
    
    const iconStyle = {
        position:"absolute",
        top: "0px",
        left: "100%",
        marginLeft: "-162px"
    }

    return (
        <div style={iconStyle}>
            <Image 
                src="/adventure.svg"
                alt="Adventure"
                width={162}
                height={116}
                priority
            />
        </div>
    )
}


export const QuizzHeader = ({}) => {
    return <h1 style={titleStyle}>COUNTRY QUIZZ</h1>
}

const titleStyle = {
    fontFamily: "Poppins",
    fontWeight: "700",
    fontSize: "36px",
    lineHeight: "54px"
}
