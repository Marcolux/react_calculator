import { useState, useContext } from "react"
import { Context } from "../Context/Context"


const SwitchButton =(props)=>{

    const [position, setPosition] = useState('0')

    const { shadeState } = useContext(Context)
    const [shade ,setShade] = shadeState
    
    
    const switchFunc = () =>{
        if(props.backGround === ''&& shade === 'var(--color1)'){ 
            props.setBackGround('#9FC5FF')
            setPosition('48%')
            setShade('var(--color2)')

        }else{ 
                props.setBackGround('') 
                setPosition('0%')
                setShade('var(--color1)')
        }
    }

    return(
        <button style={{marginLeft:`${position}`}}  onClick={switchFunc} className="SwitchButton"></button>

    )
}


export default SwitchButton

