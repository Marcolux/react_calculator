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
            finalCount.shift()
            let newNumber 
            if(numberToAdd){
                if(numberToAdd<0){
                   newNumber=numberToAdd*0.01
                }else{newNumber=numberToAdd/100}
                setNumberToAdd(newNumber)
                setFirstNumber([])
                setFinalCount([newNumber])
                console.log('nA',numberToAdd,'count',count)
                
            }
            else if(count){
                if(count<0){newNumber=count*0.01}
                else{newNumber=count/100}
                setFirstNumber([])
                setCount(newNumber)
                setFinalCount([newNumber])
                console.log('nA',numberToAdd,'count',count)
            }
        }}
        >%</button>
    </div>

)

}

export default SpecialControls

