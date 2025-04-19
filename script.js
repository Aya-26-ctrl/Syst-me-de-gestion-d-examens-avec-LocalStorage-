document.getElementById('form-examen').addEventListener('submit', function(e) {
    e.preventDefault();
  
    // Récupération des données du formulaire
    const nomExamen = document.getElementById('nom').value;
    const duree = parseInt(document.getElementById('duree').value);
    const description = document.getElementById('description').value;
    const proprietaire = document.getElementById('proprietaire').value;
    const email = document.getElementById('email').value.toLowerCase(); // email unique
  
    if (!email) {
      alert("L'email est requis !");
      return;
    }
  
    const examen = {
      nom: nomExamen,
      duree: duree,
      description: description,
      proprietaire: proprietaire,
      email: email,
      questions: []
    };
  
    // Clé basée sur l'email
    const examsKey = 'examens_' + email;
    const exams = JSON.parse(localStorage.getItem(examsKey)) || [];
  
    exams.push(examen);
    localStorage.setItem(examsKey, JSON.stringify(exams));
  
    alert('Examen ajouté avec succès !');
    this.reset();
  
    afficherExamens(email); // Affiche les examens du propriétaire juste après ajout
  });
  
  // Affichage des examens d’un utilisateur (basé sur son email)
  function afficherExamens(email) {
    const examsKey = 'examens_' + email;
    const exams = JSON.parse(localStorage.getItem(examsKey)) || [];
  
    const container = document.getElementById('liste-examens');
    container.innerHTML = `<h2>Liste des examens de ${email}</h2>`;
  
    if (exams.length === 0) {
      container.innerHTML += `<p>Aucun examen trouvé.</p>`;
      return;
    }
  
    exams.forEach((exam, index) => {
      const div = document.createElement('div');
      div.innerHTML = `
        <h3>Examen ${index + 1} : ${exam.nom}</h3>
        <p><strong>Durée :</strong> ${exam.duree} min</p>
        <p><strong>Description :</strong> ${exam.description}</p>
        <hr/>
      `;
      container.appendChild(div);
    });
  }
  