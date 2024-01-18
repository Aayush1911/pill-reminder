import Navbar from  './components/Navbar'
import {  BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import Addpill from './components/addpill/Addpill'
import Login from './components/login/Login'
import Signup from './components/signup/Signup'
import View from './viewpill/View'
import About from './components/About/About'

function App() {
  return (
    <div>
          <Router>
          <Navbar/> 
            <Routes>
                <Route  path='/addpill' element = {<Addpill/>}/>
            </Routes>
            <Routes>
                <Route  path='/login' element = {<Login/>}/>
            </Routes>
            <Routes>
                <Route  path='/signup' element = {<Signup/>}/>
            </Routes>
            <Routes>
                <Route  path='/about' element = {<About/>}/>
            </Routes>
            <Routes>
                <Route  path='/' element = {<View/>}/>
            </Routes>
          </Router>
          
    </div>
  );
}

export default App;
