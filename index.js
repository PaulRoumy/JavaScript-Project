// Lignes 3 à 44 apparition et disparition des drapeaux au survol,
// j'ai voulu le faire de 2 façons différentes et je m'aperçois 
// que la 2ème (pour le drapeau du brésil) est plus nette sur le rendu

let frenchbtn = document.getElementById('french')

frenchbtn.addEventListener('mouseover', franceover)
frenchbtn.addEventListener('mouseout', francedisappear)

let frenchf = document.getElementById('frenchf')
function franceover (e) {
frenchf.removeAttribute('class')

}
function francedisappear (e) {
frenchf.setAttribute('class', 'invisible')
}

let italianbtn = document.getElementById('italian')

italianbtn.addEventListener('mouseover', italyover)
italianbtn.addEventListener('mouseout', italydisappear)

let italyf = document.getElementById('italianf')
function italyover (e) {
   italianf.removeAttribute('class') 
}
function italydisappear (e) {
    italianf.setAttribute('class', 'invisible')
}

let brasilbtn = document.getElementById('brasil')
brasilbtn.addEventListener('mouseover', brasilover)
brasilbtn.addEventListener('mouseout', brasildisappear)

let brasilf = document.getElementById('brasilianf')
function brasilover (e) {
//  brasilf.removeAttribute('class')
brasilf.style.display='block'
}
function brasildisappear (e) {
    brasilf.style.display='none'
}


// Afficher le texte de l'input
// let input = document.getElementById("inputTxt")
// let inputValue = input.value;
// console.log("la valeur de l'input est : " + inputValue)
let mySendBtn = document.getElementById('mySendBtn');
mySendBtn.addEventListener('click', displayTxt)


function displayTxt (e) {
    // Je récupère la valeur de mon input et le stocke dans une variable
    let inputValue = document.getElementById("inputTxt").value
 
    // je l'affiche dans ma console
  console.log("ceci est la valeur de l'input texte : " + inputValue); 
  
let div = document.getElementsByTagName('div')[0]
console.log(div)

let newH2 = document.createElement('h2')
newH2.className = 'myH2'
newH2.textContent = 'Bonjour ' + inputValue
div.appendChild(newH2);
console.log(div)
console.log(newH2)
// je stocke mon inputValue dans le local storage pour que Paul puisse la récupérer sur sa page france 
localStorage.setItem('name', inputValue);
}

// je stocke mon inputValue dans le local storage pour que Paul puisse la récupérer sur sa page france 

// Je crée un tableau : 
let countriesArray = ['Japon', 'Canada', 'Thaïlande', 'Chili', 'Norvège', 'Islande', 'Portugal'];
let div4 = document.getElementsByTagName('div')[3]
    let ul = document.createElement('ul')
    div4.appendChild(ul)
    // Je boucle dans mon tableau :
for (let i = 0; i < countriesArray.length; i++) {
    let li = document.createElement('li')
    li.textContent = countriesArray[i]
    ul.appendChild(li);
}
