import SwitchButton from "./SwitchBall"
import { useState, useContext } from "react"
import { Context } from "../Context/Context"

const Switch = ()=>{

    const [backGround, setBackGround] = useState('')

    const { shadeState } = useContext(Context)
    const [shade ,setShade] = shadeState
    

    

    return(
        <div className="switch_enanched">
        <div style={{backgroundColor:`${backGround}`}} className="Switch">
            <SwitchButton backGround={backGround}setBackGround={setBackGround}></SwitchButton>
        </div>
            <p style={{color:`${shade}`}} className="enanched">{'Contrast Enhanced'}</p>
        </div>
    )
}

export default Switch