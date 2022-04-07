import { useContext, useState, useEffect } from "react"
import { Context } from "../Context/Context"
const DisplayNumber =(props)=>{


    const { numberToAddState } = useContext(Context)
    const [numberToAdd ,setNumberToAdd] = numberToAddState


    return( 
        
        numberToAdd?
        <>
            {numberToAdd<9999999999?
            <p className="numbersOnTheScreen">{numberToAdd}</p>
            :
            <>
            <p style={{fontSize:'30px'}} className="numbersOnTheScreen">{props.screenResult}</p>
            </>
            }
        </>
        :
        
        <p className="numbersOnTheScreen">{0}</p>
    )
}

export default DisplayNumber