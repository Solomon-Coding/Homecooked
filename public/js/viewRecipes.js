const viewRecipesEl = document.getElementById("view-recipes")
const individualRecipeEl = document.getElementById("individualRecipe")

function toAllRecipes(){
    document.location.href = "/recipes"
}
viewRecipesEl.addEventListener("click", toAllRecipes);

function toRecipe(){
    document.location.href = "/recipes/:id"
}
individualRecipeEl.addEventListener("click", toRecipe)