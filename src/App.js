import logo from './logo.svg';
import './App.css';
import Images from "./images"
import Details from './Details';
import { BrowserRouter ,Routes ,Route } from 'react-router-dom';
function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Images/>} />
        <Route path='/uuid/:id' element={<Details/>} />
      </Routes>
      </BrowserRouter>
   

  );
}

export default App;
