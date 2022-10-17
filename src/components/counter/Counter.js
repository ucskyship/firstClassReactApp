import React, {useState} from 'react'
import "./Counter.css"



const Counter = () => {
    const [ counter, setCounter ] = useState(0)
    const [ input, setInput] = useState("")

    const buttonClickHandler = () => {
        setCounter(prevCounter => prevCounter +1)
        console.log( counter );
    }

    const buttonClickHandlerDecrement = () => {
        setCounter(prevCounter => prevCounter > 0 ? prevCounter -1: 0)
        console.log(counter);
    }

    const inputChangeHandler = (event) => {
        setInput(event.target.value);
    }

    const incrementByHandler = () => {
        setCounter(prevCounter => prevCounter + Number(input))
    }

    const decrementByHandler = () => {
        setCounter(prevCounter => prevCounter > 0 ? prevCounter - Number(input): 0)
    }

    return (
        <div>
            <p>counter: { counter } </p>
            <button className="counter__button" onClick={ buttonClickHandler }>Increment</button>
            <button className="counter__button" onClick={ buttonClickHandlerDecrement }>Decrement</button>

            <div>
            <input placeholder="enter a number" type="number" min="0" value={input} onChange={ inputChangeHandler }></input>
            <button className="counter__button" onClick={ incrementByHandler }> IncrementBy</button>
            <button className="counter__button" onClick={ decrementByHandler }> DecrementBy</button>
            </div>
        </div>
        
    )
}

export default Counter
