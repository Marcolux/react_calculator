import { useState, createContext } from "react"

const Context = createContext()

const Provider = ({children})=>{

    const [shade ,setShade] = useState('var(--color1)')
    const [count,setCount] = useState()
    const [numberToAdd, setNumberToAdd] = useState([])
    const [firstNumber, setFirstNumber] = useState([])
    const [operator, setOperator] = useState("")
    const [finalCount,setFinalCount] = useState([])
    const [initialCondition, setInitialCondition] = useState(false)
    const [screenResult, setScreenResult] = useState(`That's a Big Number 🙃`)

    const state = {
        shadeState:[shade, setShade],
        countState:[count, setCount],
        numberToAddState:[numberToAdd, setNumberToAdd],
        firstNumberState:[firstNumber, setFirstNumber],
        operatorState:[operator, setOperator],
        finalCountState:[finalCount,setFinalCount],
        initialConditionState:[initialCondition, setInitialCondition],
        screenResultState:[screenResult, setScreenResult]
    }


    return (

        <Context.Provider value={state}>
            {children}
        </Context.Provider>
    )
}

export { Context, Provider}