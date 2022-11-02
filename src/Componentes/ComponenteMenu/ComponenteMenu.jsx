import { useState } from "react"
import axios from "axios"
//import th.jpg from "../public/th.jpg"

const Menu = () => {

    const [categoria, setCategoria] = useState("people");
    const [id, setId] = useState ("")
    const [respuesta, setRespuesta] = useState({})
    const [categoriaUrl, setCategoriaUrl] = useState("people");
    

    const buscar = (e) => {
        e.preventDefault ();
        console.log(categoriaUrl, id);

        let url = "https://swapi.dev/api/";
        url += categoriaUrl + "/" + id;
        console.log(url)

        axios.get(url)
        .then(result => result.data)
        .then(response => {
            console.log(response);
            console.log(categoriaUrl);
            if (categoriaUrl == "people") {
                axios.get(response.homeworld)
                .then(result => result.data)
                .then(response1 => {
                    console.log(response1);
                    response.homeworld = response1.name;
                    console.log(response)
                    setRespuesta(response);
                    setCategoria(categoriaUrl);
                })
            }
            else {
                setRespuesta(response);
                setCategoria(categoriaUrl);
            }
            
        })
        .catch(err => {
            console.log("Hubo un error" + err)
            console.log(respuesta);
            setRespuesta("error");
        }); 
    }

    return (
        <div>
            <form onSubmit={buscar}>

                <div className="form-group row">
                    <div className="form-group row col-sm-6" >
                        <label for="recurso" className="col-sm-3 col-form-label"><b>Search For</b></label>
                        <div>
                            <select className="form-control form-select" value={categoriaUrl} onChange={(e)=> setCategoriaUrl(e.target.value)} name="recurso" id="recurso">
                                <option value="people">People</option>
                                <option value="films">Films</option>
                                <option value="starships">Starships</option>
                                <option value="vehicles">Vehicles</option>
                                <option value="species">Species</option>
                                <option value="planets">Planets</option> 
                            </select>
                        </div>
                    </div>
                    <div className="form-group row col-sm-4">
                        <label for="id" className="col-sm-2 col-form-label" ><b>Id:</b></label>
                        <div>
                            <input type="text" id="id" name="id" class="form-control" value={id} onChange={(e)=> setId(e.target.value)} placeholder="indique el id"/>
                        </div>
                    </div>
                    <div className="form-group row col-sm-2" >
                        <button className="btn btn-primary">Search</button>
                    </div>
                </div>
            </form>
            <div className="container w-100 mx-auto border">
                {respuesta == "error" ?
                    <div>
                        <h1 className="text-danger">404</h1>
                        <h3 className="text-danger">Estos no son los droides que está buscando!</h3>
                        <img className="img-fluid" src= "https://as01.epimg.net/meristation/imagenes/2021/11/12/noticias/1636736157_149351_1636736239_noticia_normal.jpg"></img>
                    </div>
                : categoria === "people" ?
                    <div>
                        <h1> {respuesta.name}</h1>
                        <p><b>Height:</b> {respuesta.height}</p>
                        <p><b>Mass:</b> {respuesta.mass}</p>
                        <p><b>Hair Color:</b> {respuesta.hair_color}</p>
                        <p><b>Homeworld:</b> {respuesta.homeworld}</p>
                    </div>
                : categoria === "films" ?
                    <div>
                        <h1>{respuesta.title}</h1>
                        <p><b>Episode Id:</b> {respuesta.episode_id}</p>
                        <p><b>Opening crawl :</b> {respuesta.opening_crawl}</p>
                        <p><b>Director :</b> {respuesta.director}</p>
                        
                    </div>
                : categoria === "starships" ?
                    <div>
                        <h1>{respuesta.name}</h1>
                        <p><b>Model:</b> {respuesta.model}</p>
                        <p><b>Manufacturer:</b> {respuesta.manufacturer}</p>
                        <p><b>Cost in credits :</b> {respuesta.cost_in_credits}</p>
                        
                    </div>
                : categoria === "vehicles" ?
                    <div>
                        <h1> {respuesta.name}</h1>
                        <p><b>Model:</b> {respuesta.model}</p>
                        <p><b>Manufacturer:</b> {respuesta.manufacturer}</p>
                        <p><b>Cost in credits:</b> {respuesta.cost_in_credits}</p>
                        
                    </div>
                : categoria === "species" ?
                    <div>
                        <h1>{respuesta.name}</h1>
                        <p><b>Classification:</b> {respuesta.classification}</p>
                        <p><b>Designation:</b> {respuesta.designation}</p>
                        <p><b>Average Height:</b> {respuesta.average_height}</p>
                        
                    </div>
                : categoria === "planets" ?
                    <div>
                        <h1> {respuesta.name}</h1>
                        <p><b>Rotation period:</b> {respuesta.rotation_period}</p>
                        <p><b>Orbital period:</b> {respuesta.orbital_period}</p>
                        <p><b>Diameter:</b> {respuesta.diameter}</p>
                        
                    </div>
                :
                    null
            }
            </div>
        </div>
    )
}

export default Menu;