let Infos =document.getElementById('Infos')
let doc=document.getElementById('paragraphe')
Infos.addEventListener('click',affInfo)
function affInfo(doc){
    let paragraphe;
    let n = 0
    n+=1
    console.log(n);
    
    paragraphe =doc
    console.log(paragraphe);
    paragraphe=doc.target
    console.log(paragraphe);
    paragraphe = doc.target.innerHtml
    console.log(paragraphe)
    paragraphe = doc.target.innerHtml="paragraphe"
    console.log(paragraphe)
}
let resume =document.getElementById('Resume')
resume.addEventListener('click',affRes)
function affRes (){
    let Re =2
    console.log(Re)
}
let Place =document.getElementById('Place')
Place.addEventListener('click',affPla)
function affPla(){
    let Pla = 3
    console.log(Pla)
}