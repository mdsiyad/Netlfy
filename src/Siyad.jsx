import React from 'react'
import {useState} from 'react'
import  './App.css'
function Siyad() {
    const [count, setcount] = useState(0)

    const addCount = () => {
        setcount(count+1)
    }
    const minusCount = () => {
        setcount(count-1)
    }

    
    
    return (
        <div className='App'>
            <h1>Welcome to siyad App</h1>

            <div style={{display:"flex",justifyContent:"space-around",alignItems:"center",width:"30%",margin:"auto"}}>
            <button onClick={addCount} style={{padding:"10px 35px",background:"green",color:"white",border:"none",fontSize:"2rem"}}>
            +
            </button>
                <h2>Counter:{count}</h2>
            <button onClick={minusCount} style={{padding:"10px 35px",background:"red",color:"white",border:"none",fontSize:"2rem"}}>
            -
            </button>
            </div>
        </div>
    )
}

export default Siyad
