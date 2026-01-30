// src/components/AddRecipeForm.jsx
import { useState } from 'react';
import useRecipeStore from '../recipeStore';

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore((state) => state.addRecipe);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Basic Validation
    if (!title.trim() || !description.trim()) {
      alert("Please fill in both fields!");
      return;
    }

    addRecipe({ 
      id: Date.now(), 
      title: title.trim(), 
      description: description.trim() 
    });

    // Clear inputs after submission
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '400px' }}>
      <h3>Add a New Recipe</h3>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Recipe Title (e.g., Spicy Tacos)"
        style={{ padding: '8px' }}
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Ingredients and Steps..."
        rows="4"
        style={{ padding: '8px' }}
      />
      <button type="submit" style={{ cursor: 'pointer', padding: '10px', background: '#007bff', color: 'white', border: 'none', borderRadius: '4px' }}>
        Add Recipe
      </button>
    </form>
  );
};

export default AddRecipeForm;