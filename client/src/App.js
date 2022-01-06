import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import OpenMat from './pages/OpenMat'
import Register from './pages/Register'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/openmat' element={<OpenMat />}/>
          {/* <Route path='/seminar' element={<OpenMat />}/>
          <Route path='/competition' element={<OpenMat />}/> */}
          <Route path='/register' element={<Register />} />
        </Routes>
          

      </Router>
      
    </div>
  );
}

export default App;
