import { useContext } from "react"
import { Context } from "../Context/Context"


const SwitchButton =(props)=>{

    const { shadeState } = useContext(Context)
    const [shade ,setShade] = shadeState
    
    
    const switchFunc = () =>{
        if(props.backGround === ''&& shade === 'var(--color1)'){ 
            props.setBackGround('#9FC5FF')
            props.setPosition('flex-end')
            setShade('var(--color2)')

        }else{ 
                props.setBackGround('') 
                props.setPosition('flex-start')
                setShade('var(--color1)')
        }
    }

    return(
        <button  onClick={switchFunc} className="SwitchButton"></button>

    )
}


export default SwitchButton

