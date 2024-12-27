import { useState } from "react"


function App(){
  
  let [num, setNum] = useState(10)

  const inc = () => {
    setNum(num++)
  }

  const dec = () => {
    setNum(num--)
  }

  const zero = () => {
    setNum(0)
  }

  return <div>
    <h1>Number is {num}</h1>
    <button onClick={inc}>Increment</button>
    <button onClick={dec}>Decrement</button>
    <button onClick={zero}>Set to zero</button>
  </div>
}


export default App;