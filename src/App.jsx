import GameGrid from "./components/GameGrid"
import GenreList from "./components/GenreList"
import NavBar from "./components/NavBar"

function App() {

  return (
    <div className="grid lg: grid-cols-5">

      {/* nav */}
      <div className="col-span-full">
        <NavBar />
      </div>

      {/* sideBar */}
      <div className="hidden lg:block">
        <GenreList/>
      </div>

      {/* main */}
      <div className="col-span-full lg:col-start-2">
        <GameGrid/>
      </div>
    </div>
  )
}

export default App
