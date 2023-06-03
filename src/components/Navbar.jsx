import react from 'react'

const Navbar = () => {
    return (
        <div className='nav-bar'>
            
            <h1><span className='nav-name'> <img src="./favLogo.png" alt="logo-nav" height={32} width={35} style={{marginBottom: "-5px", marginRight: "7px"}}/> Patient <span>47</span></span> </h1>
            <h2><span className='nav-buy'>  BUY NOW</span></h2>
        </div>
    )
}

export default Navbar;