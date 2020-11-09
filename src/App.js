import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Editor from './components/Editor';
import Landing from './components/Landing';
import {WordProvider} from './context/WordContext'

function App() {
  return (
    <Router>
      <WordProvider>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/write" component={Editor} />
        </Switch>
      </WordProvider>
    </Router>
  );
}

export default App;
