import { useContext} from "react"
import { Context } from "../Context/Context"



const DisplayCount = (props)=>{

    const {countState } = useContext(Context)
    const [count, setCount] = countState

    const { numberToAddState } = useContext(Context)
    const [numberToAdd ,setNumberToAdd] = numberToAddState

    const {firstNumberState } = useContext(Context)
    const [firstNumber, setFirstNumber] = firstNumberState


    return(
        <>
                    {
                    count<99999999?
                        <p className="numbersOnTheScreen">{count.toFixed(2)}</p>
                        :
                        <>
                        <p style={{fontSize:'30px'}} className="numbersOnTheScreen">{props.screenResult}</p>
                        </>
                    }
                    </>

    )

}

export default DisplayCount