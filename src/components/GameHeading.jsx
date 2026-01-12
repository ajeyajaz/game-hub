
function GameHeading({ gameQuery }) {

    const heading = `${gameQuery.platform?.label || ''} ${gameQuery.genre?.name || ""} Games`

    return (
        <h1 className="capitalize text-4xl font-bold mb-6">{heading}</h1>
    )
}

export default GameHeading