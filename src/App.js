
import './App.css';
import Header from './containers/Header';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import ProductListing from './containers/ProductListing';
// import ProductComponent from './containers/ProductComponent';
import ProductDetails from './containers/ProductDetails';
import CSVManupulation from './containers/CSVManupulation';


function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
      <Switch>
        <Route path="/" exact component={CSVManupulation} />
        <Route path="/product/:productId" exact component={ProductDetails}/>
        <Route path="/csv" exact component={CSVManupulation}/>
        <Route>Route not found</Route>
      </Switch>
        
      </Router>
    
   
    </div>
  );
}

export default App;
