import { useQuery } from "@tanstack/react-query";
import axios from '../services/api-client';

const useGames = (gameQuery) => {

    return useQuery({
        queryKey: 
        [
            'games', 
            gameQuery.platform?.value || '',
            gameQuery.genre?.name || '',
            gameQuery.ordering?.value || ''      
        ],
        queryFn: () => (
            axios.get('/games', 
                {
                    params: {
                        genres: gameQuery.genre?.id,
                        parent_platforms: gameQuery.platform?.id,
                        ordering: gameQuery.ordering?.value,
                        search: gameQuery.search
                    }
            })
                .then(res => res.data)
        ),

    })
}

export default useGames;