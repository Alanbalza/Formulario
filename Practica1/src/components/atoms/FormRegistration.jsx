import { useRef } from "react";
import {Link} from "react-router-dom" 
import LogoRegistration from "../../assets/img/avatar.png"

function FormResgistration(){
    const formR=useRef();
    const handlerClick=(e)=>{
        e.preventDefault();
        const formData=new FormData(formR.current)
        let URL="http://34.225.239.102/api/registrar/usuario"
        console.log(formData.get('tipo'))
        let options={
            method:'POST',
            headers:{ "Content-Type":'application/json'},
            body:JSON.stringify({
                
            nombre:formData.get('nombre'),
            usuario: formData.get('users'),
            correo: formData.get('email'),
            contraseña: formData.get('password'),
                  
            })
            
        }
        fetch(URL,options)
        .then(response=> response.json())
        .then(data=>{alert(JSON.stringify(data))})
    }
    return(
        <form ref={formR}>
           <div className="LittleBoxy">
                <img className="LogosGeneric" src={LogoRegistration} alt="" />
            </div>
            <div className="LittleBoxy"><label htmlFor="name" >Name</label></div>
            <div className="LittleBoxy"><input type="text" name="nombre"/></div>
            <div className="LittleBoxy"><label htmlFor="E.Mail">E.Mail</label></div>
            <div className="LittleBoxy"><input type="text" name="email"/></div>
            <div className="LittleBoxy"><label htmlFor="Usernme">Username</label></div>
            <div className="LittleBoxy"><input type="text" name="users"/></div>
            <div className="LittleBoxy"><label htmlFor="password">Password</label></div>
            <div className="LittleBoxy"><input type="text" name="password"/></div>
            <div className="LittleBoxy">
            <button onClick={handlerClick}>Registro</button>
            </div>
            <div className="LittleBoxy">
            <Link to="/">Ya tengo cuenta </Link>
            </div>
        </form>
    )
}
export default FormResgistration;