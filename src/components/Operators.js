const Operators = ()=>{

    let operators = ['÷','x','-','+',"="]

return(
    <div className="OperatorsContainer">
    {operators.map((operat,i)=>{
        return(
        <button className="Operators" key={i}>{operat}</button>
        )
    })
    }
    </div>


)
}
export default Operators