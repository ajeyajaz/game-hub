import DropDown from "./DropDown"

function SortSelector({ setGameQuery, selectedOrdering }) {
    const options = [
        { id: 1, value: 'name', label: 'Name' },
        { id: 2, value: '-released', label: 'Released' },
        { id: 3, value: '-added', label: 'Added' },
        { id: 4, value: '-created', label: 'Created' },
        { id: 5, value: '-updated', label: 'Updated' },
        { id: 6, value: '-rating', label: 'Rating' },
        { id: 7, value: '-metacritic', label: 'Metacritic' },
    ]

    const selectedOption = options.find(opt => opt.value === selectedOrdering);

    return (
        <DropDown
            options={options} onSelect={setGameQuery}
            className="bg-[#1f1f1f] py-1 px-2 rounded-sm mb-3 text-xs"
            menuClassName="left-0 right-0 z-10 mt-2 bg-[#1f1f1f]"
            itemClassName="py-1 px-2 hover:bg-black/10"
        >
            Order by: {selectedOption ? selectedOption.label : 'Relevance'}
        </DropDown>
    )
}

export default SortSelector