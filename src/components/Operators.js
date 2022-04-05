import { useContext } from "react"
import { Context } from "../Context/Context"

const Operators = ()=>{
    const { shadeState } = useContext(Context)
    const [shade ,setShade] = shadeState

    let x = "\u00D7"

    let operators = ['÷',x,'-','+',"="]

return(
    <div className="OperatorsContainer">
    {operators.map((operat,i)=>{
        return(
        <button style={{color:`${shade}`}} className="Operators" key={i}>{operat}</button>
        )
    })
    }
    </div>


)
}
export default Operators