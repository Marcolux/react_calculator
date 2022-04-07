import { useContext, useState} from "react"
import { Context } from "../Context/Context"
import DisplayCount from "./DisplayCount"
import DisplayNumber from "./DisplayNumber"


const Screen =()=>{
    const { shadeState } = useContext(Context)
    const [shade ,setShade] = shadeState

    const {countState } = useContext(Context)
    const [count, setCount] = countState

    const [screenResult, setScreenResult] = useState(`Number To Big 🙃`)
    

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