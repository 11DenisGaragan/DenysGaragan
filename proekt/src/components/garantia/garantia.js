import './garantia.css';
import '../../App.css';
import {ReactComponent as Line} from './images/Line.svg';

const Garantia = () => {
    return (
        <div className='garantia'>
            <div className='container garantia-container'>
                <h2 className='white margin-center text-center'>Garantia Legal <span className='line-bottom'>Obrigatória</span> </h2>

                <p className='subtext text-center margin-center white details-marginTop'>
                  Qualquer produto comprado em Portugal tem, obrigatoriamente, um <span className='garantio-text-specification'>período de garantia</span>  em que o consumidor está protegido em caso de avaria, decorrente de uma falta de conformidade no processo de fabrico do bem.
                </p>
    
                <Line className='garantia-line'/>
            </div>
        </div>
    )
}

export default Garantia;