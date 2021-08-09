checkPassword = () => {
  let pass = prompt('Please enter the password')
  let tag = document.getElementById('password')
  // Minimum 1 upper, 1 lower, 1 number
  let myRegex = /[a-z][A-Z][0-9]+/
  // Same but minimum 8 characters
  let myRegex2 = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/
  if (myRegex.test(pass)) {
    tag.innerHTML = "The password is valid"
  } else {
    tag.innerHTML = "The password is invalid (8 characters minimum including uppercase, lowercase and number)"
  }
}
