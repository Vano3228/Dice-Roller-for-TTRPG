import counter from "./counter";
function MainForm({setRes,res,err,setErr}) {
    const reset = () =>{
        setRes({arr:[],len:0})
    }

    return(
        <div className="mainForm">
            <form onSubmit={(event) => {
                event.preventDefault()
                const cubsNum = event.target.inputCubsNum.value
                const cubValue = event.target.inputCubValue.value
                const data = {cubsNum,cubValue}
                try{
                    setErr(false)
                    console.log(data)
                    counter(data, setRes, res)

                } catch(error) {
                    setErr(error)
                }
            }}>

                <label> <p>Введите количество кубиков </p></label>
                <input type="number" min="1" name="inputCubsNum" defaultValue={1}/>
                <label> <p>Введите количество граней на одном кубике</p></label>
                <input type="number" min="2" name="inputCubValue" defaultValue={2}/>
                <label></label>
                <button>Посчитать</button>
                {!!res.len && <button onClick={reset}>Reset</button>}
                <>
                    <label><p>Панель быстрых бросоков</p></label>
                    <button type='button' onClick={()=>{
                        counter({cubsNum:"1",cubValue:"20"}, setRes, res)
                    }}>1к20</button>
                    <button type='button' onClick={()=>{
                        counter({cubsNum:"1",cubValue:"12"}, setRes, res)
                    }}>1к12</button>
                    <button type='button' onClick={()=>{
                        counter({cubsNum:"1",cubValue:"10"}, setRes, res)
                    }}>1к10</button>
                    <button type='button' onClick={()=>{
                        counter({cubsNum:"1",cubValue:"8"}, setRes, res)
                    }}>1к8</button>
                    <button type='button' onClick={()=>{
                        counter({cubsNum:"1",cubValue:"6"}, setRes, res)
                    }}>1к6</button>
                    <button type='button' onClick={()=>{
                        counter({cubsNum:"1",cubValue:"4"}, setRes, res)
                    }}>1к4</button>
                </>
            </form>
            {!!err
                ? <h2>{err}</h2>
                : (!!res.len  && <div>
                    <h2>Результат:</h2>
                    <h3>{res.arr[0]}</h3>
                </div>)}
        </div>
    )
}

export default MainForm