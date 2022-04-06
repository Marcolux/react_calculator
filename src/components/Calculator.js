import NumberGrid from "./NumberGrid"
import Operators from "./Operators"
import Screen from "./Screen"
import SpecialControls from "./SpecialControls"
import Switch from "./Switch"

import { useContext } from "react"
import { Context } from "../Context/Context"

const Calculator = () => {

    const { operatorState } = useContext(Context)
    const [operator ,setOperator] = operatorState

    

    return (
       <div className="Calculator">
           <Switch></Switch>
           <Screen></Screen>
           <Operators></Operators>
           <SpecialControls></SpecialControls>
           <NumberGrid></NumberGrid>

       </div> 

    )
}


export default Calculator