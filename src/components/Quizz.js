
import { Column } from "./layout";

export const Quizz = ({query}) => {
    return (
        <Column style={queryFrameStyle}>
            <QuizzQuestion query={query}/>
            <QuizzAnswers/>
        </Column>
    )
}

export const QuizzQuestion = ({query}) => {
    switch (query.typeOfQuestion) {
        case "capital": 
            return (
                <h2 style={queryTextStyle}>{query.answer.capital[0]} is the capital of</h2>
            );        
        case "flag":
            return (
                <>
                    <img style={flagStyle} src={query.answer.flags.png}></img>
                    <h2 style={queryTextStyle}>This is the flag of country</h2>
                </>
            );        
    }
}

const flagStyle = {
    width: "200px",
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

export const QuizzAnswers = ({query}) => {
    return "foo"
}

