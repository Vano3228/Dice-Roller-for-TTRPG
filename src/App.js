import Header from "./components/Header";
import Footer from "./components/Footer"
import MainProgram from "./components/Dices/MainProgram";
import Welcome from "./components/Welcome";
import {Routes, Route, BrowserRouter} from"react-router-dom"
import './App.css';
import Main from "./components/Rolls/Main";

function App() {
  return (
    <BrowserRouter>
        <div className="App">
            <Header/>
            <Routes>
                <Route element={<MainProgram />} path='dice'/>
                <Route element={<Main />} path='roll'/>
                <Route element={<Welcome/>} path='*'/>
            </Routes>
            <Footer/>
        </div>
    </BrowserRouter>
  );
}

export default App;
