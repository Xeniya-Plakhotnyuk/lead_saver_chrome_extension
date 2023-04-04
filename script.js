
let myLeads = []
const inputEl = document.getElementById('input-el')
let ulEl = document.getElementById('ul-el')

const btn = document.querySelector('#input-btn')
btn.addEventListener('click', getClicked)
const deleteBtn = document.querySelector('#delete-btn')

deleteBtn.addEventListener("click", function() {
    localStorage.clear()
    myLeads = []
    renderList()
})


const leadsFromStorage = JSON.parse(localStorage.getItem ('myLeads'))

if(leadsFromStorage){
    myLeads = leadsFromStorage
    renderList()
}


function getClicked(){
     myLeads.push(inputEl.value)
     inputEl.value = ''
localStorage.setItem('myLeads', JSON.stringify(myLeads))
renderList()
console.log( localStorage.getItem("myLeads") )

}


function renderList(){

let listItems = ''
for (let i = 0; i < myLeads.length; i++) {
    listItems += `
    <li>
        <a target = '_blank' href='${myLeads[i]}'>${myLeads[i]}
        </a>
    </li>
    `
    }

ulEl.innerHTML = listItems

}
