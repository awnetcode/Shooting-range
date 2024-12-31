import '../styles/header.css';

import facebook from '../assets/facebook.svg';
import youtube from '../assets/icons8-youtube.svg';
import instagram from '../assets/icons8-instagram.svg';
//import target from '../assets/target-svgrepo-com.svg';

// eslint-disable-next-line react/prop-types
const Header = ( {isScrolled} ) =>{

    return(
        <>
        <header className={`header ${ isScrolled ? 'hidden' : ''}`}>
            <h1>Strzelnica Dziki Wschód</h1> 
            <div className="header-social">
                <p>Odwiedź nas:</p>
                <div className="social-links">
                    <a href="#" className="social-link"><img src={facebook} alt="facebook-logo" /></a>
                    <a href="#" className="social-link"><img src={youtube} alt="youtube-logo" /></a>
                    <a href="#" className="social-link"><img src={instagram} alt="instagram-logo" /></a>
                </div>
            </div>
            <p>Tel: 123 456 789</p>
        </header>     
        </>
    )
}

export default Header