
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './componenets/About';
import Client from './componenets/Client';
import Contact from './componenets/Contact';
import Home from './componenets/Home';
import Product from './componenets/Product';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/products' element={<Product />} />
          <Route exact path='/client' element={<Client />} />
          <Route exact path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
