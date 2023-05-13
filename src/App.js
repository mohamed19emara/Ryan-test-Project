
import Description from './components/Description';
import HomePage from './pages/HomePage';
import Stores from './pages/Stores';
import Products from './pages/Products';
import Settings from './pages/Settings';


import {BrowserRouter , Routes , Route} from 'react-router-dom'

const  App =()=> {
  return (
    <BrowserRouter className="App">
    <HomePage />
    <Routes>

    <Route path="/" element={ <Description />} />
    <Route path="/Stores" element={ <Stores />} />
    <Route path="/Products" element={ <Products />} />
    <Route path="/Settings" element={ <Settings />} />

    </Routes>
    </BrowserRouter>
  );
}

export default App;
