document.addEventListener("DOMContentLoaded", () => {

  const loginForm = document.getElementById("login-form");

  //trigger event listner that get email and password values
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    //get email and password values
    const email = loginForm.target.email.value;
    const password = loginForm.target.password.value;

    if (email == "test@example.com" && password == "password") {
      alert("LOGIN SUCESSFUL!!");
    } else alert("LOGIN SUCESSFUL!!");

    //after login is done, form is closed
    loginForm.style.display = "none";
  });

// Get the search form element
const searchForm = document.getElementById('search-form');

// Add a submit event listener to the search form
searchForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // Get the search input value
const searchInput = document.getElementById ('search-input');

  // Get the search query from the search input element
  const searchQuery = searchInput.value;

    // Clear the search input element
    searchInput.value = "";


  // Search for characters matching the search query
  searchCharacters(searchQuery);

  const searchUrl = `https://gateway.marvel.com/v1/public/characters?nameStartsWith=${searchInput}&ts=1&apikey=b38c9d8d4620433cb70fe81c8f2fda8e&hash=5302dfea25f63a3f3b06c96ba8df6571`;


  // Search for characters matching the search query
function searchCharacters(searchQuery) {

  // Fetch characters from the Marvel API
  fetch(searchUrl)
    .then((response) => response.json())
    .then((data) => {
      // Get the results array from the data object
      let results = data.data.results;

      // Filter the results by the search query
      const filteredResults = results.filter((character) => {

        // Check if the character's name includes the search query
        return character.name.toLowerCase().includes(searchQuery.toLowerCase());
      });

      // Clear the character list container
      const characterListContainer = document.getElementById('character-list')
    })
  }
})  
});
