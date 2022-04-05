import SwitchButton from "./SwitchBall"
import { useState, useContext } from "react"

const Switch = ()=>{

    const [backGround, setBackGround] = useState('')
    

    

    return(
        <div style={{
            backgroundColor:`${backGround}`
             }} className="Switch">
            <SwitchButton 
            backGround={backGround}
            setBackGround={setBackGround}
            ></SwitchButton>
        </div>
    )
}

export default Switch