let ratings = document.querySelectorAll(".rating");
let submitBtn = document.querySelector("#submit-btn");
let ratingState = document.querySelector("#rating-state");
let thankYouState = document.querySelector("#thank-you-state");
let ratingDisplay = document.querySelector("#rating-display");
let userRating;

thankYouState.style.display = "none"; //Hiding the thank you state at page load
ratings = [...ratings];
ratings.forEach((rating) => {
  rating.addEventListener("click", (e) => {
    userRating = ratings.indexOf(e.target) + 1; //When a rating is chosen, assign the choice to the variable userRating.
    e.target.style.backgroundColor = "hsl(25, 97%, 53%)"; //Change the style of the chosen rating
    e.target.style.color = "hsl(0, 0%, 100%)";
    ratings.forEach((rating) => {
      if (rating != e.target) {
        rating.style.backgroundColor = "hsl(216, 12%, 54%, 0.1)";
      } //Change all other ratings back to the default style
    });
  });
});

submitBtn.addEventListener("click", () => {
  if (userRating) {
    ratingState.style.display = "none"; //Hide rating state
    thankYouState.style.display = "block"; //Display thank you state
    ratingDisplay.innerText = `You selected ${userRating} out of 5`; //Show user the selected rating
  } else {
    alert("Please select a rating");
  }
});
