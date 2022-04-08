import { useContext} from "react"
import { Context } from "../Context/Context"

import DisplayNumberSmall from "./DisplayNumberSmall"

const DisplayNumberDot=()=>{

    const { numberToAddState } = useContext(Context)
    const [numberToAdd ,setNumberToAdd] = numberToAddState


    return(
        numberToAdd==='.'?
            <p className="numbersOnTheScreen">0.</p>
            :
            <DisplayNumberSmall></DisplayNumberSmall>
    )
}
export default DisplayNumberDot