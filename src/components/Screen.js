import { useContext, useState, useEffect } from "react"
import { Context } from "../Context/Context"
import DisplayCount from "./DisplayCount"
import DisplayNumber from "./DisplayNumber"


const Screen =()=>{
    const { shadeState } = useContext(Context)
    const [shade ,setShade] = shadeState

    const { numberToAddState } = useContext(Context)
    const [numberToAdd ,setNumberToAdd] = numberToAddState

    const {countState } = useContext(Context)
    const [count, setCount] = countState

    // let message = `Number To Big 🙃`
    const [screenResult, setScreenResult] = useState(`Number To Big 🙃`)


    console.log("count",count,String(count).length,"number to add",numberToAdd,String(numberToAdd).length)

    

    return(
        <div style={{color:`${shade}`}} className="Screen">
            {count?
                    <DisplayCount screenResult={screenResult}></DisplayCount>
                    :
                    <DisplayNumber screenResult={screenResult}></DisplayNumber>
        }
        </div>
    )
}

export default Screen