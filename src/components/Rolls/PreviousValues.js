function PreviousValues({prev}){
    return(
        <div className="previousValues">
            <h2>Предыдущие броски</h2>
                {prev.map((el,i)=>
                    <div className="oneprev">
                        <h3>{prev.length-i}. {el.skill}: </h3>
                        <h3 className={`${el.fum ? 'fumble' : ''} ${el.crit ? 'crit' : ''}`}>{el.result} + {el.baza} = {el.result + el.baza}</h3>
                    </div>)
                }
        </div>
    )
}

export default PreviousValues