import SwitchButton from "./SwitchBall"
import { useState, useContext } from "react"

const Switch = ()=>{

    const [backGround, setBackGround] = useState('#9FC5FF')
    const [position, setPosition] = useState('flex-start')

    

    return(
        <div style={{
            backgroundColor:`${backGround}`,
            justifyContent:`${position}`
             }} className="Switch">
            <SwitchButton 
            backGround={backGround}
            setBackGround={setBackGround}
            position ={position}
            setPosition ={setPosition}
            ></SwitchButton>
        </div>
    )
}

export default Switch