import {useState} from "react";
import roll from "./roll"
import PreviousValues from "./PreviousValues";

function InputForm({prev, setPrev}) {
    const [res,setRes] = useState({res:null, fum:null, crit:null, skill:''})
    return(
        <div>
            <div className="rollForm">
                <form onSubmit={(event) => {
                    event.preventDefault()
                    const base = event.target.base.value
                    const skill = event.target.skill.value
                    roll(base, setRes, skill, prev, setPrev)
                }}>
                    <label><p>Выберите навык для броска</p></label>
                    <input type="text" name='skill' maxLength={20}/>
                    <label><p>Введите значение базы навыка</p></label>
                    <input type="number" name="base"/>
                    <label></label>
                    <button>Бросок</button>
                    <button type='button' onClick={()=> {
                        setPrev([])
                        setRes({res:null})
                    }}>Reset</button>
                </form>
            </div>
            {!!res.result && <div className="result">
                <h2>Результат броска на {res.skill}</h2>
                <h2> <p title="Значение кубика" className={`${res.fum ? 'fumble' : ''} ${res.crit ? 'crit' : ''}`}>{res.result}</p> + {res.baza} = {res.result + res.baza}</h2>
                {res.fum && <h2 className="fumble">Критическая неудача (Jockerge)</h2>}
                {res.crit && <h2 className="crit">Кричитеческий успех (Пабеда)</h2>}
            </div>}
            {!!prev.length && <PreviousValues prev={prev}/>}
        </div>
    )
}

export default InputForm