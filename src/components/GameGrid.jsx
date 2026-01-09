import { useEffect, useState } from "react"
import apiClient from "../services/api-client";

function GameGrid() {
    const [games, setGames] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        apiClient.get('/games')
            .then(({ data }) => setGames(data.results))
            .catch(e => setError(e.message));
    }, [])


    return (
        <> 
            {error && <p>{error}</p>}
            <ul>
                {games.map(game => <li key={game.id}>{game.name}</li>)}
            </ul>
        </>
    )
}

export default GameGrid