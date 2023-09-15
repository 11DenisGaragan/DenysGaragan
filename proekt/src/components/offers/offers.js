import '../../App.css';
import './offers.css';
import GarantiaIcon from './images/GarantiaIcon.svg';
import PoliticaIcon from './images/PoliticaIcon.svg';

const Offers = () => {
    return (
        <div className='offers'>
            <div className='container offers-container'>
                <p className='offers-text'>
                    Vamos focar-nos principalmente na <span className='offers-text-specification'>garantia legal </span> e na <span className='offers-text-specification'>política de devoluções</span>  associadas aos nossos equipamentos.
                </p>

                <div className='offers-wrap'>
                    <div className='offers-content'>
                        <img className='offers-content-imgGarantial' src={GarantiaIcon} alt='Garantia-icon'></img>

                        <a className='offers-content-link tablet-specification' href='/'>
                            Garantia Legal
                        </a>
                    </div>

                    <div className='offers-content'>
                        <img className='offers-content-imgPolitical' src={PoliticaIcon} alt='Politica-icon'></img>

                        <a className='offers-content-link' href='/'>
                            Política de Devoluções
                        </a>
                    </div>
                   
                </div>
            </div>
        </div>
    )
}

export default Offers;