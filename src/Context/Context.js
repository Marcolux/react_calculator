import { useState, createContext } from "react"

const Context = createContext()

const Provider = ({children})=>{

    const [shade ,setShade] = useState('var(--color1)')

    const state = {
        shadeState:[shade, setShade]

    }


    return (

        <Context.Provider value={state}>
            {children}
        </Context.Provider>
    )
}

export { Context, Provider}