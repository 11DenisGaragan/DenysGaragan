import './anos.css';
import '../../App.css';
import Phote from './images/Phote.jpg';
import Shield from './images/Shield.svg';
const Anos = () => {
    return (
        <div className='anos'>
            <div className='container anos-container'>
                <div className='anos-contentLeft'>
                    <h3><span className='specification-header'>3</span> anos</h3>

                    <div className='anos-contentLeft-bloc'>
                        <img className='contentLeft-bloc-img' src={Shield} alt='Shield'></img>

                        <p className='contentLeft-bloc-text'>
                            Os equipamentos IQOS, novos ou seminovos são bens móveis, como tal têm um período de garantia de <span className='anos-text-specification'>3 anos</span>  a partir da <span className='anos-text-specification'> data de disponibilização </span> do produto.
                        </p>
                    </div>
                </div>

                <div className='anos-contentRight'>
                    <img className='anos-contentRight-img' src={Phote} alt='phote'></img>
                </div>
      
            </div>
        </div>
    )
}

export default Anos;