import Header from './components/Header/Header'
import ProductsContainer from './components/ProductsContainer/ProductsContainer';
import BottomContent from './components/BottomContent/BottomContent';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <ProductsContainer/>
      <BottomContent/>
      <Footer/>
    </div>
  );
}

export default App;
