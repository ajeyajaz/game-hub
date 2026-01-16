import { useQuery } from "@tanstack/react-query";
import gameService from "../services/game-service";

const useGames = (gameQuery) => {

    return useQuery({
        queryKey: 
        [
            'games', 
            gameQuery.platform?.value || '',
            gameQuery.genre?.name || '',
            gameQuery.ordering?.value || ''      
        ],
        queryFn: () => gameService.getAll(
            {
                params: {
                        genres: gameQuery.genre?.id,
                        parent_platforms: gameQuery.platform?.id,
                        ordering: gameQuery.ordering?.value,
                        search: gameQuery.search
                    }
        }),
    })
}

export default useGames;