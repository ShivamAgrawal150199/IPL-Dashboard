
import './App.css';
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import { TeamPage } from './pages/TeamPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes >
        <Switch>
        <Route path="/teams/:teamName/matches/:year">
            <MatchPage />
          </Route>
          <Route path="/teams/:teamName">
            <TeamPage />
          </Route>
          </Switch>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
