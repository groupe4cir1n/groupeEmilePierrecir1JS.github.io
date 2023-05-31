function container(){
    let showButton = document.getElementById('modal-btn'); //On récupère l'id du bouton pour ouvrir la fenêtre modale
    let container = document.getElementById('modal-container'); //On récupère l'id de la fenetre modale
    let closebtn = document.getElementById('close-btn');//On recupère l'id du bouton pour fermer la fenetre modale
    let showButton2 = document.getElementById('modal-btn2');
    let container2 = document.getElementById('modal-container2');
    let closebtn2 = document.getElementById('close-btn2')
    showButton.addEventListener('click', () => { // Si il y a un click sur le bouton
        container.showModal(); //ouvre la fenetre modal
        //agrandir la fenetre modal
        container.style.width = '100%';
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