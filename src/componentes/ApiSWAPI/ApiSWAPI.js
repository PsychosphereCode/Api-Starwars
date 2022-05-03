import { useEffect, useState } from "react";
import axios from "axios";

const ApiSWAPI = (props) => {

    const [category, setCategory] = useState("people");
    const [id, setId] = useState("");
    const [clicked, setClicked] = useState(1);
    const [results, setResults] = useState({});

    const [mensajeError, setMensajeError] = useState("");
    const [imagenError, setImagenError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const apiCall = async () => {
        try {
            const { data } = await axios.get(`https://swapi.dev/api/${category}/${id}`);
            setResults(data)
            setImagenError("");
            setMensajeError("");
        }
		
        catch{
            setImagenError('https://www.premiere.fr/sites/default/files/styles/scale_crop_1280x720/public/2022-04/Capture%20d%E2%80%99e%CC%81cran%202022-04-01%20a%CC%80%2009.18.56.png')
            setMensajeError("Estos no son los droides que está buscando")
            setResults({});
        }
    
        
	};

    useEffect(() => {
		apiCall();
	}, [clicked]);

    return (
        <div className="container">
            <form onSubmit={handleSubmit} className="form-group">
                <label htmlFor="category">Search for:</label>
                <select name="category" id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="people">People</option>
                    <option value="films">Films</option>
                    <option value="starships">Starships</option>
                    <option value="vehicles">Vehicles</option>
                    <option value="species">Species</option>
                    <option value="planets">Planets</option>
                </select>
                <label htmlFor="id">Id:</label>
                <input type="text" name="id" id ="id" value={id} onChange={(e) => setId(e.target.value)}/>
                <input type="submit" value="Search" onClick={() => setClicked((prev)=> (prev += 1))}/>
            </form>
            
			<div className="card">
				{results.name && <h1>{results.name}</h1>}
                {results.title &&<h1>{results.title}</h1>}
                {results.height && <p><b>Height:</b> {results.height}</p>}
				{results.hair_color && <p><b>Hair color:</b> {results.hair_color}</p>}
				{results.birth_year && <p><b>Birth year:</b> {results.birth_year}</p>}
                {results.gender && <p><b>Gender:</b>{results.gender}</p>} 
                {results.manufacturer && <p><b>Manufacturer:</b> {results.manufacturer}</p>}
                {results.starship_class && <p><b>Starship Class: </b>{results.starship_class}</p>}
                {results.passengers && <p><b>Passengers:</b>{results.passengers}</p>}
                {results.cargo_capacity &&<p><b>Cargo capacity:</b>{results.cargo_capacity}</p>}
                {results.director &&<p><b>Director: </b>{results.director}</p>}
                {results.producer && <p><b>Producer:</b>{results.producer}</p>}
                {results.release_date &&<p><b>Release Date:</b>{results.release_date}</p>}
                {results.rotation_period && <p><b>Rotation period: </b>{results.rotation_period}</p>}
                {results.diameter && <p><b>Diameter:</b>{results.diameter}</p>}
                {results.climate && <p><b>Climate: </b> {results.climate}</p>}
                {imagenError && <img  src={imagenError} className="img-fluid" alt="obiwan"/>}
                {mensajeError && <p><b>{mensajeError}</b></p>}
                
			</div>
        </div>
    )

}
export default ApiSWAPI;