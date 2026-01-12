import { IoSearchOutline } from "react-icons/io5";
import { useRef } from "react";


function InputSearch({ onSearch, className = '' }) {

    const inputRef = useRef(null);

    const handleSubmit = (e)=> {
        e.preventDefault();
        if(inputRef) onSearch(inputRef.current.value.trim());
    }

    return (
        <form className={`flex gap-1.5 items-center ${className}`} onSubmit={handleSubmit}>
            <IoSearchOutline className="w-5 h-5 text-gray-400"/>
            <input type="text" className="outline-0 w-full"  ref={inputRef}/>
        </form>
    )
}

export default InputSearch