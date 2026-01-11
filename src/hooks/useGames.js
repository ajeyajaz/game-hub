import useData from "./useData";

const useGames = (gameQuery) => useData('/games',
    {
        params: {
            genres: gameQuery.genre?.id,
            parent_platforms: gameQuery.platform?.id
        }
    }, [gameQuery.genre?.id, gameQuery.platform?.id]);
export default useGames;