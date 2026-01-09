import PlatformIconList from "./PlatformIconList"


function GameCard({ game }) {
    return (
        <div className="flex flex-col rounded-md w-full max-w-sm overflow-hidden bg-[#1f1f1f] text-[#a1a1a1]">

            <div className="w-full h-50">
                <img src={game.background_image} alt={game.name} className="w-full h-full object-cover" />
            </div>

            <section className="py-4 px-1">
                {<PlatformIconList platforms={game.parent_platforms.map(p => p.platform)}/>}
                <h3 className="text-2xl font-bold text-[#e5e5e5]">{game.name}</h3>
            </section>
        </div>
    )
}

export default GameCard