import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

const PersonaSWAPI = (props) => {
    
    const {id} = useParams();
    const [results, setResults] = useState({});

    const apiCall = async () =>{
        const {data} = await axios.get(`https://swapi.dev/api/people/${id}`);
        setResults(data);
        
    }
    useEffect(() =>{
        apiCall();
    }, []);

    return (
        <div className="container">
            <div className="card">
                {results.name && <h1>{results.name}</h1>}
                {results.height && <p><b>Height:</b> {results.height}</p>}
                {results.hair_color && <p><b>Hair color:</b> {results.hair_color}</p>}
                {results.birth_year && <p><b>Birth year:</b> {results.birth_year}</p>}
                {results.gender && <p><b>Gender:</b>{results.gender}</p>}
            </div>
        </div>
    )


}

export default PersonaSWAPI;