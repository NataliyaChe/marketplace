import Header from "./components/Header";
import Main from "./pages/Main";
import {BrowserRouter,  Routes, Route } from 'react-router-dom';
import SingleProduct from "./components/SingleProduct";
import ShoppingCartModal from "./components/ShoppingCartModal";
import { useAppSelector } from "./hooks/useTypedSelector"

function App() {
  const {modal} = useAppSelector(state => state.product)

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/:id' element={<SingleProduct />} />
        </Routes>
        {modal && <ShoppingCartModal />}
      </div>
    </BrowserRouter>
  );
}

export default App;
