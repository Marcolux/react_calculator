import { useContext } from "react"
import { Context } from "../Context/Context"


const Screen =()=>{
    const { shadeState } = useContext(Context)
    const [shade ,setShade] = shadeState


    return(
        <div style={{color:`${shade}`}} className="Screen">
        </div>
    )
}

export default Screen