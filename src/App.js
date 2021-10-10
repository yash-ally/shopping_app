// import logo from './logo.svg';
import AppHeader from './components/AppHeader/AppHeader'
import MainContainer from './components/MainContainer/MainContainer'
import { BrowserRouter as Router } from "react-router-dom";
import AppFooter from './components/AppFooter/AppFooter'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <AppHeader />
        <MainContainer />
        <AppFooter />
      </div>
    </Router>
  );
}

export default App;