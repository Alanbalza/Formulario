import { useRef } from "react";
import { Link } from "react-router-dom";
import {useState} from 'react'

import LogoRegist from "../../assets/img/occ.png";

function FormRegister() {
    
    const formData1=useRef();
    const [NuLi,setNuLi]=useState("")
    const handlerClick = (e) => {
        e.preventDefault();
        const formData=new FormData(formData1.current);
        let URI="http://34.225.239.102/api/autobus/register"
        console.log(formData.get('tipo'));
        let options={
            method:'POST',
            headers:{ "Content-Type":'application/json'},
            body:JSON.stringify({
                    clave:formData.get('clave'),
                    placa:formData.get('placa') ,
                    numasientos: formData.get('numasientos'),
                    fecha: formData.get('fecha'),
                    tipo: formData.get('tipo'),
                    nombre: formData.get('nombre'),
                    licencia:formData.get('licencia') 
            })
        }
        fetch(URI,options)
        .then(response=> response.json())
        .then(data=>{alert(JSON.stringify(data))})
    };
    const handlerClickG=(e)=>{
        e.preventDefault();
        let Rnum=Math.floor(Math.random() * 10000000 + 1000000);
        console.log(Rnum);
        setNuLi(Rnum)
    }
    return (
        <form ref={formData1}>
            <div className="LittleBoxy">
                <img src={LogoRegist} alt="" />
            </div>
            <div className="LittleBoxy">
                <label htmlFor="Clave autobus">
                    Clave autobus
                    <input id="ClaveAutobus" type="text" name="clave" />
                </label>
                <label htmlFor="Placa autobus">
                    Placa autobus
                    <input id="PlacaAutobus" type="text" name="placa"/>
                </label>
            </div>
            <div className="LittleBoxy">
                <label htmlFor="Número de asientos">
                    Número de asientos
                    <input id="NúmeroAsientos" type="number"name="numasientos" />
                </label>
                <div className="LittleBoxy">
                    <label htmlFor="Fecha de alta">
                        Fecha de alta
                        <input id="FechaAlta" type="date" name="fecha"/>
                    </label>
                </div>
            </div>
            <div className="LittleBoxy">
                <label htmlFor="Tipo">Tipo</label>
                <select name="tipo">
                    <option value="Turismo">Turismo</option>
                    <option value="Lujo">Lujo</option>
                </select>
            </div>
            <div className="LittleBoxy">
                <label htmlFor="Nombre del Chofer">
                    Nombre del Chofer
                    <input id="NombreChofer" type="text" name="nombre" />
                </label>
            </div>
            <div className="LittleBoxy">
                <label htmlFor="Numero de licencia">
                    Numero de licencia
                    <input id="Numerolicencia" 
                    value={NuLi}  type="text" name="licencia" />

                    <div className="LittleBoxy">
                    <button onClick={handlerClickG}>Generar</button>
                    </div>
                </label>
            </div>

            <div className="LittleBoxy">
                <button onClick={handlerClick}>Alta autobus</button>
            </div>
            <div className="LittleBoxy">
                <Link to="/">Log Out</Link>
            </div>
        </form>
    );
}
export default FormRegister;