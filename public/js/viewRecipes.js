const viewRecipesEl = document.getElementById("view-recipes")
const individualRecipeEl = document.getElementById("recipeList")

function toAllRecipes(){
    document.location.href = "/recipes"
}
viewRecipesEl.addEventListener("click", toAllRecipes);

function toRecipe(e){
    const btnId = e.target.dataset.rid;
    document.location.href = `/recipes/${btnId}`;
}
individualRecipeEl.addEventListener("click", toRecipe)