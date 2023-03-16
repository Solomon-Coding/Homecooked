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
  
let previousLength = 0;

const handleInput = (event) => {
  const bullet = "\u2022";
  const newLength = event.target.value.length;
  const characterCode = event.target.value.substr(-1).charCodeAt(0);

  if (newLength > previousLength) {
    if (characterCode === 10) {
      event.target.value = `${event.target.value} ${bullet} `;
    } else if (newLength === 1) {
      event.target.value = ` ${bullet} ${event.target.value}`;
    }
  }
  
  previousLength = newLength;
}