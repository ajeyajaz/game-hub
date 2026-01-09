
function GameCardSkeleton() {
    return (
        <div className="animate-pulse rounded-xl shadow p-4 space-y-4 w-full max-w-sm">

            {/* Image */}
            <div className="h-40 bg-gray-600 rounded-lg"></div>

            {/* icons */}
            <div className="flex gap-2">
                <div className=" bg-gray-600 w-6 h-6 rounded-full"></div>
                <div className="bg-gray-600 w-6 h-6 rounded-full"></div>
                <div className="bg-gray-600 w-6 h-6 rounded-full"></div>
            </div>
            {/* title */}
            <div className="h-4 bg-gray-600 rounded w-3/4"></div>

            {/* tags */}
            <div className="flex gap-2">
                <div className="h-3 bg-gray-600 rounded w-1/2"></div>
                <div className="h-3 bg-gray-600 rounded w-1/2"></div>
            </div>

        </div>
    )
}

export default GameCardSkeleton