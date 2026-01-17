import useGenre from '../hooks/useGenre';
import usePlatform from '../hooks/usePlatform';

function GameHeading({ gameQuery }) {

    const {platform} = usePlatform(gameQuery.platformId);
    const {genre} = useGenre(gameQuery.genreId)


    const heading = `${platform?.name || ''} ${genre?.name || ""} Games`

    return (
        <h1 className="capitalize text-4xl font-bold mb-6">{heading}</h1>
    )
}

export default GameHeading