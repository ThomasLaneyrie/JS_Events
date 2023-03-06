// Fonctionnalité 1 :
// On commence par un petit échauffement : lorsque l'utilisateur va cliquer sur le footer (portant le tag <footer>), tu vas afficher le mot "clique" en console.
// Cette fonctionnalité doit être codée avec un addEventListener("click", function(){ } car c'est une bonne habitude à prendre ! 😇

function footerClick() {
  let count = 0;
  let footerSelect = document.querySelector("footer");
  footerSelect.addEventListener("click", footerClickDisplay);  
  function footerClickDisplay() {
    count += 1;
    console.log("clique numéro " + count);
  }
}
footerClick();

// Fonctionnalité 2 :
// On va enfin faire fonctionner ce satané "Hamburger Menu" qui s'affiche depuis le début mais qui n'actionne rien quand on clique dessus. C'est quoi un "hamburger menu" ? C'est ça, ce bouton avec trois lignes horizontales en haut à droite de la navbar.
// Tu vas faire que si quelqu'un clique sur ce bouton, l'élément HTML portant l'Id navbarHeader perde sa classe collapse. Une fois que ça, ça marche, fait que si on clique à nouveau dessus, la classe collapse soit rajoutée à nouveau à l'élément portant l'Id navbarHeader

function hamburgerMenu(){
  let hamburger = document.querySelector(".navbar-toggler");
  hamburger.addEventListener("click", hamburgerMenuDisplay);
  function hamburgerMenuDisplay() {
    hamburgerCollapse = document.querySelector("#navbarHeader");
    console.log(hamburgerCollapse.classList.toggle("collapse"));
  }
}
hamburgerMenu();

// Fonctionnalité 3 :
// À présent, on va faire cela : si on clique sur le bouton "Edit" de la première card, le texte de la card va se mettre en rouge de façon irréversible (sauf si on recharge la page). À toi de jouer !

function card1EditRed() {
  let card1ButtonEdit = document.querySelector(".btn-group").children[1];
  card1ButtonEdit.addEventListener("click", editRed)
  function editRed() {
    card1 = document.querySelector(".card-text");
    card1.style.color = "red";
  }
}
card1EditRed();

// Fonctionnalité 4 :
// On va faire quelque chose de similaire à la fonctionnalité 3 mais un peu plus complexe : si on clique sur le bouton "Edit" de la deuxième card, le texte de la card va se mettre en vert. Si on re-clique dessus, il redevient comme avant ! Tu l'as compris, il va falloir que tu cherches comment faire un "toggle" sur le style du texte. C'est plus compliqué que sur une classe.

function card2EditGreen() {
  let card2ButtonEdit = document.querySelectorAll(".btn-group")[1].children[1];
  card2ButtonEdit.addEventListener("click", editGreen);
  function editGreen() {
    card2 = document.querySelectorAll(".card-text")[1];
    if (card2.style.color == "") {
      card2.style.color = "green";
    } else if (card2.style.color == "green") {
        card2.style.color = "";
    } 
  }
}
card2EditGreen();

// Fonctionnalité 5 :
// Pour le fun, on va implémenter une fonctionnalité à la sauce ☢"nucléaire"🤯. Et comme elle est un peu dangereuse, on va la cacher… Voici comment elle doit marcher : si un utilisateur double clique sur la navbar en haut, tout Bootstrap disparaît et la page s'affiche comme si on avait oublié de mettre le CDN qui la relie au fichier CSS. Si possible, rends cette fonctionnalité réversible (un nouveau double-clic fait tout revenir à la normale).
function nuclearAttack() {
  let navbar = document.querySelector(".navbar");
  navbar.addEventListener("dblclick", bodyDisappear);
  let body = document.body;
  body.addEventListener("click", bodyAppear);

  function bodyDisappear() {
    linkCDN = document.querySelector("link");
      if (linkCDN.href !== "") {
        linkCDN.href = "";
      }
  }

  function bodyAppear() {
    linkCDN = document.querySelector("link");
    linkCDN.href = "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css";
  }
}
nuclearAttack();

// Fonctionnalité 6 :
// T'as déjà implémenté 5 fonctionnalités d'interaction ! C'est top ! On va commencer à corser les choses.
// La fonctionnalité sera la suivante : si un utilisateur passe sa souris sur le bouton "View" d'une card (n'importe laquelle), 
// celle-ci va se réduire. Cela veut dire que le texte disparaît, l'image n'apparaîtra qu'à 20 % de sa taille d'origine 
// et les boutons "Edit" / "View" restent visibles. Cette fonction sera réversible : s'il repasse sa souris, 
// la card redevient normale !

function viewReduce() {

  // Lignes ci-dessous permettent d'ajouter un style css my-new-class à mon document HTML. Et me permet de définir ce style
  const styleElement = document.createElement('style');
  const css = `
  .size-null {
    font-size: 0px;
  }
  .img-twenty {
    width: 20%;
  }
  `;

  styleElement.textContent = css;
  document.head.appendChild(styleElement);

  let viewEditButtons = document.querySelectorAll(".btn-group");
  for (let card = 0; card <= viewEditButtons.length-1; card++) {
    viewEditButtons[card].firstElementChild.addEventListener('mouseover', cardReduce);

    function cardReduce() {
      let cardTextToUpdate = document.querySelectorAll(".card-text")[card];
      cardTextToUpdate.classList.toggle("size-null");
      let cardImgToUpdate = document.querySelectorAll("img")[card];
      console.log(cardImgToUpdate);
      cardImgToUpdate.classList.toggle("img-twenty");
    }
  }
}
viewReduce();

// Fonctionnalité 7 :
// Allez on va rajouter un peu de WTF dans la page : si un utilisateur clique sur le bouton gris ==>, la dernière card (en bas à droite) va passer en premier (en haut à gauche). On va pouvoir faire tourner les cards !

function moveCardSix() {
  let changeCard = document.querySelector(".btn-secondary");
  changeCard.addEventListener("click", rollCard);
  function rollCard() {
    console.log(changeCard);
    let cardSix = document.querySelectorAll(".col-md-4")[5];
    let cardOne = document.querySelectorAll(".col-md-4")[0];
    let row = document.querySelectorAll(".row")[1];
    row.insertBefore(cardSix, cardOne);
  }
}
moveCardSix() 

// Fonctionnalité 8 :
// Évidemment tu t'y attendais : on va faire tourner les card dans l'autre sens aussi. Donc si un utilisateur clique sur le bouton bleu <==, la première card devra passer en dernier. À première vue, tu te dis que si tu as réussi à faire la fonctionnalité précédente, celle-ci c'est du gateau... sauf qu'il y a quelques pièges. 😈
function moveCardOne() {
  let changeCardReverse = document.querySelector(".btn-primary");
  changeCardReverse.addEventListener("click", rollBackCard);
  function rollBackCard(e) {
    e.preventDefault();
    let cardOne = document.querySelectorAll(".col-md-4")[0];
    let row = document.querySelectorAll(".row")[1];
    row.appendChild(cardOne);
  }
}
moveCardOne();

// Fonctionnalité 9 :
// La fonctionnalité se déclenchera si le logo de la page (JS & Events) est sélectionné et qu'on appuie sur une touche spécifique du clavier.
// Si l'utilisateur presse la touche "a", l'ensemble de la page va être condensé sur 4 colonnes Bootstrap à gauche de l'écran.
// Si l'utilisateur presse la touche "y", l'ensemble de la page va être condensé sur 4 colonnes Bootstrap au milieu de l'écran.
// Si l'utilisateur presse la touche "p", l'ensemble de la page va être condensé sur 4 colonnes Bootstrap à droite de l'écran.
// Si l'utilisateur presse la touche "b", tout redevient normal.

function eventLogo() {
  let logo = document.querySelector("strong");

  logo.addEventListener("mouseover", function() {
    document.addEventListener("keypress", modifyPage);
    let body = document.body;
    function modifyPage(e) {
      let name = e.key;
      if (/[ayp]/.exec(name)) {
        console.log("passe ici");
        body.classList = "";
      }
      if (name === "a") {
        body.classList.toggle("col-4");
      } else if (name === "y") {
        body.classList.toggle("offset-md-4");
      } else if (name === "p") {
        body.classList.toggle("offset-md-8");
      } else if (name === "b") {
        body.classList = "";
      }
    }
  })
}
eventLogo();