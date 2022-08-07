import { useEffect, useState } from "react";

export default function SideEffect(){
    const [count, setCount] = useState(0);
    const [date, setDate] = useState(new Date());

    // componentDidUpdate()
    useEffect(()=>{
        document.title = `count ${count}`;
    }, [count]);// when count state is update it will re-render the dom


    // componentDidMount()
    useEffect(()=>{
        document.title = 'First Time Titling';
    }, []); // first time rendering will update the title

    componenetWillUnmount()
    useEffect(()=>{
        console.log('Dom rendering each time');
        setInterval(()=> setDate(new Date()), 1000);
    }); // everytime it will render

    const handleButton = () =>{
        setCount(prev => prev + 1);
    }

    return(
        <div>
            <p>Time: {date.toLocaleTimeString()}</p>
            <button type="button" onClick={handleButton} >Click</button>
        </div>
    )
}