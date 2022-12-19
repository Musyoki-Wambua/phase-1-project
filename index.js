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
  const hash = md5(timestamp + privateKey + publicKey);

  const endpoint = "https://gateway.marvel.com/v1/public/characters";
  const params = `apikey=${publicKey}&ts=${timestamp}&hash=${hash}`;
  
  const url = `${endpoint}?${params}`;

  fetch('https://gateway.marvel.com/v1/public/characters?ts=1&apikey=b38c9d8d4620433cb70fe81c8f2fda8e&hash=5302dfea25f63a3f3b06c96ba8df6571')
    .then((response) => response.json())
    .then((data) => console.log(data));

});

