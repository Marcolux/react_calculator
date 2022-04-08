import { useContext, useEffect} from "react"
import { Context } from "../Context/Context"



const DisplayCount = (props)=>{

    const {countState } = useContext(Context)
    const [count, setCount] = countState

    let newCount
    const checkForDot=()=>{
        let dotInCount = Array.from(String(Number(count))).includes(".")
        let doubleZero = String(Number(count)).split(".")[1]
        console.log(doubleZero)
        
        // if(dotInCount){}
    }

    // useEffect(checkForDot,[])

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