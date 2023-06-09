import useFetch from "@/pages/api/useFetch";
import Image from "next/image";
import { useEffect, useState } from "react";
import { generateQueries } from "./generateQueries";
import { Column } from "./BasicLayout";
import { Query } from "./Query";
import { QuizzFrame } from "./QuizzFrame";
import { QuizzResults } from "./QuizzResult";

export const QuizzForm = ({style}) => {
    const data = useFetch("/countries");
    const text = JSON.stringify(data);
    const [state, setState] = useState({
        queries: [],
        answers: [],
        currentQueryIndex: 0
    })
    useEffect(() => {
        if (data) {
            setState({...state, queries: generateQueries(data)});
        }
    },[data])

    if (state.queries.length === 0) return null;


    function advanceToNext(succeed) {
        setState({
            ...state, 
            currentQueryIndex: state.currentQueryIndex + 1
        });
    }
    
    function answerQuery(answer) {
        setState({
            ...state,
            answers: [...state.answers, answer] 
        });
    }

    function startOver() {
        setState({
            ...state,
            queries: generateQueries(data),
            answers: [],
            currentQueryIndex: 0 
        });
    }

    const done = state.currentQueryIndex >= state.queries.length; 
    return (
        <QuizzFrame style={style} icon={!done}>
            { done ? 
                <QuizzResults state={state} startOver={startOver}/> 
                :
                <Query 
                    query={state.queries[state.currentQueryIndex]} 
                    answerQuery={answerQuery} 
                    answerIfAny={state.currentQueryIndex < state.answers.length ? state.answers[state.currentQueryIndex] : null}
                    advanceToNext={advanceToNext}/> 
            }
        </QuizzFrame>
    );
}



