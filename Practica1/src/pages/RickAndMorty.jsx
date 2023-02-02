import ListaPesonajes from "../components/Organism/ListaPesonajes";
import "../assets/style/RickAndMorty.css"
function RickAndMorty(){
    return(
        <>
       <div className="FatherMorty">
            <div className="ChildRick">
            <ListaPesonajes/>
            </div>
        </div>
        </>
    )
}
export default RickAndMorty;