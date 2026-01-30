// src/components/RecipeList.jsx
import useRecipeStore from '../recipeStore';

const RecipeList = () => {
  // We select only the recipes to prevent unnecessary re-renders
  const recipes = useRecipeStore((state) => state.recipes);

  if (recipes.length === 0) {
    return <p style={{ textAlign: 'center', color: '#666' }}>No recipes yet. Add one below!</p>;
  }

  return (
    <div style={{ marginTop: '20px' }}>
      <h2>Your Recipes</h2>
      {recipes.map((recipe) => (
        <div key={recipe.id} style={{ borderBottom: '1px solid #ddd', padding: '10px 0' }}>
          <h3 style={{ margin: '0 0 5px 0' }}>{recipe.title}</h3>
          <p style={{ margin: 0, color: '#555' }}>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;