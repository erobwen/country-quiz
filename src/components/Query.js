import { Column, Filler, Row } from "./layout";

export const Query = ({query, answerQuery, answerIfAny, advanceToNext}) => {
    return (
        <Column style={queryFrameStyle}>
            <QueryQuestion query={query}/>
            <QueryAnswers 
                query={query} 
                answerQuery={answerQuery} 
                answerIfAny={answerIfAny}/>
            <Row style={{maxHeight: !!answerIfAny ? "76px" : "0px", transition: "all .5s" }} right>
                <YellowButton 
                    style={{transform: !!answerIfAny ? "scale(1)" : "scale(0)", opacity: !!answerIfAny ? 1 : 0, transition: "all .5s" }} 
                    onClick={advanceToNext} text={"Next"}/>
            </Row>
        </Column>
    )
}

export const QueryQuestion = ({query}) => {
    switch (query.typeOfQuestion) {
        case "capital": 
            return (
                <h2 style={{...queryTextStyle, marginTop: "78px"}}>{query.correctAnswer.capital[0]} is the capital of</h2>
            );        
        case "flag":
            return (
                <>
                    <Row>
                        <img style={flagStyle} src={query.correctAnswer.flags.png}></img>
                        <Filler/>
                    </Row>
                    <h2 style={queryTextStyle}>This is the flag of country</h2>
                </>
            );        
    }
}

const flagStyle = {
    height: "58px",
    boxShadow: "1px 1px 4px 2px rgba(0, 0, 0, 0.1)"
}

const queryFrameStyle = {
    paddingTop: "50px",
    paddingLeft: "20px",
    paddingRight: "20px",
    paddingBottom: "20px",
    borderRadius: "10px",
    borderStyle: "solid",
    backgroundColor: "white",
    borderWidth: "0px",
}

const queryTextStyle = {
    marginTop: "20px",
    fontFamily: "Poppins",
    color: "#2F527B",
    fontWeight: "700",
    fontSize: "24px",
    lineHeight: "36px",
}

export const QueryAnswers = ({query, answerQuery, answerIfAny}) => {
    return (
        <>
            {query.alternatives.map((alternative, index) => 
                <Alternative 
                    key={alternative.name.common} 
                    
                    showAnswers = {!!answerIfAny}
                    showRightAnswer={answerIfAny && alternative === query.correctAnswer}
                    showWrongAnswer={answerIfAny === alternative && alternative !== query.correctAnswer}
                    
                    alternative={alternative} 
                    index={index}

                    onClick={!answerIfAny ? () => answerQuery(alternative) : null}/>)}
        </>
    )
}

const letters = ["A", "B", "C", "D"];

export const Alternative = ({alternative, index, onClick, showAnswers, showRightAnswer, showWrongAnswer}) => {
    const style = {};
    if (showWrongAnswer) style.backgroundColor = "#EA8282";
    if (showRightAnswer) style.backgroundColor = "#60BF88";
    if (style.backgroundColor) style.color = "white";
    if (onClick) style.cursor = "pointer";

    return (
        <div className={!showAnswers ? "yellow-on-hover" : ""} style={{...alternativeStyle, ...style}} onClick={onClick}>
            <Row>
                <div style={{marginRight: "47px", marginLeft: "19px"}}>{ letters[index] }</div>
                { alternative.name.common}
            </Row>
        </div>
    );
}

const buttonShape = {
    borderRadius: "12px",
    borderStyle: "solid",
    borderWidth: "0px",
    overflow: "hidden",
    height: "56px",
}

const buttonText = {
    fontFamily: "Poppins",
    fontWeight: "500",
    fontSize: "18px",
    lineHeight: "56px",
    userSelect: "none"
}

const alternativeStyle = {
    marginTop: "20px",

    ...buttonShape,
    borderColor: "rgba(96, 102, 208, 0.7)",
    borderWidth: "3px",

    ...buttonText,
    color: "rgba(96, 102, 208, 0.8)",

    transition: "all .3s"
}


export const YellowButton = ({onClick, text, style}) => {
    return (
        <div className={"yellow-button"} style={{...yellowButtonStyle, ...style}} onClick={onClick}>
            <Row center>
                <div style={{marginRight: "36px", marginLeft: "36px"}}>{ text }</div>
            </Row>
        </div>
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