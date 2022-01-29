import React, {useState} from 'react'

function HookCounter() {
    const iniCount = 0
    const [count, setCount] = useState(iniCount)
    
    function incFive(){
        for(let i=0;i<5;i++)
        setCount(prevCount => prevCount + 1)
    }
    return (
        <div>
            Count: {count}
            <br/>
            {/* <button onClick = {()=> setCount(count + 1)}>Increment</button> */}
            <button onClick = {()=> setCount(prevCount => prevCount + 1)}>Increment</button>
            <button onClick = {()=> setCount(prevCount => prevCount - 1)}>Decrement</button>
            <button onClick = {incFive}>Increment 5</button>
            <br/>
            <button onClick = {()=> setCount(iniCount)}>Reset</button>
            {/* Also see usestate with arrays and objects */}
        </div>
    )
}

export default HookCounter
