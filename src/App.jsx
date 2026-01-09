import NavBar from "./components/NavBar"

function App() {

  return (
    <div className="grid border lg: grid-cols-5">

      {/* nav */}
      <div className="col-span-full">
        <NavBar/>
      </div>

      {/* sideBar */}
      <div className="hidden bg-amber-100 lg:block">
        sidebar
      </div>
      {/* main */}
      <div className="col-span-full bg-amber-300 lg:col-start-2">main</div>
    </div>
  )
}

export default App
