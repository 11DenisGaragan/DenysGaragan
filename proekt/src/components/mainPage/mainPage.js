import '../../App.css';
import './mainPage.css';
import logo from './images/logo.svg';

const MainPage = () => {
    return(
        <div className='mainPage'>
            <img src={logo} alt='logo'></img>

            <div className='mainPage-wrap'>
                <h1>O que deve saber acerca dos direitos do <span className='mainPage-line-bottom'>consumidor</span> </h1>

                <p className='subtext'>
                    Neste módulo, vamos abordar quais os direitos associados ao consumidor, para que possa estar devidamente informado relativamente aos mesmos.
                ​</p>
            </div>
        </div>
    )
}

export default MainPage;