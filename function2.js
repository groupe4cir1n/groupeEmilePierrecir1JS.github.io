//Page2 Recherche
/*const showButton = document.getElementById('modal-btn');
const container = document.getElementById('modal-container');
const closebtn = document.getElementById('close-btn');

const showButton2 = document.getElementById('modal-btn2');
const container2 = document.getElementById('modal-container2');
const closebtn2 = document.getElementById('close-btn2')
showButton.addEventListener('click', () => {
    container.showModal(); //ouvre la fenetre modal
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
function copyplagia(){
    document.addEventListener('copy', (event) => { //En cas de copie d'un texte un message sur le plagiat s'affiche
        alert('Attention au plagiat');
    }
)};
copyplagia();*/

/*function changementImage(){
    //changement d'image en cas de click sur l'image
    
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
changeImage();*/
function container(){
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