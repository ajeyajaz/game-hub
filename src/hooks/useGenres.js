import genres from "../Data/genres";
import { useQuery } from "@tanstack/react-query";
import genreService from "../services/genre-service";



const useGenres = () => {
        return useQuery({
            queryKey:['genres'],
            queryFn: genreService.getAll,
            staleTime: 24 * 60 * 60 * 1000, // 24h
            initialData: {count:genres.length, results: genres}
        })
}
export default useGenres;