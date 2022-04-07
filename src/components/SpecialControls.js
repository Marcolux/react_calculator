import { useContext } from "react"
import App from "../App"
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

    const { operatorState } = useContext(Context)
    const [operator ,setOperator] = operatorState

    const {finalCountState } = useContext(Context)
    const [finalCount, setFinalCount] = finalCountState
    
return (
    <div className="SpecialControlsContainer">
        <button onClick={()=>{
            setNumberToAdd([])
            setFirstNumber([])
            setCount(0)
            setOperator('')
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
            console.log('nA',numberToAdd,'count',count)
            // setFinalCount([])
            if(numberToAdd){
                numberToAdd<0?setNumberToAdd((numberToAdd*0.01)):setNumberToAdd((numberToAdd/100))
                setFirstNumber([])
                setFinalCount([])
                
            }
            else if(count){
                count<0?setCount((count*0.01)):setCount((count/100))
                setFirstNumber([])
                setFinalCount([])
            }
        }}
        >%</button>
    </div>

)

}

export default SpecialControls

