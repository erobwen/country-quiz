import { Row } from "./BasicLayout";
import { fontFamily, fontSize, fontWeight } from "./Typography";
import { centerMiddleStyle, centerStyle, columnStyle, fillStyle, flexGrowShrinkStyle, middleStyle, rowStyle } from "@/styles/styles";

export const buttonShape = {
    borderRadius: "12px",
    borderStyle: "solid",
    borderWidth: "0px",
    overflow: "hidden",
    height: "56px",
}

export const buttonText = {
    fontFamily,
    fontWeight: fontWeight.normal,
    fontSize: fontSize.small,
    lineHeight: "56px",
}

export const YellowButton = ({onClick, text, style}) => {
    return (
        <button style={{...yellowButtonStyle, ...style}} onClick={onClick}>
            <Row center>
                <div style={{marginRight: "36px", marginLeft: "36px"}}>{ text }</div>
            </Row>
        </button>
    );
}

const yellowButtonStyle = {
    marginTop: "20px",
    ...buttonShape,
    ...buttonText,
    backgroundColor: "#F9A826",
    color: "white",
    cursor: "pointer"
}

export const OutlineButton = ({onClick, text, style}) => {
    return (
        <button className={"blue-background-on-hover white-on-hover white-background-blue-color"} style={{...outlineButtonStyle, ...centerStyle, ...style}} onClick={onClick}>
            <div style={{marginRight: "36px", marginLeft: "36px"}}>{ text }</div>
        </button>
    );
}

const outlineButtonStyle = {
    marginTop: "20px",
    ...buttonShape,
    ...buttonText,
    borderColor: "#1D355D",
    borderWidth: "3px",
    cursor: "pointer",
    lineHeight: "50px"
}
