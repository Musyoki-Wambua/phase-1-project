document.addEventListener('DOMContentLoaded', () => {

  const loginForm = document.getElemtById('login-form')

  //trigger event listner that get email adn password values
  loginForm.addEventListener (('submit'), (event) => {
    event.preventDefault();

    const email = loginForm.target.email.value;
    const password = loginForm.target.password.value;

    //after login is done, form is closed
    loginForm.style.display = 'none'



  })

  fetch ('https://gateway.marvel.com/v1/public/characters?apikey=b38c9d8d4620433cb70fe81c8f2fda8e')
  .then (response => response.json())
 // .then ((data) => console.log(data))

  console.log(jncnj)

})
