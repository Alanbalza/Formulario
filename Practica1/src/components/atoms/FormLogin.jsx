import { useRef } from "react";
import {Link} from "react-router-dom" 
import LogoLogin from "../../assets/img/login1.png"
import "../../assets/style/Regist.css"

function FormLogin(){
    
    const form1=useRef();
    const handlerClick=(e)=>{
        e.preventDefault();
        to="/Regist"
    }
    return(
        <form ref={form1}>
            <div className="LittleBoxy">
                { <img className="LogosGeneric" src={LogoLogin} alt="" /> }
            </div>
            
            <div className="LittleBoxy"><h1>Login</h1></div>
            <div className="LittleBoxy"><label htmlFor="username">Username</label></div>
            <div className="LittleBoxy"><input type="text" /></div>
            <div className="LittleBoxy"><label htmlFor="password">Password</label></div>
            <div className="LittleBoxy"><input type="password" /></div>

            <div className="LittleBoxy">
            <button onClick={handlerClick}>Iniciar Sesion </button>
            <Link to="/Regist"><button>Registrar Autobus</button></Link>
            <Link to="/Registration">No tienes cuenta?, registrate</Link>
            <Link to="/RickAndMorty"><button> RickAndMorty</button></Link>
            </div>
        </form>
    )
}
export default FormLogin;