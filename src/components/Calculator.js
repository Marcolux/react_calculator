import NumberGrid from "./NumberGrid"
import Operators from "./Operators"
import Screen from "./Screen"
import SpecialControls from "./SpecialControls"
import Switch from "./Switch"

const Calculator = () => {

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