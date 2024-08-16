import { Link } from 'react-router-dom';
// import { Container } from 'react-bootstrap';
import './footer.css';
import coffenbobs from '../img/coffee-beans-footer.png'
import coffeefooter from '../img/beans-logo-footer.png';


const Footer = () => {
    return (
        <div className='nav-footer'>
            <div className='inner-footer'>
                <nav>
                    <ul className='navbar_footer'>
                        <li className='navbar_footer-li'><img src={coffenbobs} alt="кофейные бобы" />
                            <Link className='footer-color' to="/"><span>Coffee house</span></Link></li>
                        <li><Link className='footer-color' to="/ourcoffee"><span>Our coffee</span></Link></li>
                        <li><Link className='footer-color' to="/foryourpleasure"><span>For your pleasure</span></Link></li>
                    </ul>
                </nav>
                <div className='logo-footer'>
                    <img src={coffeefooter} alt="logo footer" />
                </div>
            </div>

        </div>
    )

}


export default Footer