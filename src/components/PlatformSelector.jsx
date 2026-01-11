import usePlatforms from "../hooks/usePlatforms";
import DropDown from './DropDown'

function PlatformSelector({ setGameQuery, selectedPlatform }) {
    const { data: platforms, error } = usePlatforms();

    if (error) return null

    return (
        <>
            <DropDown
                className=" bg-[#1f1f1f] py-1 px-2 rounded-sm mb-3 text-xs"
                menuClassName="w-50 left-0 right-0 z-10 mt-2  bg-[#1f1f1f] rounded-sm"
                itemClassName="py-1 px-2 hover:bg-black/10"
                onSelect={setGameQuery}

                options={platforms.map(p => ({ id: p.id, label: p.name, value: p.slug }))}
            >
                {selectedPlatform ? selectedPlatform.label : 'Platforms'}
            </DropDown>
        </>
    )
}

export default PlatformSelector