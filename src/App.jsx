import { useState } from "react"
import GameGrid from "./components/GameGrid"
import GenreList from "./components/GenreList"
import NavBar from "./components/NavBar"
import PlatformSelector from "./components/PlatformSelector";

function App() {

  const [selectedGenre, setSelectedGenre] = useState(null);
  
  return (
    <div className="grid lg: grid-cols-5">

      {/* nav */}
      <div className="col-span-full">
        <NavBar />
      </div>

      {/* sideBar */}
      <div className="hidden  pl-2 lg:block">
        <GenreList onSelectGenre={(genre)=> setSelectedGenre(genre)} selectedGenre={selectedGenre}/>
      </div>

      {/* main */}
      <div className="col-span-full lg:col-start-2">
        <PlatformSelector/>
        <GameGrid selectedGenre={selectedGenre}/>
      </div>
    </div>
  )
}

export default App
