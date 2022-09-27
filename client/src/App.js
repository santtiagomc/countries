import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from "./Components/LandingPage"
import Home from './Components/Home';
import Detail from './Components/Detail';
import CreateActivity from './Components/CreateActivity';
import About from './Components/About';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Switch>
          <Route exact path = '/' component= {LandingPage}/>
          <Route exact path = '/countries' component= {Home}/>
          <Route path = '/countries/:id' component={Detail}/>
          <Route exact path = '/activity' component= {CreateActivity}/>
          <Route exact path = '/about' component= {About}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
