

function GameCardContainer({ children }) {
    return (
        <div className="flex flex-col rounded-md w-full max-w-sm overflow-hidden bg-[#1f1f1f] text-[#a1a1a1]">
            {children}
        </div>
    )
}

export default GameCardContainer