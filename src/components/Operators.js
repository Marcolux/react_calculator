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
        console.log(results)
        console.log(Array.from(String(results)).length)
        if(Array.from(String(results)).length>10){
            let newResults = Array.from(String(results))
            newResults.length = 11
            results = Number(newResults.join(''))
            setCount(Number(results))
        }else if(Array.from(String(results)).length<11)
        {setCount(results)}
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
            // setCount()
            setFirstNumber([])
            if(numberToAdd===firstNumber.join('')){
                finalCount.push(numberToAdd)}
            if(numberToAdd&&!count){
                setCount(numberToAdd)
                setFinalCount([numberToAdd])
            }
            if(finalCount.length===2 && numberToAdd){
                console.log("count",count)
                equalFunction()
                // setCount()
                setNumberToAdd(finalCount[0])
            }
            else if(finalCount.length<2&&count){
                if(Array.from(String(count)).length>10){
                    let newArr = Array.from(String(count))
                    newArr.length = 10
                    console.log(Number(newArr))
                    setCount(Number(newArr))
                }
                setFinalCount([count])
            }
            else if(finalCount.length<2&&numberToAdd){
                setFinalCount([numberToAdd])
                // setNumberToAdd(numberToAdd)
            }
            else if(operator===""){
                finalCount.shift()
            }

            
    } 
        console.log(finalCount,finalCount.length)
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