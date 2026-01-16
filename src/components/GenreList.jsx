import useGenres from "../hooks/useGenres";
import imageUrl from "../services/image-url";
import Spinner from "./Spinner";

function GenreList({ setGameQuery, selectedGenre }) {
    const { data: genres, error, isLoading } = useGenres();

    if (error) return null;
    if (isLoading) return <Spinner />;

    const highlight = 'text-white font-semibold transition-all duration-300'

    return (
        <>
            <h2 className="text-2xl font-bold mb-4">Genre</h2>
            <ul className="text-[#a1a1a1]">
                {genres?.results.map(g => (
                    <li key={g.id} className="flex items-center gap-2 py-1 hover:text-white">
                        <div className="w-10 h-10 rounded-lg overflow-hidden">
                            <img src={imageUrl(g.image_background)} alt="" className="w-full h-full object-cover" />
                        </div>
                        <button
                            className={`text-left  ${selectedGenre?.id === g.id ? highlight : ''}`}
                            onClick={() => setGameQuery(g)}
                        >
                            {g.name}
                        </button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default GenreList