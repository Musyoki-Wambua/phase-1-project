document.addEventListener("DOMContentLoaded", () => {

  const loginForm = document.getElementById("login");

  //trigger event listner that get email and password values
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    //get email and password values
    const email = loginForm.elements.email.value;
    const password = loginForm.elements.password.value;

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
const searchInput = document.getElementById('search-input');

  // Get the search query from the search input element
  const searchQuery = searchInput.value;

    // Clear the search input element
    searchInput.value = "";


  // Search for characters matching the search query
  searchCharacters(searchQuery);
});


  // Search for characters matching the search query
function searchCharacters(searchQuery) {
  const searchUrl = (`https://gateway.marvel.com/v1/public/characters?nameStartsWith=${searchQuery}&ts=1&apikey=fbba092e440b12f9973140191f427182&hash=3760cd56b1bf07ff1707f3c7b0092c3d`);
  
  // Fetch characters from the Marvel API
  fetch(searchUrl)
    .then((response) => response.json())
    .then((data) => {
      // Get the results array from the data object
      const results = data.data.results;

      // Filter the results by the search query
      const filteredResults = results.filter((character) => {

        // Check if the character's name includes the search query
        return character.name.toLowerCase().includes(searchQuery.toLowerCase());
      });

      // Clear the character list container
      const characterListContainer = document.getElementById('character-list');
      characterListContainer.innerHTML = "";
      
      for (let i = 0; i < filteredResults.length; i++) {
        renderCharacter(filteredResults[i]);
      }
    })
  }
    function renderCharacter(character) {
      // Get the character list container element
      const characterListContainer = document.getElementById("character-list");
    
      // Create a new div element to contain the character data
      const characterDiv = document.createElement("div");
    
      // Add the character name to the div element
      characterDiv.innerHTML = `<h2>${character.name}</h2>`;
    
      // Add the character description to the div element
      characterDiv.innerHTML += `<p>${character.description}</p>`;
    
      // Add the character image to the div element
      characterDiv.innerHTML += `<img src="${character.thumbnail.path}.${character.thumbnail.extension}" alt="${character.name}" style="width: 400px; height: 400px;">`;
    
      // Append the character div to the character list container
      characterListContainer.appendChild(characterDiv);
    }renderCharacter()

});
