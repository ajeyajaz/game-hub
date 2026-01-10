import useData from "./UseData";

const useGames = (selectedGenre) => useData('/games', { params : { genres: selectedGenre?.id} }, [selectedGenre?.id]);
export default useGames;