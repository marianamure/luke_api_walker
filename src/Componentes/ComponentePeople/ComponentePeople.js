import { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom";

const ComponentePeople = (props) => {

    const [respuesta, setRespuesta] = useState({})
    const { id: charid } = useParams();

    
    useEffect(() => {
        axios.get("https://swapi.dev/api/people/"+charid)
        .then(result => result.data)
        .then(response => {
            console.log(response);
            setRespuesta(response)
        })
        .catch(err => console.log("Hubo un error" + err)); 
    }, [])       

    return (
        <div>
            <h1> {respuesta.name}</h1>
            <p><b>Height:</b> {respuesta.height}</p>
            <p><b>Mass:</b> {respuesta.mass}</p>
            <p><b>Hair Color:</b> {respuesta.hair_color}</p>
        </div>
            

    )
}

export default ComponentePeople;