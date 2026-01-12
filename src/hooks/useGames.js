import useData from "./useData";

const useGames = (gameQuery) => useData('/games',
    {
        params: {
            genres: gameQuery.genre?.id,
            parent_platforms: gameQuery.platform?.id,
            ordering: gameQuery.ordering?.value,
            search: gameQuery.search
        }
    }, [gameQuery.genre?.id, gameQuery.platform?.id, gameQuery.ordering?.value, gameQuery.search]);
export default useGames;