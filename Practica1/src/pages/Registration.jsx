import { useRef } from "react";
import {Link} from "react-router-dom"
import FormResgistration from "../components/atoms/FormRegistration";
function Registration(){
    return(
        <>
       <div className="Father">
            <div className="Child">
            <FormResgistration/>
            </div>
        </div>
        
        
        </>
    )
}
export default Registration;