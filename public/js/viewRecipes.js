const test = document.getElementById("view-recipes")
function toRecipes(){
    document.location.href = "/recipes"

}
test.addEventListener("click", toRecipes)