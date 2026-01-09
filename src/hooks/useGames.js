import apiClient, {CanceledError} from "../services/api-client";
import { useEffect, useState } from "react";


function useGames() {
    const [games, setGames] = useState([]);
    const [error, setError] = useState('');
    const [isLoading, setLoading] = useState(false);
    
    useEffect(() => {
        const controller =  new AbortController();
        setLoading(true);
        
        apiClient.get('/games', {signal: controller.signal})
            .then(({ data }) => {
                setGames(data.results);
                setLoading(false);
            })
            .catch(e => {
                if(e instanceof CanceledError)return
                setError(e.message);
                setLoading(false);
            })
            // .finally(()=> setLoading(false))

        return () => controller.abort();
    }, [])

    return {games, error, isLoading}
}

export default useGames