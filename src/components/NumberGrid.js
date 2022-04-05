import SingleRowNumbers from "./SingleRowNumbers"

import { useContext } from "react"
import { Context } from "../Context/Context"


const NumberGrid=()=>{

    const { shadeState } = useContext(Context)
    const [shade ,setShade] = shadeState


    let numbers = {
        a:[7,8,9],
        b:[4,5,6],
        c:[1,2,3]
    }
    let bottomNumb = [0,"."]
    return(
    <table className="NumerGrid">
        {
            Object.values(numbers).map((numb,k)=>{
                return(
                <SingleRowNumbers key={k} numb={numb}></SingleRowNumbers>
                )
            })
        }
        <tr>
            <th colSpan={2}><button style={{color:`${shade}`}} className="NumberButton0">0</button></th>
            <th><button style={{color:`${shade}`}}  className="NumberButton">.</button></th>
        </tr>
    </table>
    )
}

export default NumberGrid