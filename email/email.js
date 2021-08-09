function checkEmail() {
  let email = prompt('Please enter the email')
  let tag = document.getElementById('email')
  let myRegex = /^[a-zA-Z0-9._-]+@[a-z0-9_-]+\.[a-z]{2,6}$/

  if (myRegex.test(email)) {
    tag.innerHTML = "The email is valid"
  } else {
    tag.innerHTML = "The email is invalid"
  }
}
