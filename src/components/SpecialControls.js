import { useContext } from "react"
import { Context } from "../Context/Context"

const SpecialControls = ()=>{

    const { shadeState } = useContext(Context)
    const [shade ,setShade] = shadeState

    const { numberToAddState } = useContext(Context)
    const [numberToAdd ,setNumberToAdd] = numberToAddState
    const {firstNumberState } = useContext(Context)
    const [firstNumber, setFirstNumber] = firstNumberState
    const {countState } = useContext(Context)
    const [count, setCount] = countState
    
return (
    <div className="SpecialControlsContainer">
        <button onClick={()=>{
            setNumberToAdd([])
            setFirstNumber([])
            setCount(0)
            console.log(count)
            
            }} style={{color:`${shade}`}} className="SpecialControls">C</button>
        <button
        style={{color:`${shade}`}}
        className="SpecialControls"
        onClick={()=>{
            setNumberToAdd((Number(firstNumber.join(''))*(-1)))
            firstNumber.includes('-')?firstNumber.shift():firstNumber.unshift('-')
           
        }}
        >±</button>
        <button 
        style={{color:`${shade}`}}
        className="SpecialControls"
        onClick={()=>{
            numberToAdd<0?setNumberToAdd((numberToAdd*0.01).toFixed(4)):setNumberToAdd((numberToAdd/100).toFixed(4))
            setFirstNumber([])
        }}
        >%</button>
    </div>

)

}

export default SpecialControls

