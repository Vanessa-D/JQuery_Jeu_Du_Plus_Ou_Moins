// Création d'une variable qui contient :
// l'objet Math qui effectue des tâches mathématiques sur les nombres
// --> utilisé avec la méthode floor qui arrondit à l'entier inférieur
// + la méthode random qui ici retourne un nombre au hasard entre 1 (inclus) et 100 (inclus)
let mysteryNumber = Math.floor(Math.random() * 100) + 1;

// Initialisation de la variable i --> compteur
let i = 0;

$(function(){
    // Au clic du bouton Go !...
    $('#attemptButton').click(function(){
    // On récupère la valeur du nombre entré dans l'input
    let inputValue = $('#number').val();
    // On incrémente i
    i++;

    $('#tries').text(`Ta proposition : ${Number(inputValue)}`);

    if(Number(inputValue) && inputValue > 0 && inputValue < 101 && i < 7){
        //condition imbriquée qui définit les possibilités
        if(inputValue < mysteryNumber){
            $('#message').text(`C'est plus !`);
        }
        else if(inputValue > mysteryNumber){
            $('#message').text(`C'est moins !`);
        }
        else{
            $('#message').text(`Bien ouéj, t'as gagné en ${i} coups !`);
             
            // Bouton + input sont désactivés pour bloquer les essais --> méthode prop('disabled', true)
             $('#attemptButton, #number').prop('disabled', true); 
             // On créé un élément bouton à l'intérieur de la div playAgain --> méthode html()
             $('#playAgain').html('<button class="btn btn-dark" type="button">Joue encore</button>');
        }
    }
    else{
        //condition imbriquée qui définit les possibilités du "Sinon" de la condition principale
        if(i > 6){
            $('#message').text(`C'est beaucoup de tentatives là, NEXT !`);
            
            // Bouton + input sont désactivés pour bloquer les essais --> méthode prop('disabled', true)
            $('#attemptButton, #number').prop('disabled', true); 
            // On créé un élément bouton à l'intérieur de la div playAgain --> méthode html()
            $('#playAgain').html('<button class="btn btn-dark" type="button">Joue encore</button>');
        }
        else{
            $('#message').text(`Un nombre entre 1 et 100 !`);
        }
    }
    // On vide l'input et replace le focus à l'intérieur à chaque clic
    $('#number').val('');
    $('#number').focus();
    });
  
    // Au clic du bouton Joue encore...
    $('#playAgain').click(function(){ 
        i = 0; // Compteur remis à 0
        
        $('#attemptButton, #number').prop('disabled', false); // Bouton + input sont réactivés
        $('#message').text(''); // On change le contenu de l'id message en rien
        $('#tries').text(''); // On change le contenu de l'id tries en rien
        $('#playAgain').empty(); // On vide l'enfant de playAgain --> le bouton créé plus haut

        mysteryNumber = Math.floor(Math.random() * 100) + 1; // On donne un nouveau random à mysteryNumber
    });
});



/*
$(function gameOver(){
    // Bouton + input sont désactivés pour bloquer les essais
    $('#attemptButton, #number').prop('disabled', true); 
    // On créé un élément bouton à l'intérieur de la div playAgain --> méthode html()
    $('#playAgain').html('<button class="btn btn-info" type="button">Joue encore</button>');
});
*/



// En JS vanilla, on aurait :
/*
let mysteryNumber = Math.floor(Math.random() * 100) + 1;

// Initialisation d'un compteur pour le nombre de tentatives de l'utilisateur
let i = 0;

// Fonction qui récupère la valeur de l'input et affiche des alertes suivant les différents cas de figure
function testing(){
    let inputValue = document.getElementById("number").value;

    if(isNaN(inputValue) == false && inputValue > 0 && inputValue < 101 && i < 7){
        i++;
        //condition imbriquée
        if(inputValue < mysteryNumber){
            alert("C'est plus !");
        }
        else if(inputValue > mysteryNumber){
            alert("C'est moins !");
        }
        else{
            alert(`Bien ouéj, t'as gagné en ${i} coups !`);
        }
    }
    else{
        //condition imbriquée
        if(i > 6){
            alert("C'est beaucoup de tentatives là, NEXT !")
        }
        else{
            alert("Entre 1 et 100 !");
        }
    }
}
*/