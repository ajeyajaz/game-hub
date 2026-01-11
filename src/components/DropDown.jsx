import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

function DropDown({ options, children, onSelect, className = '', menuClassName = '', itemClassName = '' }) {
    const [open, setOpen] = useState(false);


    const handleSelect = (option) => {
        onSelect(option);
        setOpen(false);
    }

    return (
        <div className={`relative ${className} `}>
            <button
                className="flex gap-1 items-center font-semibold cursor-pointer"
                onClick={() => setOpen(!open)}
            >
                {children} <FaChevronDown className="w-3 h-3" />
            </button>

            {open && (
                <ul className={`absolute overflow-hidden cursor-pointer ${menuClassName}`}>
                    {options.map(p => (
                        <li
                            className={itemClassName}
                            key={p.id}
                            onClick={() => handleSelect(p)}
                        >
                            {p.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>

    )
}

export default DropDown