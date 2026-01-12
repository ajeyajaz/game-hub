import { useState } from "react"
import GameGrid from "./components/GameGrid"
import GenreList from "./components/GenreList"
import NavBar from "./components/NavBar"
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

function App() {
  const [gameQuery, setGameQuery] = useState({});

  return (
    <div className="grid lg: grid-cols-5">

      {/* nav */}
      <div className="col-span-full">
        <NavBar setGameQuery={(search) => setGameQuery({ ...gameQuery, search })} />
      </div>

      {/* sideBar */}
      <div className="hidden  pl-2 lg:block">
        <GenreList setGameQuery={(genre) => setGameQuery({ ...gameQuery, genre })} selectedGenre={gameQuery.genre} />
      </div>

      {/* main */}
      <div className="col-span-full lg:col-start-2">
        <div className="pl-2">
          <GameHeading gameQuery={gameQuery} />

          <div className="flex gap-1">
            <PlatformSelector
              setGameQuery={(platform) => setGameQuery({ ...gameQuery, platform })}
              selectedPlatform={gameQuery.platform}
            />
            <SortSelector
              setGameQuery={(ordering) => setGameQuery({ ...gameQuery, ordering })}
              selectedOrdering={gameQuery.ordering} />
          </div>

        </div>
        <GameGrid gameQuery={gameQuery} />
      </div>
    </div>
  )
}

export default App
