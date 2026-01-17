import useGenres from "./useGenres";


const useGenre = (id) => {
    const {data: genres} = useGenres();

    const genre = genres?.results.find(p => p.id === id)
    return {genre}

}


export default useGenre;