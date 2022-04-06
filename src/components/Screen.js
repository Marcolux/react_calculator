import { useContext, useState } from "react"
import { Context } from "../Context/Context"


const Screen =()=>{
    const { shadeState } = useContext(Context)
    const [shade ,setShade] = shadeState

    const { numberToAddState } = useContext(Context)
    const [numberToAdd ,setNumberToAdd] = numberToAddState

    const {countState } = useContext(Context)
    const [count, setCount] = countState

    const [screenResult, setScreenResult] = useState(0)

    console.log(count)

    return(
        <div style={{color:`${shade}`}} className="Screen">
            <p className="numbersOnTheScreen">{count?count:numberToAdd}</p>
        </div>
    )
}

export default Screen