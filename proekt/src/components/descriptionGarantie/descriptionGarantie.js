import './descriptionGarantie.css';
import '../../App.css';
import Icon from './images/Icon.svg';



const DescriptionGarantie = () => {
    return(
        <div className='descriptionGarantie'>
            <div className='container descriptionGarantie-container'>
                <h4 className='margin-centerMobile'>
                  Garantia Legal Obrigatória
                </h4>

                <div className='descriptionGarantie-bloc'>
                    <div className='descriptionGarantie-bloc-content'>
                        <img className='bloc-content-img' src={Icon} alt='icon'></img>

                        <p className='bloc-content-text'>
                          Aplicação dos 3 anos para equipamentos comprados a partir de 1/1/2022
                        </p>
                    </div>

                    <div className='descriptionGarantie-bloc-content'>
                        <img className='bloc-content-img' src={Icon} alt='icon'></img>

                        <p className='bloc-content-text'>
                           Garantia legal de 3 anos a cada troca de “single line unit” <span className='descriptionGarantie-text-specification'>(isto é, por peça trocada)</span>
                        </p>
                    </div>

                    <div className='descriptionGarantie-bloc-content'>
                        <img className='bloc-content-img' src={Icon} alt='icon'></img>

                        <p className='bloc-content-text'>
                           É aplicável a todos os consumidores IQOS <span className='descriptionGarantie-text-specification'> (consumidores sem registo têm obrigatoriamente de apresentar talão de compra)</span> 
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default DescriptionGarantie;