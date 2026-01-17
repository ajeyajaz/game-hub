import useGenres from '../hooks/useGenres'
import usePlatforms from '../hooks/usePlatforms'

function GameHeading({ gameQuery }) {

    const {data: genres} = useGenres();
    const {data: platforms} = usePlatforms();

    const genre = genres?.results.find(g => g.id === gameQuery.genreId);
    const platform = platforms?.results.find(g => g.id === gameQuery.platformId);

    const heading = `${platform?.name || ''} ${genre?.name || ""} Games`

    return (
        <h1 className="capitalize text-4xl font-bold mb-6">{heading}</h1>
    )
}

export default GameHeading