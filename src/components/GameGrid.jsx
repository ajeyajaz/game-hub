import InfiniteScroll from "react-infinite-scroll-component";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

function GameGrid({ gameQuery }) {
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const {
    data: games,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
  } = useGames(gameQuery);

  const fetchedGameCount = games?.pages.reduce((total, page) => total + page.results.length, 0)  || 0;

  if (error) return <p className="text-red-500">{error}</p>;
  return (
    <>
      <InfiniteScroll 
        dataLength={fetchedGameCount}
        next={()=> fetchNextPage()}
        hasMore={!!hasNextPage}
        loader={<p className="text-center animate-bounce pt-2">Loading...</p>}
      >
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
      </InfiniteScroll>
    </>
  );
}

export default GameGrid;
