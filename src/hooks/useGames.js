import { useInfiniteQuery } from "@tanstack/react-query";
import gameService from "../services/game-service";

const useGames = (gameQuery) => {

    return useInfiniteQuery({
        queryKey: ['games', gameQuery],
        queryFn: ({pageParam = 1}) => gameService.getAll(
            {
                params: {
                    genres: gameQuery.genreId,
                    parent_platforms: gameQuery.platformId,
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