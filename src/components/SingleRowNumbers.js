import { useContext } from "react"
import { Context } from "../Context/Context"


const SingleRowNumbers = (props)=>{

    const { shadeState } = useContext(Context)
    const [shade ,setShade] = shadeState


    return(
        <tr>
        {
            props.numb.map((number,i)=>{
                return(
                    <th key={i}><button onClick={props.createNumber} style={{color:`${shade}`}} className=" NumberButton" >{number}</button></th>
                )
            })
        }
                        
        </tr>
    )
}

export default SingleRowNumbers