document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login");
  const loginButton = document.getElementById("login-button");
  const loginPopup = document.getElementById("login-popup");
  loginButton.addEventListener("click", () => {
    loginPopup.style.display = "block";
  });

  //trigger event listner that get email and password values
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("Form submitted");

    // Check if the form has already been submitted
    if (loginForm.style.display === "none") {
      // If the form has already been submitted, do nothing
      return;
    }
    //get email and password values
    const email = loginForm.elements.email.value;
    const password = loginForm.elements.password.value;

    if (email == "test@example.com" && password == "password") {
      alert("LOGIN SUCCESSFUL!!");
    } else alert("LOGIN SUCCESSFUL!!");

    //after login is done, form is closed
    loginForm.style.display = "none";
    loginPopup.style.display = "none";
  });

  // Get the search form element
  const searchForm = document.getElementById("search-form");

  // Add a submit event listener to the search form
  searchForm.addEventListener("submit", (event) => {
    event.preventDefault();

    // Get the search input value
    const searchInput = document.getElementById("search-input");

    // Get the search query from the search input element
    const searchQuery = searchInput.value;

    // Clear the search input element
    searchInput.value = "";

    // Search for characters matching the search query
    searchCharacters(searchQuery);
  });

  /// Search for characters matching the search query
function searchCharacters(searchQuery) {
  const searchUrl = `https://gateway.marvel.com/v1/public/characters?nameStartsWith=${searchQuery}&ts=1&apikey=fbba092e440b12f9973140191f427182&hash=3760cd56b1bf07ff1707f3c7b0092c3d`;

  // Fetch characters from the Marvel API
  fetch(searchUrl)
    .then((response) => response.json())
    .then((data) => {
      
      // Get the results array from the data object
      const results = data.data.results;

      // Filter the results by the search query
      const filteredResults = results.filter((character) => {
        // Check if the character's name includes the search query
        return character.name
          .toLowerCase()
          .includes(searchQuery.toLowerCase());
      });

      // Clear the character list container
      const characterListContainer =
        document.getElementById("character-list");
      characterListContainer.innerHTML = "";

      // If no filtered results, alert the user
      if (filteredResults.length === 0) {
        alert(
          `No characters found in database with the name "${searchQuery}"`
        );
        characterListContainer.innerHTML = `<button id="back-button">Back</button>`;
        const backButton = document.getElementById("back-button");
        backButton.addEventListener("click", () => {
          location.reload();
        });
      }

      for (let i = 0; i < filteredResults.length; i++) {
        renderCharacter(filteredResults[i]);
      }
    });
}

// // Add the hover effect to the character image
// function addHoverEffect(characterImage) {

//   const imageCaption =characterImage.nextElementSibling;

//   // Add the mouseenter and mouseleave event listeners to the character image
//   characterImage.addEventListener("mouseenter", () => {
//     imageCaption.style.display = "block";
//   });
//   characterImage.addEventListener("mouseleave", () => {
//     imageCaption.style.display = "none";
//   });
// }

// Render the character data on the page
function renderCharacter(character) {
  // Get the character list container element
  const characterListContainer = document.getElementById("character-list");

  // Check if the character list container element is present
  if (!characterListContainer) {
    return;
  }

  // Create a new div element to contain the character data
  const characterDiv = document.createElement("div");
  characterDiv.id = 'character-div';
  characterDiv.classList.add("character");
  characterDiv.style.width = "400px";
  characterDiv.style.height = "400px";
  characterDiv.style.clear = "left";

  // Add the character name to the div element
  characterDiv.innerHTML = `<h2 class= "heading">${character.name}</h2>`;

  // Create a wrapper div element to contain the character image and description
  const wrapperDiv = document.createElement("div");
  wrapperDiv.style.clear = "left";

  // Add the character image to the wrapper div 
  wrapperDiv.innerHTML += `<img id= "characterImage"src="${character.thumbnail.path}.${character.thumbnail.extension}" alt="${character.name}" style="float:left; width: 400px; height: 400px;">`;

  // Add the character description to the wrapper div element

  const imageCaption = document.createElement('div')
  imageCaption.classList.add = 'image-caption';
  imageCaption.innerText = character.description;
  console.log(character.description)

  if (character.description) {
    imageCaption.innerText = character.description;
  } else {
    imageCaption.innerText = `No description available`;
  }
  imageCaption.style.display = "block";

  wrapperDiv.appendChild(imageCaption);

  // Add the character powers to the wrapper div element
  const powersParagraph = document.createElement("p");
  if (character.powers) {
    powersParagraph.innerText = `Powers: ${character.powers.join(", ")}`;
  } else {
    powersParagraph.innerText = `No powers available`;
  }
  wrapperDiv.appendChild(powersParagraph);

  // Get the character image element
  const characterImage = wrapperDiv.querySelector("#characterImage");

  // // Add the hover effect to the character image
  // addHoverEffect(characterImage)

  // Append the wrapper div to the character div
  characterDiv.appendChild(wrapperDiv);

  // Append the character div to the character list container
  characterListContainer.appendChild(characterDiv);
}
});