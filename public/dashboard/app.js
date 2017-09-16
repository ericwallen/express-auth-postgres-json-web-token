var baseURL = "http://localhost:8080/"



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
