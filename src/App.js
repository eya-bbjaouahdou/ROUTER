import './App.css';
import {BrowserRouter , NavLink, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Listes from './components/Listes';
import PremierListe from './components/PremierListe';
import deuxiémeListe from './components/deuxiémeListe';

function App() {
  return (
   <BrowserRouter>
    <div className="App">
         <h1>Chekpoint React Router</h1>
         <nav> 
          <NavLink to="/">Home</NavLink>
          <hr/>
          <NavLink to="/contact">Contact</NavLink>
          <hr/>
          <NavLink to="/listes">Listes</NavLink>



         </nav>
         <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/contact' element={<Contact/>} />
         <Route path='/listes' element={<Listes/>} />
        
         <Route path='Premier-Liste' element={<PremierListe/>} />
         <Route path='deuxiéme-Liste' element={<deuxiémeListe/>} />





         <Route/>
         <Route path='*' element={<NotFound/>} />

         </Routes>
    </div>
   </BrowserRouter>
  );
}

export default App;
