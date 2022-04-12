import { useContext, useState, useEffect} from "react"
import { Context } from "../Context/Context"

const DisplayNumberSmall = ()=>{
    const { numberToAddState } = useContext(Context)
    const [numberToAdd ,setNumberToAdd] = numberToAddState

    const {screenResultState } = useContext(Context)
    const [screenResult, setScreenResult] = screenResultState

    return(

    numberToAdd<9999999999?
        <p className="numbersOnTheScreen">{numberToAdd}</p>
        :
        <p style={{fontSize:'23px'}} className="numbersOnTheScreenText">{screenResult}</p>
        
    )
}
export default DisplayNumberSmall