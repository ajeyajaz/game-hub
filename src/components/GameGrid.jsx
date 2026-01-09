import useGames from "../hooks/useGames"
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

function GameGrid() {
    const { games, error, isLoading } = useGames();
    const skeletons = [1,2,3,4,5,6];

    console.log(isLoading);
    return (
        <>
            {error && <p>{error}</p>}
            <div
                className="grid grid-cols-1 gap-4 justify-items-center items-center px-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5"
            >    
                {isLoading && skeletons.map(skeleton=> <GameCardSkeleton key={skeleton} />)}
                {games.map(game => <GameCard key={game.id} game={game} />)}
            </div>
        </>
    )
}

export default GameGrid