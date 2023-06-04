import react from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Navbar = () => {

    const handleClick = () => {
        toast.error("Coming Soon...", { autoClose: 3000 });
    }

    return (
        <>
        <div className='nav-bar' id='nav'>
            <a href="#" style={{textDecoration : "none"}}>
            <h1><span className='nav-name'> <img src="./favLogo.png" alt="logo-nav" height={32} width={35} style={{marginBottom: "-5px", marginRight: "7px",paddingTop: "5px", marginTop: "5px"}}/> Patient <span>47</span></span> </h1>
            </a>
            <h2 ><span className='nav-buy' onClick={handleClick}>BUY NOW</span></h2>
        </div>
        <ToastContainer
      position="bottom-right"
      />
        </>
    )
}

export default Navbar;