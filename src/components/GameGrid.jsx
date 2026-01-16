import useGames from "../hooks/useGames"
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

function GameGrid({ gameQuery }) {
    const { data: games, error, isLoading } = useGames(gameQuery);
    const skeletons = [1, 2, 3, 4, 5, 6];

    if(error) return <p className="text-red-500">{error}</p>

    return (
        <>
            <div
                className="grid grid-cols-1 gap-4 justify-items-center items-center px-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4"
            >
                {isLoading && skeletons.map(skeleton => (
                    <GameCardContainer key={skeleton}>
                        <GameCardSkeleton />
                    </GameCardContainer>)
                )}
                {!isLoading && games?.results.map(game => (
                    <GameCardContainer key={game.id} >
                        <GameCard game={game} />
                    </GameCardContainer>)
                )}
            </div>
        </>
    )
}

export default GameGrid