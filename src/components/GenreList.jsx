import useGenres from "../hooks/UseGenre";

function GenreList() {
    const { data: genres, error, isLoading } = useGenres();

    return (
        <ul>
            {genres.map(g => <li key={g.id}>{g.name}</li>)}
        </ul>
    )
}

export default GenreList