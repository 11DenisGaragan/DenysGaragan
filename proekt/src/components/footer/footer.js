import './footer.css';
import '../../App.css';
import Logo from './images/Logo.svg';

const Footer = () => {
    return(
        <div className='footer'> 
            <div className='container footer-container'>
               <img className='footer-logo' src={Logo} alt='logo'></img>

               <p className='footer-text'>
                  Este produto não é isento de risco e contém nicotina, uma substância que cria dependência. Destinado apenas a fumadores adultos.
               </p>
            </div>
           
        </div>
    )
}

export default Footer;