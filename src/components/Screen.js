import { useContext } from "react"
import { Context } from "../Context/Context"


const Screen =()=>{
    const { shadeState } = useContext(Context)
    const [shade ,setShade] = shadeState

    const { numberToAddState } = useContext(Context)
    const [numberToAdd ,setNumberToAdd] = numberToAddState


    return(
        <div style={{color:`${shade}`}} className="Screen">
            <p className="numbersOnTheScreen">{numberToAdd!==0?numberToAdd:0}</p>
        </div>
    )
}

export default Screen