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

    
    let results = 0
    
    const equalFunction = ()=>{
        numberToAdd?finalCount.push(numberToAdd):console.log('nope')
        // setFinalCount([])


        if(operator==='÷'){
        results = finalCount[0]/finalCount[1]
        finalCount.length=0
        setCount(results)
        setNumberToAdd()
        setOperator("")
        // finalCount.push(results)

        }else if(operator===x){
            results = finalCount[0]*finalCount[1]
            finalCount.length=0
            setNumberToAdd()
            setCount(results)
            setOperator("")
           
        }
        else if(operator==='-'){
            results = finalCount[0]-finalCount[1]
            finalCount.length=0
            setCount(results)
            setNumberToAdd()
            setOperator("")
        }
        else if(operator==='+'){
            results = finalCount[0]+finalCount[1]
            finalCount.length=0
            setNumberToAdd()
            setCount(results)
            setOperator("")
        }
       
       
        operator===""?finalCount.length = 0:finalCount.push(results)
        results = 0
        
        // setNumberToAdd(count)
        console.log("finalCount",finalCount, "final results",results)
    }
    console.log("finalCount",finalCount, "final results",results)
    const operatorSelection= ()=>{
            setCount()
            setFirstNumber([])
            if(finalCount.length<2 && numberToAdd!==undefined){
                finalCount.push(numberToAdd)
            }else if(finalCount.length=2){
                    finalCount.length=1
            }
            else if(operator===""){
                finalCount.shift()
            }
            
            console.log("finalCount",finalCount)
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
            console.log(finalCount)
         }

        }
        >{operat}</button>
        )
    })
    }
    <button
    style={{color:`${shade}`}}
    className="Operators"
    onClick={()=>{
        equalFunction()

    }
}
    > = </button>
    </div>


)
}
export default Operators