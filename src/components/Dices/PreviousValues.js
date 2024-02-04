function PreviousValues({res}) {

    return(
        <div className="prevValues">
            <h2>Предыдущие результаты:</h2>
            {res.arr.map((el,i)=> <h3>{res.len - i}) {el}</h3>)}
        </div>
    )
}

export default PreviousValues