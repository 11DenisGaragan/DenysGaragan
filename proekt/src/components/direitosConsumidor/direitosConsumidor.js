import './direitosConsumidor.css';
import '../../App.css';
import {ReactComponent as Ellipse} from './images/icons/Ellipse.svg';
import Line from './images/icons/Line.svg';
import Group from './images/icons/Group.svg';
import Element from './images/icons/Element.svg';
import Message from './images/icons/Message.svg';
import CheckMark from './images/icons/CheckMark.svg';
import Elements from './images/icons/Elements.svg';
import CenterImg from './images/icons/CenterImg.svg';
import BottomImg from './images/icons/BottomImg.svg';

const DireitosConsumidor = () => {
    return (
        <div className='сonsumidor'>
            <div className='container consumidor-container'>
                
                <h2 className='text-center margin-center'>Outros Direitos do <span className='line-bottom'> Consumidor</span>​</h2>

                <div className='сonsumidor-wrap'>
                  <img className='line-miggle' src={Line} alt='line'></img>

                    <div className='сonsumidor-wrapTop'>

                        <img className='consumidor-content-wrapImg' src={Group} alt='Group'></img>  

                        <Ellipse className='line-wrap-imgTop'/>

                        <div className='consumidor-content-wrap'>

                            <div className='consumidor-content'>

                                <h5 className='headding-content'>Direito à Rejeição</h5>

                                <p  className='consumidor-content-subtext'> 
                                    É o direito que permite ao consumidor optar livremente entre a substituição do bem e a resolução do contrato, quando a não conformidade do bem se manifeste nos primeiros <span className='сonsumidor-text-specification'>30 dias</span> , a contar da entrega.
                                </p>

                                <p className='consumidor-content-text'>
                                    Nesta situação, é possível para o consumidor pedir de imediato a <span className='сonsumidor-text-specification'>troca do bem</span>  (substituição) ou o <span className='сonsumidor-text-specification'>reembolso</span>  (resolução do contrato).​
                                </p>

                                <span className='line'></span>

                                <p className='consumidor-content-titleCenter'>
                                    Como se exerce?
                                </p>

                                <div className='consumidor-content-bloc'>
                                    <div className='content-bloc-inner'> 
                                        <img className='content-bloc-innerImg' src={CheckMark} alt='CheckMark'></img>

                                        <p className='content-bloc-text'>
                                            Através de uma declaração ao profissional, na qual o consumidor informa que pretende pôr termo ao contrato.
                                        </p>
                                    </div>

                                    <div className='content-bloc-inner'>
                                        <img className='content-bloc-innerImg' src={CheckMark} alt='CheckMark'></img>

                                        <p className='content-bloc-text'>
                                            A declaração pode ser efetuada por carta, correio eletrónico ou por qualquer meio suscetível de prova.​
                                        </p>
                                    </div>
                                </div>

                                <span className='line'></span>

                                <p className='consumidor-content-titleBottom'>
                                    O que acontece a seguir?​
                                </p> 

                                <div className='consumidor-content-offer'>
                                    <div className='content-offer-bloc'>
                                        <a className='offer-bloc-link' href='/'>
                                            <img className='offer-bloc-linkIcon' src={Element} alt='Elements'></img>
                                        </a>

                                        <p className='offer-bloc-text'>
                                            O consumidor é obrigado a devolver os bens correndo as custas desta devolução por conta do profissional
                                        </p>
                                    </div>

                                    <div className='content-offer-bloc detail-marginTop'>
                                        <a className='offer-bloc-link' href='/'>
                                            <img className='offer-bloc-linkIcon' src={Element} alt='Elements'></img>
                                        </a>

                                        <p className='offer-bloc-text'>
                                            O profissional tem 14 dias, a contar da data em que foi informado da decisão de resolução do contrato, para reembolsar o consumidor de todos os pagamentos recebidos
                                        </p>
                                    </div>

                                    <div className='content-offer-bloc detail-marginBottom'>
                                        <a className='offer-bloc-link' href='/'>
                                            <img className='offer-bloc-linkIcon' src={Element} alt='Elements'></img>
                                        </a>

                                        <p className='offer-bloc-text'>
                                            O reembolso deve ser efetuado para o mesmo meio de pagamento usado na transação inicial, exceto quando acordado entre as partes de forma diferente
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>


                    <div className='сonsumidor-wrapCenter сonsumidor-wrapTop'>

                        <img className='consumidor-content-wrapImg' src={CenterImg} alt='CenterImg'></img>

                        <Ellipse className='line-wrap-imgCenter'/>                    

                        <div className='consumidor-content-wrap'>

                            <div className='consumidor-content detail-padding-wrapCenter'>

                                <h5 className='headding-content'>Direito à Reparação e/ou à Substituição</h5>

                                <div className='сonsumidor-wrapCenter-messageBloc'>

                                    <img className='messageBloc-img' src={Message} alt='massage'></img>

                                    <p className='messageBloc-text'>
                                       Atualmente não são feitas reparações dos equipamentos, pelo que fazemos a substituição do bem avariado.​ 
                                    </p>
                                </div>

                                <p className='сonsumidor-wrapCenter-text'>
                                  <span className='сonsumidor-wrapCenter-textSpecification'>O bem substituído é um bem novo</span> pelo que tem um novo período de garantia (3 anos de acordo com os termos da lei em vigor).​
                                </p>

                                <p className='сonsumidor-wrapCenter-titleTop'>
                                   As substituições
                                </p>

                                <div className='сonsumidor-wrapCentert-bloc'>
                                    <div className='сonsumidor-wrapCenter-inner'> 
                                        <img className='content-bloc-innerImg' src={CheckMark} alt='CheckMark'></img>

                                        <p className='сonsumidor-wrapCenter-innerText'>
                                           São efetuadas sem qualquer custo para o consumidor
                                        </p>
                                    </div>

                                    <div className='сonsumidor-wrapCenter-inner'>
                                        <img className='content-bloc-innerImg' src={CheckMark} alt='CheckMark'></img>

                                        <p className='сonsumidor-wrapCenter-innerText'>
                                           São feitas num prazo razoável (não podem exceder os 30 dias)
                                        </p>
                                    </div>


                                    <div className='сonsumidor-wrapCenter-inner'>
                                        <img className='content-bloc-innerImg' src={CheckMark} alt='CheckMark'></img>

                                        <p className='сonsumidor-wrapCenter-innerText'>
                                           Não podem representar um grave inconveniente para o consumidor
                                        </p>
                                    </div>
                                </div>

                                <span className='line'></span>


                                <p className='consumidor-content-titleBottom detail-marginTop-wrapCenter'>
                                   Como lidar com esta situação?
                                </p> 

                                <div className='сonsumidor-wrapCentert-offer'>
                                    <div className='сonsumidor-wrapCentert-offerInner'>
                                        <a className='offer-bloc-link' href='/'>
                                            <img className='offer-bloc-linkIcon' src={Element} alt='Elements'></img>
                                        </a>

                                        <p className='offer-bloc-text'>
                                           Se o consumidor optar por gerir a questão no ponto de venda onde adquiriu o equipamento, o retalhista deve aconselhar o consumidor a entrar em contacto com a <span className='сonsumidor-wrapCenter-textSpecification'>Linha de Apoio ao Consumidor,</span>  de forma a validar se o produto não está em conformidade.
                                        </p>
                                    </div>

                                    <div className='сonsumidor-wrapCentert-offerInner wrapCenter-detail-marginCenter'>
                                        <a className='offer-bloc-link' href='/'>
                                            <img className='offer-bloc-linkIcon' src={Element} alt='Elements'></img>
                                        </a>

                                        <p className='offer-bloc-text'>
                                           A resolução pode passar pelo processo normal de troca do equipamento.
                                        </p>
                                    </div>

                                    <div className='сonsumidor-wrapCentert-offerInner wrapCenter-detail-marginBottom'>
                                        <a className='offer-bloc-link' href='/'>
                                            <img className='offer-bloc-linkIcon' src={Element} alt='Elements'></img>
                                        </a>

                                        <p className='offer-bloc-text'>
                                           Caso o consumidor solicite a troca do kit completo ou a devolução do dinheiro, o ponto de venda pode devolver o equipamento aberto ao distribuidor, desde que verifique as seguintes condições e seguimento do processo:
                                        </p>
                                    </div>
                                </div>

                                <div className='сonsumidor-wrapCenter-sectionBloc'>
                                    <img className='wrapCenter-section-img'src={Elements}  alt='Elements'></img>

                                    <p className='wrapCenter-section-text'>
                                       O retalhista notifica, através do Call Center da Linha de Retalho, a ocorrência no prazo máximo de 2 dias úteis.
                                    </p>
                                </div>

                                <div className='consumidor-wrapCenter-sectionOffer'>

                                    <div className='wrapCenter-sectionOffer-bloc'>

                                        <a className='wrapCenter-sectionOffer-blocLink' href='/'>1</a>

                                        <p className='wrapCenter-sectionOffer-blocText'>
                                           O distribuidor fará a recolha do kit a devolver no ponto de venda
                                        </p>
                                    </div>

                                    <div className='wrapCenter-sectionOffer-bloc'>

                                        <a className='wrapCenter-sectionOffer-blocLink' href='/'>2</a>

                                        <p className='wrapCenter-sectionOffer-blocText'>
                                           O kit é devolvido completo, incluindo o cabo USB e o adaptador de tomada
                                        </p>
                                    </div>

                                    <div className='wrapCenter-sectionOffer-bloc'>

                                        <a className='wrapCenter-sectionOffer-blocLink' href='/'>3</a>

                                        <p className='wrapCenter-sectionOffer-blocText'>
                                           O kit alegadamente não conforme é devolvido acompanhado da fatura de venda (ou cópia da mesma)
                                        </p>
                                    </div>

                                    <div className='wrapCenter-sectionOffer-bloc'>

                                        <a className='wrapCenter-sectionOffer-blocLink' href='/'>4</a>

                                        <p className='wrapCenter-sectionOffer-blocText'>
                                           A venda foi realizada nos 30 dias corridos anteriores à data da ocorrência
                                        </p>
                                    </div>

                                    <div className='wrapCenter-sectionOffer-bloc'>

                                        <a className='wrapCenter-sectionOffer-blocLink' href='/'>5</a>

                                        <p className='wrapCenter-sectionOffer-blocText'>
                                           Será feita a validação da data da fatura com a data de registo do equipamento na retail app, antes de aceitar a devolução
                                        </p>
                                    </div>

                                    <div className='wrapCenter-sectionOffer-bloc'>

                                        <a className='wrapCenter-sectionOffer-blocLink' href='/'>6</a>

                                        <p className='wrapCenter-sectionOffer-blocText'>
                                           É feita a emissão da nota de crédito ao ponto de venda
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>


                    <div className='сonsumidor-wrapBottom сonsumidor-wrapTop'>

                        <img className='consumidor-content-wrapImg' src={BottomImg} alt='BottomImg'></img>

                        <Ellipse className='line-wrap-imgCenter'/>  

                        <div className='consumidor-content-wrap'>
                            <div className='consumidor-content detail-padding-wrapBottom'>

                                <h5 className='headding-content detail-headding'>Direito à Reparação e/ou à Substituição​</h5>

                                <p className='wrapBottom-titleTop'>
                                   Quando se aplica?
                                </p>

                                <p className='wrapBottom-text'>
                                   O direito ao arrependimento/devolução aplica-se durante <span className='сonsumidor-wrapCenter-textSpecification'>14 dias para compras à distância</span>  (online, telefone ou e-mail, quando permitido) <span className='сonsumidor-wrapCenter-textSpecification'> ou fora do estabelecimento comercial</span>, em vendas porta a porta por exemplo.
                                </p>

                                <div className='wrapBottom-sectionBloc  сonsumidor-wrapCenter-sectionBloc'>

                                   <img className='wrapBottom-sectionBloc-img'src={Elements}  alt='Elements'></img>

                                   <p className='wrapBottom-sectionBloc-text'>
                                      Significa que no seu caso, o ponto de venda é livre de estabelecer a sua política de devoluções, uma vez que não é uma obrigação legal.
                                    </p>
                                </div>


                                <div className='wrapBottom-messageBloc  сonsumidor-wrapCenter-messageBloc'>

                                    <img className='messageBloc-img' src={Message} alt='massage'></img>

                                    <p className='wrapBottom-messageBloc-title'>
                                       De acordo com a política de devolução da PMI
                                    </p>

                                    <p className='wrapBottom-messageBloc-text messageBloc-text'>
                                       Não são aceites devoluções de equipamentos abertos, caso exista arrependimento por parte do consumidor, independentemente do canal de compra.​
                                    </p>
                                </div>



                                <p className='wrapBottom-titleBottom consumidor-content-titleBottom'>
                                   Então mas qual a diferença entre o Direito à Rejeição e o Direito ao Arrependimento?​
                                </p> 

                                
                                <div className='wrapBottom-offerInner  '>
                                    <a className='offer-bloc-link' href='/'>
                                        <img className='offer-bloc-linkIcon' src={Element} alt='Elements'></img>
                                    </a>

                                    <p className='wrapBottom-offerInner-text  offer-bloc-text'>
                                       O direito de rejeição pressupõe a existência de um defeito, já o de arrependimento, é imotivado, ou seja, o cliente nada precisa de justificar perante o vendedor.
                                    </p>
                                </div>
                               

                            </div>
                        </div>
                        
                    </div>

                </div>

            </div>
        </div>
    )
}

export default DireitosConsumidor;