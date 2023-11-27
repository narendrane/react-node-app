import React, {useState, useCallback} from "react"
import ChildComp from "./ChildComp"

const Arithmetic= () => {
    const [count, setCount] = useState(0)


    const handleIncrement = () => setCount(count + 1);


    const handleDecrement = () => setCount(count - 1);
    
      console.log("Parent render")

      return (
        <div className="App">

            <button onClick={() => handleIncrement()}>Increment</button>
            <button onClick={() => handleDecrement()}>Decrement</button>

          <h2>{count}</h2>
        <ChildComp user={ useCallback(() => ('Really Skinny Jack'), [])}/>
     
        </div>
      )
    }
  

  export default Arithmetic