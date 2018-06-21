function displayInfo() {
  // Déclaration des variales contenant les valeurs des champs <input>
  var lastname = document.getElementById('lastname').value;
  var firstname = document.getElementById('firstname').value;
  var city = document.getElementById('city').value;
  var regex = /^[a-zA-Z\-éèêëàâäîï]+$/;
  // Vérifie que les caractères sont valides
  if (regex.test(lastname) == true && regex.test(firstname) == true && regex.test(city) == true) {
    // Affiche les variables en cas de caractères valides
    alert('Nom : ' + lastname + '\nPrénom : ' + firstname + '\nVille : ' + city);
  } else {
    // Afffiche un message en cas de caractères non-valides
    alert('Please enter valid characters');
  }
}
