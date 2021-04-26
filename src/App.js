import './App.css';
import Header from './Components/Header/Header';
import Shop from './Components/Shop/Shop';
import Review from './Components/Review/Review';
import Inventory from './Components/Inventory/Inventory';
import NotFound from './Components/NotFound/NotFound';
import ProductDetail from './Components/ProductDetail/ProductDetail';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import About from './Components/Shop/About';
import Contact from './Components/Shop/Contact';
import {Provider} from 'react-redux';
import myStore from './Redux/store';
function App() {
  return (
    <Provider store={myStore} >
      <Router>
      <Header ></Header>
        <Switch>
          <Route exact path="/shop">
            <Shop></Shop>
          </Route>
          <Route exact path="/review">
            <Review></Review>
          </Route>
          <Route exact path="/">
            <Shop></Shop>
          </Route>
          <Route exact path="/inventory">
            <Inventory></Inventory>
          </Route>
          <Route exact path="/about">
            <About/>
          </Route>
          <Route exact path="/contact">
            <Contact/>
          </Route>
          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
          <Route exact path="/product/:ProductDetail">
            <ProductDetail></ProductDetail>
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
