import { BrowserRouter as Router,  Routes, Route, Switch } from 'react-router-dom';


import Navbar from './navbar'

import Home from './pages/Home/home';
import About from './pages/About/about';
import Skills from './pages/Skills/skills';
import Projetos from './pages/Projetos/projetos';
import Contato from './pages/Contato/contato';



function App(){

    return(
        <Router>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/about' element={<About/>} />
                <Route path='/skills' element={<Skills/>} />
                <Route path='/projetos' element={<Projetos/>} />
                <Route path='/contato' element={<Contato/>} />
            </Routes>
        </Router>
    )
}


export default App;