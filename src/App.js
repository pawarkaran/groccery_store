
import './App.scss';
import Home_Page from './Home_Page/Home_Page';

import AOS from 'aos'


function App() {
  AOS.init()

  return (
    <div className="App">
     
    <Home_Page />
    </div>
  );
}

export default App;
