import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//Importar HOOKS
import { BrowserRouter, Routes, Route } from 'react-router-dom';


//Importar views
import Home from './views/Home';
import Pokemones from './views/Pokemones';

//Importar components
import Pokemon from './components/Pokemon'
import NavBar from './components/Navbar';

import { Provider } from './JContext'; //Proveer el contexto

//INICIO DE LA FUNCIÓN

function App() {
  return (

    <BrowserRouter>
      <Provider>
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemones/" element={<Pokemones />} />
          <Route path="/pokemones/:pokeName" element={<Pokemon />} />
        </Routes>

      </Provider>
    </BrowserRouter>
  );
}

export default App;

