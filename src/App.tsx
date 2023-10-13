import Header from "./components/Header";
import Main from "./pages/Main";
import {BrowserRouter,  Routes, Route } from 'react-router-dom';
import SingleProduct from "./components/SingleProduct";
import Modal from "./components/Modal";
import { useTypedSelector } from "./hooks/useTypedSelector"

function App() {
  const {modal} = useTypedSelector(state => state.product)

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/:id' element={<SingleProduct />} />
        </Routes>
        {modal && <Modal />}
      </div>
    </BrowserRouter>
  );
}

export default App;
