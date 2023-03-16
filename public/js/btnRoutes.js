// const homeEl = document.getElementById("home-page")
// const viewRecipesEl = document.getElementsByClassName("view-recipes");
const viewRecipesEl = document.getElementById("view-recipes");
const individualRecipeEl = document.getElementById("recipeList");
const addRecipeEl = document.getElementById("add-recipe");
const editRecipeEl = document.getElementById("edit-recipe");
const deletebtn = document.getElementById('delete-btn');

// function toHome() {
//     document.location.href = "/"
// }
// homeEl.addEventListener("click", toHome);

function toAllRecipes() {
    document.location.href = "/recipes"
}
viewRecipesEl.addEventListener("click", toAllRecipes);

function toRecipe(e) {
    const btnId = e.target.dataset.rid;
    document.location.href = `/recipes/${btnId}`;
}
individualRecipeEl.addEventListener("click", toRecipe)

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