import { useContext} from "react"
import { Context } from "../Context/Context"

import DisplayNumberDot from "./DisplayNumberDot"


const DisplayNumber =()=>{


    const { numberToAddState } = useContext(Context)
    const [numberToAdd ,setNumberToAdd] = numberToAddState

console.log("number to add",numberToAdd)
    return( 
        <>
            {numberToAdd?
                <DisplayNumberDot></DisplayNumberDot>
                :
                <p className="numbersOnTheScreen">{0}</p>
            }
        </>
        

    )
}

export default DisplayNumber