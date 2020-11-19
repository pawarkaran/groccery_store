import logo from './logo.svg';
import './App.scss';
import Home_Page from './Home_Page/Home_Page';
import { Navbar } from './Navbar/Navbar';
import AOS from 'aos'


function App() {
  AOS.init()

  return (
    <div className="App">
      {/* <Navbar /> */}
    <Home_Page />
    </div>
  );
}

export default App;
