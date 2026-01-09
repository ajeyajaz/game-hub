import apiClient, {CanceledError} from "../services/api-client";
import { useEffect, useState } from "react";


function useGames() {
    const [games, setGames] = useState([]);
    const [error, setError] = useState('');

    
    useEffect(() => {
        const controller =  new AbortController();

        apiClient.get('/games', {signal: controller.signal})
            .then(({ data }) => setGames(data.results))
            .catch(e => {
                if(e instanceof CanceledError)return
                setError(e.message)
            });

        return () => controller.abort();
    }, [])

    return {games, error}
}

export default useGames