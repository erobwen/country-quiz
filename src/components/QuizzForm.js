import useFetch from "@/pages/api/useFetch";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Column } from "./layout";

export const QuizzForm = ({}) => {
    const data = useFetch("/countries");
    const text = JSON.stringify(data);
    const [state, setState] = useState({
        queries: [],
        currentQueryIndex: 0,
        correctAnswers: 0
    })

    function advanceToNext(succeed) {
        setState({...state, correctAnswers: state.correctAnswers + succeed ? 1 : 0 });
    }

    const done = false; //state.currentQueryIndex >= state.queries.length; 

    return (
        <QuizzFrame icon={!done}>
            { done ? 
                <Results correctAnswers={state.correctAnswers}/> 
                :
                <Quizz query={state.queries[state.currentQueryIndex]}/> 
            }
        </QuizzFrame>
    );
}


export const QuizzFrame = ({children, icon}) => {

    const frameStyle = {
        position: "relative",
        width: "464px",
    } 

    return (
        <Column style={frameStyle}>
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

export const Quizz = ({}) => {
    return (
        <Column>
            <h2 style={queryStyle}>Quizz</h2>
        </Column>
    )
}

const queryStyle = {
    padding: "30px",
    fontFamily: "Poppins",
    color: "#2F527B",
    fontWeight: "700",
    fontSize: "24px",
    lineHeight: "36px",
    borderRadius: "10px",
    borderStyle: "solid",
    backgroundColor: "white",
    borderWidth: "0px",
}


export const Results = ({}) => {
    return (
        <Column>
        </Column>
    )
}

