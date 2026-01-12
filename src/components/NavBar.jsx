import logo from '../assets/logo.webp'
import InputSearch from './InputSearch'

function NavBar({ setGameQuery }) {
    return (
        <>
            <nav className="flex items-center gap-2 pr-2 mb-4">
                <div className='w-12 h-12'>
                    <img src={logo} alt="/" className='w-full h-full object-contain' />
                </div>
                <InputSearch
                    className='border border-gray-600 w-full max-w-xl mx-auto rounded-xl px-2 py-1 focus-within:border-gray-400'
                    onSearch={setGameQuery} />
            </nav>
        </>
    )
}

export default NavBar