async function editFormHandler(event) {
    event.preventDefault();
    // const editId = document.querySelector('#editId').value;
    const name = document.querySelector('#nameid').value;
    const author = document.querySelector('#authorid').value;
    const instructions = document.querySelector('#instructionsid').value;
    const ingredients = document.querySelector('#ingredientsid').value;
    const category_id = document.querySelector('#categoryid').value;
    const style_id = document.querySelector('#styleid').value;
    
    // window.location gives us access to the URL. We then use the .split() method to access the number at the end of the URL and set that equal to id.
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
  
    // What part of our application will handle this 'put' request?
    // The Controller will handle this 'put' request.
  
    const response = await fetch(`/api/recipe/${id}`, {
      method: 'PUT',
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
  
    // What happens if the response is ok?
    // If the response is ok, that means that the recipe was updated successfully. 
    if (response.ok) {
      document.location.replace(`/recipe/${id}`);
    } else {
      alert('Failed to edit recipe');
    }
  }
  
  document
    .querySelector('.edit-recipe-form')
    .addEventListener('submit', editFormHandler);
  
