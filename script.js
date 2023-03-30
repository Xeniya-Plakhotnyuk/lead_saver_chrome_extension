const btn = document.querySelector('#input-btn')
btn.addEventListener('click', getClicked)

let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
const inputEl = document.getElementById('input-el')
let ulEl = document.getElementById('ul-el')


function getClicked(){
     myLeads.push(inputEl.value)
}

for (let i = 0;  i< myLeads.length; i++){
    ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
 
}

