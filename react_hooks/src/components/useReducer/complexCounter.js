import { useReducer } from "react";

export default function ComplexCounter(){
    const initialState = {
        counter: 0,
        counter2: 0,
    }
    const reducer = (state, action) =>{
        switch(action.type){
            case 'increment':
                return {
                    ...state, counter: state.counter + action.value
                };
            case 'decrement':
                return {
                    ...state, counter: state.counter - action.value
                };
            case 'increment2':
                return {
                    ...state, counter2: state.counter2 + action.value
                };
            case 'decrement2':
                return {
                    ...state, counter2: state.counter2 - action.value
                };
            default:
                return state;
        }
    }
    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <>
        <p>count - {count.counter}</p>
        <button type="button" onClick={()=>dispatch({
            type: "increment",
            value: 2,
        })}>Increment</button>
        <button type="button" onClick={()=>dispatch({
            type: "decrement",
            value: 3
        })}>Decrement</button>
        <br></br>
        <p>count - {count.counter2}</p>
        <button type="button" onClick={()=>dispatch({
            type: "increment2",
            value: 3,
        })}>Increment</button>
        <button type="button" onClick={()=>dispatch({
            type: "decrement2",
            value: 2
        })}>Decrement</button>
        </>
    )
}