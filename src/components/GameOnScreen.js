import { useContext, useState } from "react"
import { Context } from "../Context/Context"

import DisplayCount from "./DisplayCount"
import DisplayNumber from "./DisplayNumber"

const GameOnScreen = ()=>{

    const {countState } = useContext(Context)
    const [count, setCount] = countState

    const [screenResult, setScreenResult] = useState(`That's a Big Number 🙃`)

    return(
        <>
        {
        count?
            <DisplayCount screenResult={screenResult}></DisplayCount>
            :
            <DisplayNumber screenResult={screenResult}></DisplayNumber>
        }
        </>

    )
}

export default GameOnScreen