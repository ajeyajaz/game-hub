import useGames from "../hooks/useGames"
import GameCard from "./GameCard";

function GameGrid() {
    const { games, error } = useGames();

    return (
        <>
            {error && <p>{error}</p>}
            <div
                className="grid grid-cols-1 gap-2 justify-items-center px-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5"
            >
                {games.map(game => <GameCard key={game.id} game={game} />)}
            </div>
        </>
    )
}

export default GameGrid