import useFetch from "@/pages/api/useFetch";
import { useEffect, useState } from "react";


export const QuizzForm = ({}) => {

    const [data, setData] = useState(null);

    // useEffect(() => {
    //   fetch("/countries")
    //     .then((response) =>  {
    //       response.json().then((response) => {
    //         console.log(response)
    //         console.log("SET DATA!!!")
    //         setData(response)
    //       });
    //     })
    // });

    setTimeout(() => {
        setData("foobar");
    }, 2000)


    // const data = useFetch("/countries");
    console.log(data);
    // const text = JSON.stringify(data); 
    // console.log(text);
    // console.log(typeof text);
    // return text; 
    return (
        <div>{data}</div>
    );
}