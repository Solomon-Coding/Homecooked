const logout = async () => {
  const response = await fetch('/api/recipes', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/api/recipes');
  } else {
    alert(response.statusText);
  }
};

document.querySelector('#view-recipes').addEventListener('click', logout);
