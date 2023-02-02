import { useRef } from "react";
import {Link} from "react-router-dom" 
import LogoLogin from "../../assets/img/login1.png"
import "../../assets/style/Registro.css"

function FormLogin(){
    
    const form1=useRef();
    const handlerClick=(e)=>{
        e.preventDefault();
        const formData = new FormData(form1.current);
        let URL="http://34.225.239.102/api/iniciar";
        console.log(formData.get(''));
        let options ={
            method:'POST',
            headers:{"Content-Type":"'application/json"},
            body:JSON.stringify({
                
                    usuario: formData.get('usuario'),
                    contrasenia: formData.get('contrasenia')
                  
            })
        }
        fetch(URL ,options)
        .then(response => response.json())
        .then(data=>{alert(JSON.stringify(data))})
    }
    return(
        <form ref={form1}>
            <div className="LittleBoxy">
                { <img className="LogosGeneric" src={LogoLogin} alt="" /> }
            </div>
            
            <div className="LittleBoxy"><h1>Login</h1></div>
            <div className="LittleBoxy"><label htmlFor="username">Username</label></div>
            <div className="LittleBoxy"><input type="text" name="usuario"/></div>
            <div className="LittleBoxy"><label htmlFor="password">Password</label></div>
            <div className="LittleBoxy"><input type="password" name="contrasenia"/></div>

            <div className="LittleBoxy">
            <button onClick={handlerClick} >Iniciar Sesion </button>
            <Link to="/Regist"><button>Registrar Autobus</button></Link>
            <Link to="/Registration">No tienes cuenta?, registrate</Link>
            <Link to="/RickAndMorty"><button> RickAndMorty</button></Link>
            </div>
        </form>
    )
}
export default FormLogin;