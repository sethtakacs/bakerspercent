
function navigateToRecipe() {
  const dropdown = document.getElementById("recipeSelect");
  const selectedValue = dropdown.value;
  if (selectedValue) {
    window.location.href = selectedValue;
  }
}
