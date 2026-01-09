import CriticScore from "./CriticScore"
import PlatformIconList from "./PlatformIconList"
import imageUrl from "../services/image-url"

function GameCard({ game }) {
    return (
        <>
            <div className="w-full h-50">
                <img src={imageUrl(game.background_image)} alt={game.name} className="w-full h-full object-cover" />
            </div>

            <section className="py-4 px-1">
                <div className="flex justify-between items-center">
                    {<PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />}
                    <CriticScore score={game.metacritic} />
                </div>

                <h3 className="text-2xl font-bold text-[#e5e5e5]">{game.name}</h3>
            </section>
        </>
    )
}

export default GameCard