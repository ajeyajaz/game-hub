import useGenres from "../hooks/UseGenre";
import imageUrl from "../services/image-url";

function GenreList() {
    const { data: genres, error, isLoading } = useGenres();

    return (
        <ul className="text-[#a1a1a1] pl-2">
            {genres.map(g => (
                <li key={g.id} className="flex items-center gap-2 py-1">
                    <div className="w-10 h-10 rounded-lg overflow-hidden"><img src={imageUrl(g.image_background)} alt="" className="w-full h-full object-cover" /></div>
                    <span>{g.name}</span>
                </li>
            ))}
        </ul>
    )
}

export default GenreList