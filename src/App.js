// import logo from './logo.svg';
import AppHeader from './components/AppHeader/AppHeader'
import MainContainer from './components/MainContainer/MainContainer'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AppFooter from './components/AppFooter/AppFooter'
import YourCart from './pages/YourCart/YourCart'
import Guide from './pages/Guide/Guide'
import Products from './pages/Products/Products';
import './App.css';
import ItemDetail from './components/ItemDetail/ItemDetail';

function App() {
  const path = process.env.PUBLIC_URL
  return (    
    <div className="App">
      <BrowserRouter>
      <AppHeader/>
        <Switch>
          <Route path={`${path}/`} exact component={MainContainer} />
          <Route path={`${path}/cart`} component={YourCart} />
          <Route path={`${path}/guide`} component={Guide} />
          <Route path={`${path}/products`} exact component={Products} />
          <Route path={`${path}/products/:id`} component={ItemDetail} />
        </Switch>
        <AppFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;