import SingleRowNumbers from "./SingleRowNumbers"

const NumberGrid=()=>{

    let numbers = {
        a:[1,2,3],
        b:[4,5,6],
        c:[7,8,9]
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
            <th colSpan={2}><button className="NumberButton0">0</button></th>
            <th><button  className="NumberButton">.</button></th>
        </tr>
    </table>
    )
}

export default NumberGrid