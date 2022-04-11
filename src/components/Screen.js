import { useContext, useState, useEffect } from "react"
import { Context } from "../Context/Context"
import FirstScreen from "./FirstScreen"
import GameOnScreen from "./GameOnScreen"



const Screen =()=>{
    const { shadeState } = useContext(Context)
    const [shade ,setShade] = shadeState
    
    const {firstNumberState } = useContext(Context)
    const [firstNumber, setFirstNumber] = firstNumberState

    const { numberToAddState } = useContext(Context)
    const [numberToAdd ,setNumberToAdd] = numberToAddState

    const {countState } = useContext(Context)
    const [count, setCount] = countState
    
    const {initialConditionState } = useContext(Context)
    const [initialCondition, setInitialCondition] = initialConditionState

    
    // console.log("count",count,"first number to add", numberToAdd)
    
    

    const checkInitialCondition =()=>{
        if(!count&&!numberToAdd&&firstNumber.length===0){
            setInitialCondition(true)
        }else if(count||numberToAdd.length>0||firstNumber.length>0){
            setInitialCondition(false)
        }else if(!count&&numberToAdd.length===0&&firstNumber.length===0){
            setInitialCondition(true)
        }
    }
    checkInitialCondition()

    return(
        <div style={{color:`${shade}`}} className="Screen">
           {initialCondition===true?
            <FirstScreen></FirstScreen>
           :
            <GameOnScreen></GameOnScreen>
            }
        </div>
    )
}

export default Screen