import useGames from "../hooks/useGames"
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

function GameGrid({ selectedGenre }) {
    const { data: games, error, isLoading } = useGames(selectedGenre);
    const skeletons = [1, 2, 3, 4, 5, 6];


    return (
        <>
            {error && <p>{error}</p>}
            <div
                className="grid grid-cols-1 gap-4 justify-items-center items-center px-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5"
            >
                {isLoading && skeletons.map(skeleton => (
                    <GameCardContainer key={skeleton}>
                        <GameCardSkeleton />
                    </GameCardContainer>)
                )}
                {games.map(game => (
                    <GameCardContainer key={game.id} >
                        <GameCard game={game} />
                    </GameCardContainer>)
                )}
            </div>
        </>
    )
}

export default GameGrid