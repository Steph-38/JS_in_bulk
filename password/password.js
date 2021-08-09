checkPassword = () => {
  let pass = prompt("Please enter the password")
  let tag = document.getElementById('password')
  // Minimum 1 maj, 1 min et un chiffre
  let myRegex = /[a-z][A-Z][0-9]+/
  // Pareil mais minimum 8
  let myRegex2 = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/
  if (myRegex.test(pass)) {
    tag.innerHTML = "Le mot de passe est valable";
  } else {
    tag.innerHTML = "Le mot de passe n'est pas valable (8 caractères minimum contenant une min, maj et un chiffre)";
  }
}