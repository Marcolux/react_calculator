import { useState, createContext } from "react"

const Context = createContext()

const Provider = ({children})=>{

    const [shade ,setShade] = useState('var(--color1)')
    const [count,setCount] = useState(0)
    const [numberToAdd, setNumberToAdd] = useState(0)

    const state = {
        shadeState:[shade, setShade],
        countState:[count, setCount]

    }


    return (

        <Context.Provider value={state}>
            {children}
        </Context.Provider>
    )
}

export { Context, Provider}