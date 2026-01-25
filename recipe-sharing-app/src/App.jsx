// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar'; // include search if you’ve built it

function App() {
  return (
    <Router>
      <h1>Recipe Sharing App</h1>
      <nav>
        <Link to="/">Home</Link>
      </nav>

      <Routes>
        {/* Home route: shows search bar, add form, and recipe list */}
        <Route
          path="/"
          element={
            <>
              <SearchBar />
              <AddRecipeForm />
              <RecipeList />
            </>
          }
        />

        {/* Recipe details route */}
        <Route path="/recipe/:id" element={<RecipeDetailsWrapper />} />
      </Routes>
    </Router>
  );
}

// Wrapper to extract recipeId from route params
const RecipeDetailsWrapper = () => {
  const { id } = useParams();
  return <RecipeDetails recipeId={id} />;
};

export default App;