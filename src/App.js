import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Editor from './components/Editor';
import Landing from './components/Landing';


function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/" component={Landing}/>
      <Route exact path="/write" component={Editor}/>
      </Switch>
    </Router>
  );
}

export default App;
