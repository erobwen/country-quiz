import useFetch from "@/pages/api/useFetch";
import { useEffect, useState } from "react";


export const QuizzForm = ({}) => {
    const data = useFetch("/countries");
    const text = JSON.stringify(data); 
    return (
        <div style={{maxWidth: "300px"}}>{text}</div>
    );
}