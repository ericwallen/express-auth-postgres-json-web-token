const url = 'http://localhost:8080'
const token = localStorage.getItem('token')

function authorizeUser() {
  if (token) {
    location.href = '/dashboard'
  }
}

authorizeUser();


var statusMessage = document.getElementById('status-message')


document.querySelector('#signUpSubmit').addEventListener('click', function(event){
  event.preventDefault()
  var name = document.querySelector('#name-sign-up').value
  var username = document.querySelector('#username-sign-up').value
  var email = document.querySelector('#email-sign-up').value
  var password = document.querySelector('#password-sign-up').value
  var data = {name, username, email, password}
  console.log(data);
  $.post(`${url}/signup`, data)
    .then(response => {
      if (response.message){
        statusMessage.innerHTML = response.message
      } else if (response.error){
        statusMessage.innerHTML = response.error
      } else {
        console.log(response);
      }
    })
})


document.querySelector('#logInSubmit').addEventListener('click', function(event){
  event.preventDefault()
  var email = document.querySelector('#email-log-in').value
  var password = document.querySelector('#password-log-in').value
  var data = {email, password}
  $.post(`${url}/login`, data)
   .then(response => {
     if (response.error) {
       statusMessage.innerHTML = response.error
     } else {
       localStorage.setItem('token', response.data)
       location.href = 'dashboard'
     }
   })
})
