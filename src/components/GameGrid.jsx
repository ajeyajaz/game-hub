import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

function GameGrid({ gameQuery }) {
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const {
    data: games,
    error,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useGames(gameQuery);

  if (error) return <p className="text-red-500">{error}</p>;
  return (
    <div>
      <div className="grid grid-cols-1 gap-4 justify-items-center items-center px-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}

        {!isLoading &&
          games?.pages.map((page) =>
            page.results.map((game) => (
              <GameCardContainer key={game.id}>
                <GameCard game={game} />
              </GameCardContainer>
            ))
          )}

      </div>

      {hasNextPage && (
          <button
            onClick={() => fetchNextPage()}
            className="border p-2 mt-2 ml-2 rounded-md font-semibold cursor-pointer"
          >
            {isFetchingNextPage ? "Loading..." : "Load More"}
          </button>
      )}
      
    </div>
  );
}

export default GameGrid;
