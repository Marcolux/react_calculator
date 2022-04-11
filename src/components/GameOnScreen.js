import { useContext, useState } from "react"
import { Context } from "../Context/Context"

import DisplayCount from "./DisplayCount"
import DisplayNumber from "./DisplayNumber"

const GameOnScreen = ()=>{

    const {countState } = useContext(Context)
    const [count, setCount] = countState
    
    const {screenResultState } = useContext(Context)
    const [screenResult, setScreenResult] = screenResultState

    const { numberToAddState } = useContext(Context)
    const [numberToAdd ,setNumberToAdd] = numberToAddState
    

    return(
        <>
        {
        count?
            <>
            {numberToAdd?
            <DisplayNumber screenResult={screenResult}></DisplayNumber>
            :
            <DisplayCount screenResult={screenResult}></DisplayCount>
            }
            </>
            :
            <DisplayNumber screenResult={screenResult}></DisplayNumber>
        }
        </>

    )
}

export default GameOnScreen