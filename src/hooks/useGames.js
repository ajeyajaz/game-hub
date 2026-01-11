import useData from "./useData";

const useGames = (gameQuery) => useData('/games',
    {
        params: {
            genres: gameQuery.genre?.id,
            parent_platforms: gameQuery.platform?.id,
            ordering: gameQuery.ordering?.value,
        }
    }, [gameQuery.genre?.id, gameQuery.platform?.id, gameQuery.ordering?.value]);
export default useGames;