//toute les pages
function loader(){//affiche le loader pendant 2 secondes
    let loader = document.getElementsByClassName('loader');
    setTimeout(function(){//après 2 secondes on enlève le loader
        loader[0].style.display = 'none';
    }, 2000);
}

function copy() {
  document.addEventListener('copy', function(e) {//si on copie quelque chose
      if (e) {//si l'évènement existe
          e.preventDefault();//on empêche le comportement par défaut
          alert('Le plagiat est interdit');
      }
  });
}


function horloge(){
    //ajoute un chronomètre qui compte le temps passé sur la page
    let chrono = document.getElementsByClassName('timer')[0];
    let time = -2;
    chrono.innerHTML = time;
    setInterval(function(){
        time++;
        chrono.innerHTML = time;
    }
    , 1000);
    //ajoute une horloge qui indique l'heure 
    let horloge = document.getElementsByClassName('clock')[0];
    setInterval(function(){//fonction qui se répète toutes les secondes
        date = new Date();//récupère la date
        heure = date.getHours();
        minute = date.getMinutes();
        seconde = date.getSeconds();
        horloge.innerHTML = heure+':'+minute+':'+seconde;
    }
    , 1000);
    
}


    

  



//pages 3 Membre
function confirmMembre() {//affiche une boite de dialogue pour confirmer l'accès à la page membre
  event.preventDefault();//empêche le comportement par défaut du bouton pour pouvoir afficher la boite de dialogue
  
  let confirmation = confirm("Êtes-vous sûr de vouloir accéder à la page des membres ?");
  if (confirmation) {
    window.location.href = "membre.html";
    }
  }

function modeEdition() {//mode édition pour modifier les noms des membres
    let admin = prompt('Entrez le nom du profil administrateur');
    if (admin !== 'admin') {
      alert('Vous n\'êtes pas en mode édition');
      return;
    }
    
    let adminpwd = prompt('Entrez le mot de passe du profil administrateur');
    if (adminpwd !== 'admin') {
      alert('Vous n\'êtes pas en mode édition');
      return;
    }
    
    alert('Vous êtes en mode édition');
  
    let names = document.getElementsByClassName('name');//récupérer les noms de la classe name
    Array.from(names).forEach(function(name) {//pour chaque nom de la classe name on crée un input de l'input on utilise Array car on ne peut pas utiliser forEach sur un HTMLCollection(qui est une liste d'éléments)
      let nom = name.innerHTML;//on récupère le texte du nom
      let input = document.createElement('input');
      input.type = 'text';
      input.value = nom;
      name.innerHTML = '';
      name.appendChild(input);
    });
  
    document.addEventListener('keyup', function(event) {//si on appuie sur entrée on valide les changements
      if (event && event.keyCode === 13) {//si l'évènement existe et que la touche appuyée est entrer
        let inputs = document.getElementsByTagName('input');
        Array.from(inputs).forEach(function(input) {//pour chaque input on crée un span avec le texte de l'input on utilise Array car on ne peut pas utiliser forEach sur un HTMLCollection(qui est une liste d'éléments)
          let name = input.value;
          let elementDunom = document.createElement('span');
          elementDunom.className = 'name';
          elementDunom.innerHTML = name;
          input.parentNode.replaceChild(elementDunom, input);
        });
        alert('Vous n\'êtes plus en mode édition');
      }
    });
  }
  




function ajouterMembre() {//ajouter un membre à la page membre
        let profileCard = document.createElement("div");//créer une div
        profileCard.classList.add("profile-card");//ajouter la classe profile-card à la div
        let profilePicture = document.createElement("img");//créer une image
        profilePicture.src = "image/0.jpg";//ajouter l'image
        profilePicture.alt = "Profile picture";//ajouter l'alt
        profilePicture.classList.add("profile-picture");//ajouter la classe profile-picture à l'image
        profileCard.appendChild(profilePicture);//ajouter l'image à la di
        let name = document.createElement("div");//créer une div
        name.classList.add("name");//ajouter la classe name à la div
        let nameText = prompt('Entrez le nom du nouveau membre');
        name.textContent = nameText;
        profileCard.appendChild(name)
        let title = document.createElement("div");//créer une div
        title.classList.add("title");//ajouter la classe title à la div
        title.textContent = "Nouveau membre";
        profileCard.appendChild(title)
        let affiliation = document.createElement("div");//créer une div
        affiliation.classList.add("affiliation");//ajouter la classe affiliation à la div
        affiliation.textContent = "ISEN Yncréa Ouest - Nantes";
        profileCard.appendChild(affiliation)
        let email = document.createElement("div");//créer une div
        email.classList.add("email");//ajouter la classe email à la div
        email.textContent = nameText+"[at]isen-ouest.ycnrea.fr";
        profileCard.appendChild(email);

        let button = document.createElement("button");//créer un bouton
        button.classList.add("button");//ajouter la classe button au bouton
        button.textContent = "Supprimer le membre";
        button.addEventListener('click', function(){//ajouter un évènement au bouton
            supprimerMembre();
        }
        );
        profileCard.appendChild(button);//ajouter le bouton à la div profile-car
        let contactInfo = document.createElement("div");//créer une div
        contactInfo.classList.add("contact-info");//ajouter la classe contact-info à la di
        profileCard.appendChild(contactInfo);//ajouter la div à la div profile-card
        document.body.appendChild(profileCard);//ajouter la div profile-card au corps de la pag
        let container = document.getElementsByClassName('container')[0];//récupérer la div container
        container.appendChild(profileCard);//ajouter la div profile-card à la div container
    }


function supprimerMembre(){
//supprimer la carte membre profile-card où ce trouve le bouton
    let profileCard = document.getElementsByClassName('profile-card')[0];
    profileCard.remove();
}















    

//Page thematique de recherche 
/*function container(){
    let showButton = document.getElementById('modal-btn'); //On récupère l'id du bouton pour ouvrir la fenêtre modale
    let container = document.getElementById('modal-container'); //On récupère l'id de la fenetre modale
    let closebtn = document.getElementById('close-btn');//On recupère l'id du bouton pour fermer la fenetre modale
    let showButton2 = document.getElementById('modal-btn2');
    let container2 = document.getElementById('modal-container2');
    let closebtn2 = document.getElementById('close-btn2')
    showButton.addEventListener('click', () => { // Si il y a un click sur le bouton
        container.showModal(); //ouvre la fenetre modal
        //agrandir la fenetre modal pour qu'elle prenne toute la page
        container.style.width = "100%";
        container.style.height = "100%";
        container.style.margin = "0";
    });
    closebtn.addEventListener('click', () => {
        container.close(); // Ferme la fenetre modal
    });

    showButton2.addEventListener('click', () => {
        container2.showModal(); //ouvre la fenetre modal
    });
    closebtn2.addEventListener('click', () => {
        container2.close(); // Ferme la fenetre modal
    });
  }
container();
*/


  


//page publication
function namefiltre() {
    
    let input = document.getElementById("myInput");
    let filter = input.value.toUpperCase();
    let table = document.getElementsByClassName("publi")[0];
    let tr = table.getElementsByTagName("tr");
  
    for (i = 0; i < tr.length; i++) {//pour chaque ligne de la table
      td = tr[i].getElementsByTagName("td")[2];//on prend la 3eme colonne
      if (td) {//si la colonne existe
        txtValue = td.textContent || td.innerText;//on prend le texte de la colonne
        if (txtValue.toUpperCase().indexOf(filter) > -1) {//si le nom de l'auteur contient le texte recherché
          tr[i].style.display = "";//on affiche la ligne
        } else {//sinon on la cache
          tr[i].style.display = "none";
        }
      }
    }
  }

function  titrefiltre(){
    let input = document.getElementById("myInput2");
    let filter = input.value.toUpperCase();//on prend le texte recherché sans tenir compte de la casse ou des accents
    let table = document.getElementsByClassName("publi")[0];
    let tr = table.getElementsByTagName("tr");
  
    for (i = 0; i < tr.length; i++) {// boucle parcourt toute les lignes de la table.
      td = tr[i].getElementsByTagName("td")[1];//on cherche la colonne
      if (td) {//si la colonne existe
        txtValue = td.textContent || td.innerText;//on prend le texte de la colonne
        if (txtValue.toUpperCase().indexOf(filter) > -1) {//si le nom de l'auteur contient le texte recherché
          tr[i].style.display = "";//on affiche la ligne
        } else {//sinon on la cache
          tr[i].style.display = "none";
        }
      }
    }
}









function changeImage(){
  let image = document.getElementById('img0');
  let image1 = document.getElementById('img1');
  let image2 = document.getElementById('img2');
  let image3 = document.getElementById('img3')

  image.addEventListener('click', () => {
      image.src = 'https://media.lesechos.com/api/v1/images/view/5c6ba5f93e45462730262d35/1280x720/060723627156-web-tete.jpg'
  });
  image1.addEventListener('click', () => {
      image1.src ='https://s1.dmcdn.net/v/Tc7AZ1Y1FhqxHBxJb/x720'
  });
  image2.addEventListener('click', () => {
      image2.src="https://blog.cdn.own3d.tv/resize=fit:crop,height:400,width:600/MO4UcY4SR1K6AnShORk4"
  });
  image3.addEventListener('click', () => {
      image3.src="https://pbs.twimg.com/media/Euq-wexWQAABqnP?format=jpg&name=large"
  });
}
changeImage();



function valide(){
  let nom = document.getElementById('nom').value;
  let email = document.getElementById('mail').value;
  let message = document.getElementById('message').value;
  if(nom == "" || email == "" || message == ""){
    document.getElementById('valider').style.backgroundColor = "red";
  }
  else{

    document.getElementById('valider').style.backgroundColor = "green";

      jeu();

  
  }

}

function jeu(){
  let choix = prompt('Choisissez entre pierre, feuille ou ciseaux');
  //math.random() renvoie un nombre aléatoire entre 1,2,3
  let choixOrdi = Math.floor(Math.random() * 3) + 1;
  if (choixOrdi = 1) {
      choixOrdi = 'pierre';
  } else if(choixOrdi = 2) {
      choixOrdi = 'feuille';
  } else if(choixOrdi = 3){
      choixOrdi = 'ciseaux';
  }
  alert('L\'ordinateur a choisi '+choixOrdi);
  if (choix === choixOrdi) {
      alert('Egalité');
  } else if ((choix === 'pierre' && choixOrdi === 'ciseaux') || (choix === 'feuille' && choixOrdi === 'pierre') || (choix === 'ciseaux' && choixOrdi === 'feuille')) {
      alert('Vous avez gagné');
  } else {
      alert('Vous avez perdu');
  }
}