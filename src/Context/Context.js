import { useState, createContext } from "react"

const Context = createContext()

const Provider = ({children})=>{

    const [shade ,setShade] = useState('var(--color1)')
    const [count,setCount] = useState()
    const [numberToAdd, setNumberToAdd] = useState([])
    const [firstNumber, setFirstNumber] = useState([])
    const [operator, setOperator] = useState()

    const state = {
        shadeState:[shade, setShade],
        countState:[count, setCount],
        numberToAddState:[numberToAdd, setNumberToAdd],
        firstNumberState:[firstNumber, setFirstNumber],
        operatorState:[operator, setOperator]

    }


    return (

        <Context.Provider value={state}>
            {children}
        </Context.Provider>
    )
}

export { Context, Provider}