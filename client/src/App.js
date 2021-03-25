
import './App.css';
import {Router, Link} from '@reach/router'
import AllProducts from './components/AllProducts'
import OneProduct from './components/OneProduct'
import CreateProduct from './components/CreateProduct'

function App() {
  return (
    <div className="App">
      <h4 className="text-primary font-italic mx-auto pt-3">“Your most unhappy customers are your greatest source of learning.” <br/> – Bill Gates, Microsoft </h4>
      <hr className="col-4 mx-auto" color="black"/>
      <div className="d-flex mb-3">
          <button className="btn btn-secondary col-1 mr-2"><Link className="text-light" to="/">Home</Link></button>
          <button className="btn btn-success col-1"><Link className="text-light" to="/products/create/new">New Product</Link></button>
        </div>
      <Router>
        <AllProducts path="/"> </AllProducts>
        <OneProduct path="/products/:productId"> </OneProduct>
        <CreateProduct path="/products/create/new"> </CreateProduct>
      </Router>
    </div>
  );
}

export default App;
