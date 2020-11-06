let body = document.getElementsByTagName("body")[0];
let h1 = document.getElementsByTagName("h1")[0];
h1.textContent = "Re-bonjour " + localStorage.getItem("name");

let newH3 = document.createElement("h3");
newH3.textContent = "Sa culture";
body.appendChild(newH3);
let newP = document.createElement("p");
newP.innerHTML =
  "Le noyau de la culture du Brésil est le résultat du mélange entre les traditions et les coutumes des trois groupes qui ont contribué à façonner l'identité nationale du pays : les fondateurs portugais, les Amérindiens et les immigrants qui sont venus au Brésil au cours des siècles (Européens, Africains, Orientaux, Slaves, Scandinaves, etc.).";
body.appendChild(newP);

newP.addEventListener("mouseover", changeColor);
function changeColor(e) {
  newP.style.color = "white";
  if (body.children[5] == undefined) {
    let newh4 = document.createElement("h4");
    newh4.textContent = "cliquez pour plus d'informations";
    newh4.setAttribute("class", "moreInfo");
    body.appendChild(newh4);
  } else {
    return;
  }
}

newP.addEventListener("mouseout", colorBack);
function colorBack(e) {
  newP.style.color = "black";
  let moreInfo = document.querySelector(".moreInfo");
  if (moreInfo) {
    body.removeChild(moreInfo);
  } else {
    return;
  }
}

newP.addEventListener("click", moreTxt);
function moreTxt(e) {
  let arrayParagraphs = [
    "L'influence de la culture européenne sur le Brésil se retrouve dans la langue (portugais), la religion (catholicisme) et l'architecture. La culture brésilienne tient également des cultures africaines, amérindiennes et des pays européens (autres que le Portugal). Plusieurs aspects de la culture brésilienne ont été fortement influencés par l'arrivée des immigrants italiens, allemands et espagnols (trois des principaux groupes en provenance d'Europe) qui se sont installés en grand nombre dans les régions du Sud et du Sud-Est du Brésil. Les Amérindiens, eux, ont influencé la langue (plusieurs mots du portugais brésilien sont dérivés des anciennes langues indigènes), tandis que les Africains ont laissé leur empreinte sur la musique, la cuisine et la danse (notamment en donnant naissance à la capoeira, un art martial inventé par les esclaves venus d'Afrique).",
    "L'art brésilien a été développé depuis le xvie siècle dans des styles différents qui vont du style baroque (le style dominant au Brésil jusqu'au début du xixe siècle) à l'art abstrait, en passant par le romantisme, le modernisme, l'expressionnisme, le cubisme, le surréalisme. Le cinéma brésilien remonte à la fin du xixe siècle et a gagné au cours des dernières années une nouvelle reconnaissance internationale, avec l'avènement de films connus au-delà des frontières nationales, comme la Cité de Dieu, qui a reçu de nombreux prix internationaux, quatre nominations aux oscars et a été élu parmi les 100 meilleurs films de tous les temps par le Time magazine.",
  ];
  let moreInfo = document.querySelector(".moreInfo");
//   body.removeChild(moreInfo);
  if (body.children[6] == undefined) {
    console.log("je rentre dans le premier if donc je fais le taf");
    // for (i = 0; i < arrayParagraphs.length; i++) {
    //   console.log("je rentre dans la boucle");
    //   let p2 = document.createElement("p");
    //   p2.innerHTML = arrayParagraphs[i];
    //   body.appendChild(p2);
    // }

    arrayParagraphs.forEach(function (item) {
            console.log("je rentre dans la boucle");
            let p2 = document.createElement("p");
            p2.innerHTML = item;
            body.appendChild(p2);
        });
  } else {
    console.log("je rentre dans le else donc return, donc il ne se passe rien");
    return;
  }
}


// arrayParagraphs.foreach(function (item) {
//     console.log("je rentre dans la boucle");
//     let p2 = document.createElement("p");
//     p2.innerHTML = arrayParagraphs[i];
//     body.appendChild(p2);
// })


// for (i = 0; i < arrayParagraphs.length; i++) {
//     console.log("je rentre dans la boucle");
//     let p2 = document.createElement("p");
//     p2.innerHTML = arrayParagraphs[i];
//     body.appendChild(p2);
//   }