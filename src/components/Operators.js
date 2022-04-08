import { useContext, useState } from "react"
import { Context } from "../Context/Context"

const Operators = ()=>{

    const { shadeState } = useContext(Context)
    const [shade ,setShade] = shadeState

    const { operatorState } = useContext(Context)
    const [operator ,setOperator] = operatorState

    const { numberToAddState } = useContext(Context)
    const [numberToAdd ,setNumberToAdd] = numberToAddState

    const {firstNumberState } = useContext(Context)
    const [firstNumber, setFirstNumber] = firstNumberState

    const {countState } = useContext(Context)
    const [count, setCount] = countState

    const {finalCountState } = useContext(Context)
    const [finalCount, setFinalCount] = finalCountState

    let x = "\u00D7"

    let operators = ['÷', x, '-' , '+' ]

    
    const equalFunctionHelper =()=>{
        finalCount.length=0
        setCount(results)
        setNumberToAdd()
        setOperator("")
        setFirstNumber([])
    }
    
    let results = 0
    const equalFunction = ()=>{
        
        numberToAdd?finalCount.push(numberToAdd):console.log('nope')
        
        if(operator==='÷'){
            results = Number(finalCount[0])/Number(finalCount[1])
            equalFunctionHelper()
        }else if(operator===x){
            results = Number(finalCount[0])*Number(finalCount[1])
            equalFunctionHelper()
        }else if(operator==='-'){
            results = Number(finalCount[0])-Number(finalCount[1])
            equalFunctionHelper()
        }else if(operator==='+'){
            results = Number(finalCount[0])+Number(finalCount[1])
            equalFunctionHelper()
        }
        operator===""?finalCount.length = 0:finalCount.push(results)
    }
    const operatorSelection= ()=>{
            setCount()
            setFirstNumber([])
            
            if(finalCount.length<2 && numberToAdd){
                setFinalCount([numberToAdd])
            }
            else if(finalCount.length<2&&count){
                setFinalCount([count])
            }
            else if(operator===""){
                finalCount.shift()
            }
    }
return(
    <div className="OperatorsContainer">
    {operators.map((operat,i)=>{
        return(
        <button
        style={{color:`${shade}`}}
        className="Operators"
        key={i}
        onClick={()=>{ 
            operatorSelection()
            setOperator(operat)
        }}
        >{operat}</button>
        )
    })
    }
    <button
    style={{color:`${shade}`}}
    className="Operators"
    onClick={()=>{
        equalFunction()
    }}> = </button>
    </div>


)
}
export default Operators