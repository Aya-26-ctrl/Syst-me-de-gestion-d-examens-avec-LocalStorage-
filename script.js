// TODO : Ajouter un écouteur d'événement sur le formulaire
document.getElementById('form-examen').addEventListener('submit', function(e) {
  e.preventDefault();

  // TODO : Récupérer les valeurs du formulaire
  const examen = {
      nom: document.getElementById('nom').value,
      duree: parseInt(document.getElementById('duree').value),
      description: document.getElementById('description').value,
      proprietaire: document.getElementById('proprietaire').value,
      questions: []
  };

  // TODO : Créer une clé unique pour chaque utilisateur, en utilisant un identifiant unique pour éviter les conflits de noms
  // Utilisation d'un identifiant unique pour chaque utilisateur, généré par exemple à partir de leur nom + un timestamp
  const uniqueOwnerKey = examen.proprietaire.trim().toLowerCase() + "_" + Date.now();

  // TODO : Sauvegarder l'examen dans le localStorage sous une clé unique basée sur le nom du propriétaire
  const examsKey = 'examens_' + uniqueOwnerKey;
  const exams = JSON.parse(localStorage.getItem(examsKey)) || [];
  exams.push(examen);
  localStorage.setItem(examsKey, JSON.stringify(exams));

  alert('Examen ajouté avec succès !');
  this.reset();
});
