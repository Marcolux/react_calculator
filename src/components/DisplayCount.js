import { useContext, useEffect} from "react"
import { Context } from "../Context/Context"



const DisplayCount = (props)=>{

    const {countState } = useContext(Context)
    const [count, setCount] = countState

    let newCount 
    const checkForDot=()=>{
        let dotInCount = Array.from(String(Number(count))).includes(".")
        let doubleZero = String(Number(count)).split(".")[1]
       
        
        if(dotInCount){
            if(doubleZero===0){
                setCount(count)
            }else if(doubleZero>0){
                if(Array.from(String(Number(count))).length<11){
                    newCount = count
                }else{
                    let arr = Array.from(String(Number(count)))
                    if(arr.length <11){
                        newCount = count
                    }else if(arr.length>=11){
                        arr.length = 11
                        newCount = arr.join("")
                    }
                }
                setCount(newCount)
            }
        }
    }

    useEffect(checkForDot,[])
    
    return(
        <>
            {
            count<99999999?
                <>    
                    {
                    newCount?
                        <p className="numbersOnTheScreen">{newCount}</p>
                        :
                        <p className="numbersOnTheScreen">{count}</p>
                    }
                </>
                :
                <>
                    <p style={{fontSize:'25px'}} className="numbersOnTheScreenText">{props.screenResult}</p>
                </>
            }
    </>

    )

}

export default DisplayCount