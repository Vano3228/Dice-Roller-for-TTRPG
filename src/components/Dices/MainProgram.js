import {useState} from "react";
import PreviousValues from "./PreviousValues";
import MainForm from "./MainForm";
function MainProgram() {
    const [res, setRes] = useState({arr:[],len:0})
    const [err, setErr] = useState(false)
    return (
        <div className="main">
            <MainForm res={res} setRes={setRes} setErr={setErr} err={err}/>
            {!!res.len && <PreviousValues res={res}/>}
        </div>
    );
}

export default MainProgram