const incrementBtn = document.querySelector("#increment-btn");
/*
incrementBtn.addEventListener("click", function () {
  console.log("The button was clicked");
});
*/

// creating function for event listener
function countClick() {
  console.log("The button was clicked");
}

incrementBtn.addEventListener("click", countClick);
