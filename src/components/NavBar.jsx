import logo from '../assets/logo.webp'

function NavBar() {
    return (
        <>
            <nav className="flex">
                <div className='w-12 h-12'>
                    <img src={logo} alt="/" className='w-full h-full object-contain' />
                </div>
                <p>NavBar</p>
            </nav>
        </>
    )
}

export default NavBar