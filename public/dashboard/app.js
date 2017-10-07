var baseURL = "https://intense-journey-34289.herokuapp.com/"



function logout() {
  localStorage.removeItem('token')
  location.href = '/'
  console.log('this is happening');
}

const token = localStorage.getItem('token')

function parsedJWT(token) {
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace('-', '+').replace('_', '/');
  return JSON.parse(window.atob(base64));
}

const parsedToken = parsedJWT(token)

console.log(parsedToken);


$.get(`${baseURL}secrets-by-user/${parsedToken.id}`)
  .then(function(data){
    for (var i = 0; i < data.length; i++) {
      $.each(data[i], function(){
        loopedData = (`<b style="color: orange">SECRET:</b>  ${data[i].description}`)


      })
      document.getElementById('secrets-data').innerHTML += (`<b>NAME:</b> ${parsedToken.name}<br><br> <b>USERNAME:</b> ${parsedToken.username}<br><br> <b>EMAIL:</b> ${parsedToken.email}<br><br> ${loopedData}`)
        }
      })
