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

    


    let numbers = {
        a:[7,8,9],
        b:[4,5,6],
        c:[1,2,3]
    }

    

    const createNumber = (number) =>{

        firstNumber.push(number.target.innerText)

        setNumberToAdd(Number(firstNumber.join('')))

    }

    return(
    <table className="NumerGrid">
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
        <tr>
            <th colSpan={2}><button onClick={createNumber} style={{color:`${shade}`}} className="NumberButton0">0</button></th>
            <th><button onClick={(e)=>{
                firstNumber.includes(".")?alert('already in'):createNumber(e)
            }} style={{color:`${shade}`}}  className="NumberButton">.</button></th>
        </tr>
    </table>
    )
}

export default NumberGrid