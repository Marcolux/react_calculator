const SingleRowNumbers = (props)=>{

    return(
        <tr>
        {
            props.numb.map((number,i)=>{
                return(
                    <th key={i}><button className=" NumberButton" >{number}</button></th>
                )
            })
        }
                        
        </tr>
    )
}

export default SingleRowNumbers