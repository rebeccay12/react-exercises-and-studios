import logo from './logo.svg';
import './App.css';


import RecipeDescription from '../src/components/Description.js';
import RecipeIngredients from '../src/components/Ingredients.js';
import RecipePhoto from './components/Photos';

function App() {
  return (
    <div className="App">
      <div>
          <RecipePhoto />
      <div>
        <RecipeDescription />
        <RecipeIngredients />
        </div>
    </div>
   </div> )
}

export default App;

