import genres from "../Data/genres";
import { useQuery } from "@tanstack/react-query";
import axious from '../services/api-client'

function fetchGenres(){
    return axious.get('/genres')
        .then(res => res.data)
}

const useGenres = () => {
        return useQuery({
            queryKey:['genres'],
            queryFn: fetchGenres,
            staleTime: 24 * 60 * 60 * 1000, // 24h
            initialData: {count:genres.length, results: genres}
        })
}
export default useGenres;