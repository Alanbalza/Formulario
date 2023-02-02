import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from "../pages/Login";
import Registration from '../pages/Registration';
import Regist from '../pages/Regist';
import RickAndMorty from '../pages/RickAndMorty';
function App() {
    return (
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/Registration" element={<Registration/>}/>
        <Route path="/Regist" element={<Regist/>}/>
        <Route path="/RickAndMorty" element={<RickAndMorty/>}/>
        
        </Routes>
        </BrowserRouter>
);
}

export default App;