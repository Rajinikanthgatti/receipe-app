import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';
import { Footer } from './Components/Footer';
import { RecipeCard } from './Components/RecipeCard';
import { SearchField } from './Components/SearchField';

function App() {
  return (
    <div className="App">
      <h1>Receipe Search</h1>
      <SearchField/>
    </div>
  );
}

export default App;
