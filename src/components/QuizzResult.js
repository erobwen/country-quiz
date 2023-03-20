import Image from "next/image";
import { OutlineButton, YellowButton } from "./Button";
import { Center, Column, Row } from "./BasicLayout"
import { queryFrameStyle } from "./Query"
import { fontSize, fontWeight, fontFamily, lineHeight } from "./Typography";

function calculateScore(state) {
    let score = 0; 

    state.queries.forEach((query, index) => {
        if (query.correctAnswer === state.answers[index]) score++;
    })

    return score; 
}

export const QuizzResults = ({state, startOver}) => {
    const score = calculateScore(state);
    // const everythingRight = score === state.queries.length; 
    const somethingRight = score > 0;

    return (
        <Column style={queryFrameStyle}>
            <Center style={{marginBottom: "40px"}}>
                <Image 
                    src={somethingRight ? "/winners.svg" : "/adventure.svg" }
                    alt="Score"
                    width={162}
                    height={116}
                    priority
                />
            </Center>
            <Center>
                <div style={titleStyle}>Results</div>        
            </Center>
            <Center>
                <Row baseline>
                    <div style={{...textStyle, color: "#1D355D"}}>You've got</div>
                    <div style={{...textStyle, fontSize: fontSize.large, marginRight: "4px", marginLeft: "4px", color: "#6FCF97"}}>{score.toString()}</div>
                    <div style={{...textStyle, color: "#1D355D"}}>correct answers</div>
                </Row>
            </Center>
            <Center>
                <OutlineButton style={{marginTop: "40px", marginBottom: "20px"}} text="Try again" onClick={startOver}/>
            </Center>
        </Column>
    );
}

const textStyle = {
    fontFamily,
    fontWeight: fontWeight.normal,
    fontSize: fontSize.small,
}

const titleStyle = {
    fontFamily,
    fontWeight: fontWeight.bold,
    fontSize: fontSize.large,
    lineHeight: lineHeight.large
}
