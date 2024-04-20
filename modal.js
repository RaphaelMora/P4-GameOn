function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
/////////////////////////////////////////////
// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelector(".close");
const form = document.querySelector("form[name='reserve']");
document.querySelector(".btn-submit").classList.remove("button");
/////////////////////////////////////////////
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// Close modal event
closeBtn.addEventListener("click", closeModal);
// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
// close modal form
function closeModal() {
  modalbg.style.display = "none";
}
/////////////////////////////////////////////
function createErrorMessage(id) {
  let dataError = document.getElementById(id);
  if (!dataError) {
    dataError = document.createElement("p");
    dataError.classList.add("data-error");
    dataError.id = id;
  }
  return dataError;
}
/////////////////////////////////////////////
// Fonction qui va vérifier que le champ prénom est correctement rempli
function checkFirstName() {
  // Recherche l'élément avec l'ID 'first', qui représente le champ prénom
  const firstName = document.getElementById("first");
  const firstNameRegex = /^[a-zA-Zéèàêâùïüë\s-]{2,30}$/;
  // Utilise la fonction 'createErrorMessage' pour créer un message d'erreur avec l'ID 'first-error'
  const dataError = createErrorMessage("first-error");
  // Retire d'abord la classe error-border pour réinitialiser l'état de validation
  firstName.classList.remove("error-border");
  // Vérifie si la valeur du champ prénom, après suppression des espaces, est vide
  if (!firstName.value.trim()) {
    // Si le champ prénom est vide, affiche un message d'erreur pour indiquer que le prénom est requis
    dataError.textContent = "Le prénom est requis.";
    // Vérifie si l'élément suivant n'est pas déjà le message d'erreur
    if (firstName.nextElementSibling !== dataError) {
      // Si ce n'est pas le cas, insère le message d'erreur juste après le champ prénom
      firstName.insertAdjacentElement("afterend", dataError);
    }
    // Ajoute la classe pour indiquer une erreur
    firstName.classList.add("error-border");
    // Retourne 'false' pour indiquer que la validation du champ prénom a échoué
    return false;
  } else if (!firstNameRegex.test(firstName.value)) {
    dataError.textContent =
      "Le prénom doit contenir uniquement entre 2 et 30 lettres, des tirets ou espaces.";
    if (firstName.nextElementSibling !== dataError) {
      firstName.insertAdjacentElement("afterend", dataError);
    }
    firstName.classList.add("error-border");
    return false;
  } else {
    // Si le champ prénom est correctement rempli, efface le message d'erreur
    dataError.textContent = "";
    // Retourne 'true' pour indiquer que la validation du champ prénom est réussie
    return true;
  }
}

function checkLastName() {
  const lastName = document.getElementById("last");
  const nameRegex = /^[a-zA-Zéèàêâùïüë\s-]{1,30}$/;
  const dataError = createErrorMessage("last-error");

  lastName.classList.remove("error-border");
  if (!lastName.value.trim()) {
    dataError.textContent = "Le nom est requis.";
    if (lastName.nextElementSibling !== dataError) {
      lastName.insertAdjacentElement("afterend", dataError);
    }
    lastName.classList.add("error-border");
    return false;
  } else if (!nameRegex.test(lastName.value)) {
    dataError.textContent =
      "Le nom doit contenir uniquement entre 2 et 30 lettres, des tirets ou espaces.";
    if (lastName.nextElementSibling !== dataError) {
      lastName.insertAdjacentElement("afterend", dataError);
    }
    lastName.classList.add("error-border");
    return false;
  } else {
    dataError.textContent = "";
    return true;
  }
}

function checkEmail() {
  const email = document.getElementById("email");
  const dataError = createErrorMessage("email-error");
  // Expression régulière pour valider l'email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  email.classList.remove("error-border");

  if (!email.value.trim()) {
    dataError.textContent = "L'email est requis.";
    if (email.nextElementSibling !== dataError) {
      email.insertAdjacentElement("afterend", dataError);
    }
    email.classList.add("error-border");

    return false;
    // Vérifie si la valeur du champ email ne correspond pas à la regex
  } else if (!emailRegex.test(email.value)) {
    dataError.textContent = "L'email est invalide.";
    email.classList.add("error-border");

    return false;
  } else {
    dataError.textContent = "";
    return true;
  }
}

function checkBirthdate() {
  const birthdate = document.getElementById("birthdate");
  const dataError = createErrorMessage("birthdate-error");
  // Crée un objet de date représentant la date actuelle
  const currentDate = new Date();
  // Crée un objet de date basé sur la valeur saisie dans le champ de la date de naissance
  const birthdateValue = new Date(birthdate.value);
  birthdate.classList.remove("error-border");

  if (!birthdate.value.trim()) {
    dataError.textContent = "La date de naissance est requise.";
    if (birthdate.nextElementSibling !== dataError) {
      birthdate.insertAdjacentElement("afterend", dataError);
    }
    birthdate.classList.add("error-border");

    return false;
    // Vérifie si la date de naissance saisie est bien avant la date actuelle
  } else if (birthdateValue > currentDate) {
    // Si la date de naissance est dans le futur, affiche un message d'erreur pour indiquer que la date de naissance ne peut pas être après la date du jours
    dataError.textContent =
      "La date de naissance ne peut pas être après la date du jours.";
    if (birthdate.nextElementSibling !== dataError) {
      birthdate.insertAdjacentElement("afterend", dataError);
    }
    birthdate.classList.add("error-border");

    return false;
  } else {
    dataError.textContent = "";
    return true;
  }
}

function checkQuantity() {
  const quantity = document.getElementById("quantity");
  const dataError = createErrorMessage("quantity-error");
  quantity.classList.remove("error-border");

  // Vérifie si la valeur du champ de la quantité est vide, inférieure à 0 ou supérieure à 99
  if (quantity.value === "" || quantity.value < 0 || quantity.value > 99) {
    // Si la valeur n'est pas comprise entre 0 et 99, affiche un message d'erreur pour indiquer que le nombre de tournois est invalide
    dataError.textContent = "Nombre de tournois invalide (0-99).";
    if (quantity.nextElementSibling !== dataError) {
      quantity.insertAdjacentElement("afterend", dataError);
    }
    quantity.classList.add("error-border");

    return false;
  } else {
    dataError.textContent = "";
    return true;
  }
}

function checkLocation() {
  const locations = document.getElementsByName("location");
  const dataError = createErrorMessage("location-error");
  // Récupère le conteneur parent du premier bouton radio pour localiser où insérer l'erreur
  const locationContainer = document.getElementById("location1").parentNode;

  // Insère l'élément d'erreur avant le premier bouton radio dans le conteneur des localisations
  locationContainer.insertAdjacentElement("beforebegin", dataError);

  // Parcourt chaque bouton radio pour vérifier si l'un d'entre eux est coché
  for (let location of locations) {
    if (location.checked) {
      // Si une localisation est sélectionnée, efface le message d'erreur
      dataError.textContent = "";
      return true;
    }
  }
  dataError.textContent = "Veuillez sélectionner un lieu.";
  return false;
}

function checkTerms() {
  const terms = document.getElementById("checkbox1");
  const dataError = createErrorMessage("terms-error");
  // Ajoute un écouteur d'événements pour afficher ou non le message d'erreur
  terms.addEventListener("change", function () {
    if (terms.checked) {
      // Si l'utilisateur coche la case, supprime le message d'erreur
      if (terms.nextElementSibling === dataError) {
        dataError.remove();
      }
    } else {
      // Si l'utilisateur décoche la case, affiche à nouveau le message d'erreur
      if (terms.nextElementSibling !== dataError) {
        terms.insertAdjacentElement("afterend", dataError);
        dataError.textContent =
          "Vous devez accepter les conditions d'utilisation.";
      }
    }
  });

  // Vérifie si la checkbox est non cochée au moment de la soumission
  if (!terms.checked) {
    dataError.textContent = "Vous devez accepter les conditions d'utilisation.";
    if (terms.nextElementSibling !== dataError) {
      terms.insertAdjacentElement("afterend", dataError);
    }
    return false;
  } else {
    if (terms.nextElementSibling === dataError) {
      // Si l'utilisateur a corrigé l'erreur, supprime le message d'erreur
      dataError.remove();
    }
    return true;
  }
}
/////////////////////////////////////////////
form.addEventListener("submit", function (e) {
  // Empêche le comportement par défault
  e.preventDefault();
  // Appelle la fonction de vérification pour le prénom [...] et stocke le résultat (vrai ou faux) dans isFirstNameValid [...]
  const isFirstNameValid = checkFirstName();
  const isLastNameValid = checkLastName();
  const isEmailValid = checkEmail();
  const isBirthdateValid = checkBirthdate();
  const isQuantityValid = checkQuantity();
  const isLocationSelected = checkLocation();
  const areTermsAccepted = checkTerms();

  // Vérifie si tous les champs sont valides
  if (
    isFirstNameValid &&
    isLastNameValid &&
    isEmailValid &&
    isBirthdateValid &&
    isQuantityValid &&
    areTermsAccepted &&
    isLocationSelected
  ) {
    // Si toutes les validations sont réussies, affiche une alerte
    // alert("Tous les champs sont valides. Formulaire prêt à être soumis.");
    // AZppel la fonction success
    success();
    // peut-être rajouter une rediction vers la page, ne pas afficher les infos dans l'url et stocker dans le ls?
  }
});
/////////////////////////////////////////////
// Fonction pour afficher un message de remerciement et changer le bouton de soumission
function success() {
  // Sélectionne le corps de la modal où le contenu sera modifié
  const modalBody = document.querySelector(".modal-body");
  // Efface le contenu de la modal
  modalBody.textContent = "";

  // Créer un nouveau paragraphe pour le message de remerciement
  const successText = document.createElement("p");
  modalBody.appendChild(successText);
  // J'utilise innerHTML pour pouvoir insérer un break
  successText.innerHTML = "Merci pour<br>votre inscription!";
  successText.style.textAlign = "center";
  successText.style.marginTop = "50%";
  successText.style.marginBottom = "50%";

  // Créer un nouveau bouton pour fermer la modal
  const closeSuccess = document.createElement("button");
  modalBody.appendChild(closeSuccess);
  closeSuccess.textContent = "Fermer";
  // Je récupère la même classe que celle du bouton de soumission pour garder le style
  closeSuccess.className = "btn-submit";
  closeSuccess.style.marginTop = "20px";
  closeSuccess.addEventListener("click", closeModal);
}
