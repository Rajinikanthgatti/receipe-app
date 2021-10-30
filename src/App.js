import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';
import { Footer } from './Components/Footer';
import { RecipeCard } from './Components/RecipeCard';
import { SearchField } from './Components/SearchField';

function App() {
  return (
    <div className="App">
      <h1>Receipe Search</h1>
      <Router>
        <Route exact path="/" component={SearchField}></Route>
        <Route exact path="/receipe" component={RecipeCard}></Route>
      </Router>
    </div>
  );
}

export default App;
