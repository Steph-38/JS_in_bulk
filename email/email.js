function checkEmail() {
  let email = prompt('Saisie de l\'email')
  let tag = document.getElementById('email')
  let myRegex = /^[a-zA-Z0-9._-]+@[a-z0-9_-]+\.[a-z]{2,6}$/

  if (myRegex.test(email)) {
    tag.innerHTML = "le mail est valable"
  } else {
    tag.innerHTML = "le mail n'est pas valable"
  }
}