import './App.css';
// import Navbar from './Components/Navbar/Navbar';
import{BrowserRouter,Routes,Route} from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product  from './Pages/Product';
import Cart  from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Navbar from './Components/Navbar/Navbar';
import Shirts from './Pages/shirts';
import Top from './Pages/Top';
import KidsShirt from './Pages/KidsShirt';
import Popular from './Components/Popular/Popular';


function App() {
  
  return (
    <div >
      <BrowserRouter>
      <Navbar/>
     
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/Men' element={<ShopCategory category="Men"/>}/>
        <Route path="/men/shirts" element={<Shirts />} />
        <Route path='/Women' element={<ShopCategory category="Women"/>}/>        
        <Route path="/women/Tops" element={<Top/>}/>        

        <Route path='/kids' element={<ShopCategory category="kids"/>}/>
        <Route path="/kids/shirts" element={<KidsShirt/>}/> 
        <Route path='/product' element={<Product/>}>
        <Route path=':productId' element={<Product/>}/>
        
        </Route>
        <Route path="/popular/:category" element={<Popular />} />
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
