let Infos =document.getElementById('Infos')



Infos.addEventListener('click',affInfo)
function affInfo(){
    let doc=document.getElementById('paragraphe')
    
    
    doc.innerText = "La France (Écouter), en forme longue depuis 1875 la République française (Écouter), est un État souverain transcontinental dont le territoire métropolitain est situé en Europe de l'Ouest. Ce dernier a des frontières terrestres avec la Belgique, le Luxembourg, l'Allemagne, la Suisse, l'Italie, l'Espagne et les deux principautés d'Andorre et de Monaco. La France dispose aussi d'importantes façades maritimes sur l'Atlantique et la Méditerranée. Son territoire ultramarin s'étend dans les océans Indien, Atlantique et Pacifique ainsi qu'en Amérique du Sud, et a des frontières terrestres avec le Brésil, le Suriname et les Pays-Bas."
    
    document.body.style.backgroundImage ="url('Image/carte.jpg')"
}
let resume =document.getElementById('Resume')
resume.addEventListener('click',affRes)
function affRes (){
    let doc=document.getElementById('paragraphe')
    
    
    doc.innerText = "tagada pouet pouet"
    
    document.body.style.backgroundImage ="url('Image/Plat.jpg')"
}
let Place =document.getElementById('Place')
Place.addEventListener('click',affPla)
function affPla(){
    let doc=document.getElementById('paragraphe')
    
    
    doc.innerText = ""
    document.body.style.backgroundImage = "url('Image/Paris.jpg')"
    
}
let envoi = document.getElementById('valid')
valid.addEventListener('click',affbon)
function affbon (){
    let nomprenom = document.getElementById('input')
    let nom = nomprenom.value
   
    let paragraphe= document.getElementById('moN')
    if(nom == "Mourad Aumar"){
        paragraphe.innerHTML = "Bonjour " +nom+" comment trouve tu notre site"
    }else{
    paragraphe.innerHTML = "Bonjour "+ nom} 
    
    
}