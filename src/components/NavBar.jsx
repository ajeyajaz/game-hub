import logo from '../assets/logo.webp'
import InputSearch from './InputSearch'

function NavBar() {
    return (
        <>
            <nav className="flex items-center gap-2 pr-2 mb-4">
                <div className='w-12 h-12'>
                    <img src={logo} alt="/" className='w-full h-full object-contain' />
                </div>
                <InputSearch className='border border-gray-400 w-full max-w-xl mx-auto rounded-xl px-2 py-0.5' />
            </nav>
        </>
    )
}

export default NavBar