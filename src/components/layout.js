import { centerMiddleStyle, centerStyle, columnStyle, fillStyle, flexGrowShrinkStyle, middleStyle, rowStyle } from "@/styles/styles";

export const Column = ({style, children}) => (
  <div id={"Column"} style={{...columnStyle, ...style}} children={children}/>
);

export function Row({style, children, left=false, right=false, center=false}) {
  style={...style};
  if (right) style.justifyContent = "flex-end";
  if (left) style.justifyContent = "flex-start";
  if (center) style.justifyContent = "space-around";
  return <div id="Row" style={{...rowStyle, ...style}} children={children}/>;
}

export function Middle({style, children}) {
  return <div id="Middle" style={{...middleStyle, ...style}} children={children}/>;
}

export function Center({style, children}) {
  return <div id="Center" style={{...centerStyle, ...style}} children={children}/>;
}
  
export function CenterMiddle({style, children}) {
  return <div id="CenterMiddle" style={{...centerMiddleStyle, ...fillStyle, ...style}} children={children}/>;
}

export function Filler({style, children}) {
  return <div id="Filler" style={{...flexGrowShrinkStyle, ...style}} children={children}/>;
}

  