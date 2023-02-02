import {Link} from "react-router-dom" 
import { useRef } from "react";
import FormLogin from "../components/atoms/FormLogin";
import "../assets/style/style.css"
function Home(){
    const formL=useRef();

    return(
        <>
        <div className="Father">
            <div className="Child">
                
            <FormLogin/>
            </div>
        </div>
       </>
    )
}
export default Home;