const viewRecipesEl = document.getElementById("view-recipes");
const individualRecipeEl = document.getElementById("recipeList");
const deletebtn = document.getElementById('delete-btn');


function toAllRecipes() {
    document.location.href = "/recipes"
}
viewRecipesEl.addEventListener("click", toAllRecipes);

function toRecipe(e) {
    const btnId = e.target.dataset.rid;
    document.location.href = `/recipes/${btnId}`;
}
individualRecipeEl.addEventListener("click", toRecipe)


function deleteRecipe(e) {
    const  btnId = e.target.dataset.rid;
    document.location.href = `/recipes/${btnId}`;

}