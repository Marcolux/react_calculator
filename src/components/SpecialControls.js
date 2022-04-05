import { useContext } from "react"
import { Context } from "../Context/Context"

const SpecialControls = ()=>{

    const { shadeState } = useContext(Context)
    const [shade ,setShade] = shadeState


return (
    <div className="SpecialControlsContainer">
        <button style={{color:`${shade}`}} className="SpecialControls">C</button>
        <button style={{color:`${shade}`}} className="SpecialControls">+/-</button>
        <button style={{color:`${shade}`}} className="SpecialControls">%</button>
    </div>

)

}

export default SpecialControls

