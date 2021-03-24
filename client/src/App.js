
import './App.css';
import {Router} from '@reach/router'
import AllProducts from './components/AllProducts'

function App() {
  return (
    <div className="App">
      <h4 className="text-primary font-italic mx-auto pt-3">“Your most unhappy customers are your greatest source of learning.” <br/> – Bill Gates, Microsoft </h4>
      <hr className="col-4 mx-auto" color="black"/>
      <Router>
        <AllProducts path="/"> </AllProducts>
      </Router>
    </div>
  );
}

export default App;
