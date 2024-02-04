import InputForm from "./InputForm";
import {useState} from "react";
function Main() {
    const [prev, setPrev] = useState([])
    return(
        <div className="main">
            <InputForm prev={prev} setPrev={setPrev}/>
        </div>
    )
}

export default Main