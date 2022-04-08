import SingleRowNumbers from "./SingleRowNumbers"

import { useContext, useState } from "react"
import { Context } from "../Context/Context"


const NumberGrid=()=>{

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



    let numbers = {
        a:[7,8,9],
        b:[4,5,6],
        c:[1,2,3]
    }


    

    const createNumber = (number) =>{

        firstNumber.length<11 ? firstNumber.push(number.target.innerText):firstNumber.length = 11

        setNumberToAdd(firstNumber.join(''))
        if(operator===""){
            setCount()
            setFinalCount([])
        }
    }
    console.log(firstNumber)
    return(
    <table className="NumerGrid">
        <tbody>

        {
            Object.values(numbers).map((numb,k)=>{
                return(
                    <SingleRowNumbers 
                    key={k} 
                    numb={numb}
                    createNumber={createNumber}
                    
                    ></SingleRowNumbers>
                    )
                })
            }
        </tbody>
        <tfoot>
            <tr>
                <th colSpan={2}>
                    <button
                    onClick={(e)=>{
                        createNumber(e)
                    console.log(e)
                    }}
                    style={{color:`${shade}`}}
                    className="NumberButton0">0</button>
                </th>
                <th>
                    <button onClick={(e)=>{
                        firstNumber.includes(".")?alert('already in'):createNumber(e)
                    }} style={{color:`${shade}`}}  className="NumberButton">.</button>
                </th>
            </tr>
        </tfoot>
    </table>
    )
}

export default NumberGrid