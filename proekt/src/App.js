import './App.css';
import MainPage from './components/mainPage/mainPage';
import Offers from './components/offers/offers';
import Garantia from './components/garantia/garantia';
import Anos from './components/anos/anos';
import DescriptionGarantie from './components/descriptionGarantie/descriptionGarantie';
import DireitosConsumidor from './components/direitosConsumidor/direitosConsumidor';
import Footer from './components/footer/footer';

const App =() => {
  return (
    <>
    <MainPage />
    <Offers />
    <Garantia/>
    <Anos/>
    <DescriptionGarantie/>
    <DireitosConsumidor/>
    <Footer/>
    </>
  );
}

export default App;
