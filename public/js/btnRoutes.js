const viewRecipesEl = document.getElementById("view-recipes");
const individualRecipeEl = document.getElementById("recipeList");
const addRecipeEl = document.getElementById("add-recipe");
const editRecipeEl = document.getElementById("edit-recipe");
const deletebtn = document.getElementById('delete-btn');

=======
>>>>>>> Stashed changes:public/js/viewRecipes.js

function toAllRecipes() {
  document.location.href = "/recipes";
}

viewRecipesEl.addEventListener("click", toAllRecipes);

function toRecipe(e) {
  const btnId = e.target.dataset.rid;
  document.location.href = `/recipes/${btnId}`;
}
individualRecipeEl.addEventListener("click", toRecipe);

<<<<<<< Updated upstream:public/js/btnRoutes.js
function addRecipe() {
    document.location.href = `/addRecipe`;
}
addRecipeEl.addEventListener("click", addRecipe)

function editRecipe(e) {
    const btnId = e.target.dataset.rid;
    document.location.href = `/editRecipe/${btnId}`;
}
editRecipeEl.addEventListener("click", editRecipe)

function deleteRecipe(e) {
    const  btnId = e.target.dataset.rid;
    document.location.href = `/recipes/${btnId}`;
}
=======
>>>>>>> Stashed changes:public/js/viewRecipes.js
