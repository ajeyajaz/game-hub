import useGenres from "../hooks/useGenres";
import imageUrl from "../services/image-url";
import Spinner from "./Spinner";

function GenreList({ setGameQuery, selectedGenre }) {
    const { data: genres, error, isLoading } = useGenres(); 

    if (error) return null;
    if (isLoading) return <Spinner />;

    return (
        <ul className="text-[#a1a1a1]">
            {genres.map(g => (
                <li key={g.id} className="flex items-center gap-2 py-1">
                    <div className="w-10 h-10 rounded-lg overflow-hidden">
                        <img src={imageUrl(g.image_background)} alt="" className="w-full h-full object-cover" />
                    </div>
                    <button 
                        className={selectedGenre?.id === g.id ? ' text-white font-semibold transition-all duration-300' : ''}
                        onClick={() => setGameQuery(g)}
                    >
                        {g.name}
                    </button>
                </li>
            ))}
        </ul>
    )
}

export default GenreList