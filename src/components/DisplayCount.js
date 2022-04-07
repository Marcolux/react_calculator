import { useContext} from "react"
import { Context } from "../Context/Context"



const DisplayCount = (props)=>{

    const {countState } = useContext(Context)
    const [count, setCount] = countState

    console.log("array",Array.from(String(Number(count))).includes("."))
    return(
        <>
            {
            count<99999999?
                <>    
                    {
                    Array.from(String(Number(count))).includes(".")?
                    
                        <p className="numbersOnTheScreen">{count.toFixed(2)}</p>
                        :
                        <p className="numbersOnTheScreen">{count}</p>
                    }
                </>
                :
                <>
                    <p style={{fontSize:'30px'}} className="numbersOnTheScreen">{props.screenResult}</p>
                </>
            }
    </>

    )

}

export default DisplayCount