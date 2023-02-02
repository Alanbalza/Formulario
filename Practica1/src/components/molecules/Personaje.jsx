

function Personaje({img, name, status, gender, planet}){
    
    return(
        <div className="character">
        <img className="imgCaracters" src={img} alt={name} />
       </div>
    )
}
export default Personaje;