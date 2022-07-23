import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import { Routes , Route} from 'react-router-dom';
import SingleProduct from './components/SingleProduct/SingleProduct';
import Signin from './components/Signin/Signin';
import Signup from './components/Signup/Signup';
import Footer from '../src/components/Footer/Footer';

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/product/:id' element={<SingleProduct />} />
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
