import { useState } from "react"
import GameGrid from "./components/GameGrid"
import GenreList from "./components/GenreList"
import NavBar from "./components/NavBar"
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

function App() {
  const [gameQuery, setGameQuery] = useState({pageSize : 9});

  return (
    <div className="game-grid">

      {/* nav */}
      <div className="nav">
        <NavBar setGameQuery={(search) => setGameQuery({ ...gameQuery, search })} />
      </div>

      {/* sideBar */}
      <div className="side-bar">
        <GenreList setGameQuery={(genre) => setGameQuery({ ...gameQuery, genre })} selectedGenre={gameQuery.genre} />
      </div>

      {/* main */}
      <div className="main">
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
        <GameGrid gameQuery={gameQuery}/>
      </div>
    </div>
  )
}

export default App
