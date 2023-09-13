import Header from "./components/Header";
import Main from "./pages/Main";
import {BrowserRouter,  Routes, Route } from 'react-router-dom';
import SingleItem from "./components/SingleItem";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/:id' element={<SingleItem />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
