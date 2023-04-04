
let myLeads = []
const inputEl = document.getElementById('input-el')
let ulEl = document.getElementById('ul-el')

const btn = document.querySelector('#input-btn')
btn.addEventListener('click', getClicked)
const deleteBtn = document.querySelector('#delete-btn')

deleteBtn.addEventListener("click", function() {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})


const saveTab = document.querySelector('#save-btn')
saveTab.addEventListener('click', function(){    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads) )
        render(myLeads)
    })
})

const leadsFromStorage = JSON.parse(localStorage.getItem ('myLeads'))

if(leadsFromStorage){
    myLeads = leadsFromStorage
    render(myLeads)
}


function getClicked(){
myLeads.push(inputEl.value)
inputEl.value = ''
localStorage.setItem('myLeads', JSON.stringify(myLeads))
render(myLeads)
console.log( localStorage.getItem("myLeads") )

}


function render(leads){

let listItems = ''
for (let i = 0; i < leads.length; i++) {
    listItems += `
    <li>
        <a target = '_blank' href='${leads[i]}'>${leads[i]}
        </a>
    </li>
    `
    }

ulEl.innerHTML = listItems

}
