import { useContext } from "react"
import { Context } from "../Context/Context"

const Operators = ()=>{
    const { shadeState } = useContext(Context)
    const [shade ,setShade] = shadeState

    const { operatorState } = useContext(Context)
    const [operator ,setOperator] = operatorState

    let x = "\u00D7"

    let operators = ['÷',x,'-','+']

return(
    <div className="OperatorsContainer">
    {operators.map((operat,i)=>{
        return(
        <button
        style={{color:`${shade}`}}
        className="Operators"
        key={i}
        onClick={()=>{ setOperator(operat) }

        }
        >{operat}</button>
        )
    })
    }
    <button
    style={{color:`${shade}`}}
    className="Operators"> = </button>
    </div>


)
}
export default Operators