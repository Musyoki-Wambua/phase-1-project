document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");

  //trigger event listner that get email adn password values
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

  const publicKey = "b38c9d8d4620433cb70fe81c8f2fda8e";
  const privateKey = "495c242bcacbbdc5214e22b0eea0ff4e99a21f6e";

  const timestamp = "1";
  //const hash = md5(timestamp + privateKey + publicKey);

  const endpoint = "https://gateway.marvel.com/v1/public/characters";
  //const params = `apikey=${publicKey}&ts=${timestamp}&hash=${hash}`;
  
  //const url = `${endpoint}?${params}`;


// Fetch characters from the Marvel API
function fetchCharacters() {
  fetch('https://gateway.marvel.com/v1/public/characters?ts=1&apikey=b38c9d8d4620433cb70fe81c8f2fda8e&hash=5302dfea25f63a3f3b06c96ba8df6571')
    .then((response) => response.json())
    .then((data) => {
      // Get the results array from the data object
      let results = data.data.results;

      // Iterate over the results and render each character
      for (let i = 0; i < results.length; i++) {
        renderCharacter(results[i]);
      }
    })
    //.catch((error) => console.error(error));
}

// Render a single character
function renderCharacter(character) {
  // Get the character container element
  const characterContainer = document.getElementById('character-container');
  
  // Create a new character list element
  const characterList = document.createElement('div');
  // characterList.id = 'character-list-' + results.id
  characterList.classList.add('character-list');
  characterList.innerText = character.name;
  characterList.style.cursor = 'pointer'
  
  // Append the character list element to the character container
  characterContainer.appendChild(characterList);
  
  // Add a click event listener to the character list element
  characterList.addEventListener('click', () => {
    // Get the name display element
    const nameDisplay = document.getElementById('name-display');
    
    // Set the text of the name display element to the character's name
    nameDisplay.innerText = character.name;

      // Get the image display element
      const imageDisplay = document.getElementById('image-display');
    
      // Set the src of the image display element to the character's image URL
      imageDisplay.src = character.thumbnail.path + "." + character.thumbnail.extension;
      display.style.cursor = 'pointer'
  });  

}

// Fetch and render the characters when the page loads
fetchCharacters();

  
 
   
});

