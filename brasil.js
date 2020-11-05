let body = document.getElementsByTagName('body')[0]
let newH2 = document.createElement('h2')
newH2.textContent = 'Re-bonjour ' + localStorage.getItem('name')
body.appendChild(newH2)