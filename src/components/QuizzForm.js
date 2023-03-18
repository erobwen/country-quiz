import useFetch from "@/pages/api/useFetch";
import Image from "next/image";
import { useEffect, useState } from "react";
import { generateQueries } from "./generateQueries";
import { Column } from "./layout";
import { Quizz } from "./Quizz";
import { QuizzFrame } from "./QuizzFrame";
import { QuizzResults } from "./QuizzResult";

export const QuizzForm = ({}) => {
    const data = useFetch("/countries");
    const text = JSON.stringify(data);
    const [state, setState] = useState({
        queries: [],
        currentQueryIndex: 0,
        answeredCurrentQuery: false,
        currentAnswerCorrect: null,
        correctAnswers: 0
    })
    useEffect(() => {
        if (data) {
            setState({...state, queries: generateQueries(data)});
        }
    },[data])

    if (state.queries.length === 0) return null;

    console.log(state.queries);

    function advanceToNext(succeed) {
        setState({
            ...state, 
            currentQueryIndex: state.currentQueryIndex + 1,
            currentAnswerCorrect: null
        });
    }
    
    function answerQuery(answer) {
        currentQuery = state.queries[state.currentQueryIndex];
        const correctAnswer = answer === currentQuery.answer;
        setState({
            ...state,
            answeredCurrentQuery: true, 
            correctAnswers: state.correctAnswers + correctAnswer ? 1 : 0,
            currentQueryCorrect: correctAnswer
        });
    }

    const done = false; //state.currentQueryIndex >= state.queries.length; 
    
    return (
        <QuizzFrame icon={!done}>
            { done ? 
                <QuizzResults correctAnswers={state.correctAnswers}/> 
                :
                <Quizz query={state.queries[state.currentQueryIndex]}/> 
            }
        </QuizzFrame>
    );
}



