import { useInfiniteQuery } from "@tanstack/react-query";
import gameService from "../services/game-service";

const useGames = (gameQuery) => {

    return useInfiniteQuery({
        queryKey: 
        [
            'games', 
            gameQuery.platform?.value || '',
            gameQuery.genre?.name || '',
            gameQuery.ordering?.value || '',    
        ],
        queryFn: ({pageParam = 1}) => gameService.getAll(
            {
                params: {
                    genres: gameQuery.genre?.id,
                    parent_platforms: gameQuery.platform?.id,
                    ordering: gameQuery.ordering?.value,
                    search: gameQuery.search,
                    page: pageParam,
                    page_size: gameQuery?.pageSize,
                }
        }),
        staleTime: 24 * 60 * 60 * 1000,

        getNextPageParam:(lastPage, allPages) => {
            if (!lastPage.next) return undefined;
            return allPages.length + 1;
        },
    })
}

export default useGames;