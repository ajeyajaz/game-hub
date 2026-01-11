import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import usePlatforms from "../hooks/usePlatforms";

function PlatformSelector() {
    const [open, setOpen] = useState(false);
    const { data: platforms, error } = usePlatforms();

    if(error) return null

    return (
        <div className="relative w-30 bg-[#1f1f1f] py-1 px-2 rounded-sm mb-3 text-xs">
            <button className="flex gap-1 items-center font-semibold cursor-pointer" onClick={() => setOpen(!open)}>
                Platform
                <FaChevronDown className="w-3 h-3" />
            </button>

            {open && (
                <ul className="absolute w-50 left-0 right-0 z-10 mt-2  bg-[#1f1f1f] rounded-sm overflow-hidden cursor-pointer">
                    {platforms.map(p => <li className="py-1 px-2 hover:bg-black/10" key={p.id}>{p.name}</li>)}
                </ul>
            )}
        </div>

    )
}

export default PlatformSelector