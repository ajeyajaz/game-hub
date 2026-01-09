
function CriticScore({ score }) {

    const color = score > 75 ? ' border-green-900 text-green-400': ' border-yellow-700 text-yellow-400';

    return (
        <span className={`text-sm border font-semibold px-1 rounded-md ${color}`}>{score}</span>
    )
}

export default CriticScore