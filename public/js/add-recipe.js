  async function newFormHandler(event) {
    event.preventDefault();
  
    const recipe_name = document.querySelector('#recipe_name').value;
    const description = document.querySelector('#description').value;
    const guest_name = document.querySelector('#guest_name').value;
    // const has_nuts = document.querySelector('#has_nuts:checked') ? true : false;
  
    const response = await fetch(`/api/recipes`, {
      method: 'POST',
      body: JSON.stringify({
        name,
        author,
        instructions,
        ingredients,
        category_id,
        style_id,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to add recipe');
    }
  }
  
  document
    .querySelector('.new-recipe-form')
    .addEventListener('submit', newFormHandler);
  