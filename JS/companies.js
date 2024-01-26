const btnForm = document.getElementById('btnSendForm');

btnForm.addEventListener("click", addCompany);

//New company
function addCompany () {

  const dataCompanies = {
    name: document.formCompanies.formName.value,
    description : document.formCompanies.formDescription.value,
    founder : document.formCompanies.formFounder.value,
    logo: document.formCompanies.formLogo.value,
    webSite: document.formCompanies.formWeb.value
}


    fetch ('http://localhost:3000/companies', {
    method : "POST",
    body : JSON.stringify(dataCompanies),
    headers: {'Content-type': 'application.json'}
})
    .then(response => response.json())
}


const tableCompanies = document.getElementById('tableCompanies');
let tbodyCompany = document.createElement('tbody');

//load companies in table
let result = fetch("http://localhost:3000/companies")
.then ((result) => {
    return result.json();
})
.then ((data) => {
    data.forEach((Datacompany) => {
            let row = document.createElement ('tr')
            tableCompanies.appendChild(row)
            
            let idCompany = document.createElement('td')
            idCompany.innerHTML=Datacompany.id
            row.appendChild(idCompany)
            
            let nameCompany = document.createElement('td')
            nameCompany.innerHTML= Datacompany.name
            row.appendChild(nameCompany)
            
            let descriptionCompany = document.createElement('td')
            descriptionCompany.innerHTML = Datacompany.description
            row.appendChild(descriptionCompany)
            
            let founderCompany = document.createElement('td');
            founderCompany.innerHTML = Datacompany.founder
            row.appendChild(founderCompany)
            
            let logoCompany = document.createElement('td')
            logoCompany.innerHTML = Datacompany.logo
            row.appendChild(logoCompany)
            
            let btnDetails = document.createElement("button");
            btnDetails.innerHTML= 'See details'
            btnDetails.classList.add('btn', 'btn-primary', 'me-2')
            btnDetails.setAttribute('id', 'btn-details')
            btnDetails.setAttribute('onclick', `openDetails(${Datacompany.id})`);
            row.appendChild(btnDetails)
            
            let btnEdit = document.createElement("button");
            btnEdit.innerHTML= 'Edit company'
            btnEdit.classList.add('btn', 'btn-success', 'me-2')
            btnEdit.setAttribute('id', 'btn-edit')
            btnEdit.setAttribute('onclick', `bringDataCompany('${Datacompany.id}')`)
            row.appendChild(btnEdit)
            
            let btnDelete = document.createElement("button");
            btnDelete.innerHTML= 'Delete'
            btnDelete.classList.add('btn', 'btn-danger')
            row.appendChild(btnDelete)
            
            tbodyCompany.appendChild(row)
            
        })
        tableCompanies.appendChild(tbodyCompany);
    })

//---------------------------SEE DETAILS COMPANIES----------------------------------------
let btnDetailsCompanies = document.getElementById('btn-details')
let modalDetails = document.getElementById('MymodalDetails')

function openDetails (idCompany){
  modalDetails.style.display='block';

  fetch (`http://localhost:3000/companies/${idCompany}`, {
    method: "GET",
    headers: {'Content-type': 'application/json'}
  })
  .then (response => response.json())
  .then ((detailCompany)=>{
    let id = (document.getElementById('idcompany').innerHTML = detailCompany.id)
    let name = (document.getElementById('namecompany').innerHTML = detailCompany.name)
    let description = (document.getElementById('descriptioncompany').innerHTML = detailCompany.description)
    let founder = (document.getElementById('foundercompany').innerHTML = detailCompany.founder)
    let logo = (document.getElementById('logocompany').innerHTML = detailCompany.logo)
    let website = (document.getElementById('websitecompany').innerHTML = detailCompany.webSite)
  }) 
}

//-------------------------------MODAL SEE DETAILS COMPANIES-------------------------------
const span = document.getElementsByClassName("closeDetails")[0];
span.onclick = function() {
  modalDetails.style.display = "none";
} 
window.onclick = function(event) {
  if (event.target == modalDetails) {
    modalDetails.style.display = "none";
  }
} 

//---------------------------UPDATE COMPANIES----------------------------------------

let idcompany = document.getElementById('idcompany')
let namecompany = document.getElementById('namecompany')
let descriptioncompany = document.getElementById('descriptioncompany')
let foundercompany = document.getElementById('foundercompany')
let logocompany = document.getElementById('logocompany')
let websitecompany = document.getElementById('websitecompany')



function bringDataCompany(idCompany){

  fetch (`http://localhost:3000/companies/${idCompany}`, {
    method: "GET",
    headers: {'Content-type': 'application/json'}
  })
  .then ((response) => response.json())
  .then((data) => {
     document.formCompanies.formId.value = data.id
     document.formCompanies.formName.value = data.name
     document.formCompanies.formDescription.value  = data.description
     document.formCompanies.formFounder.value  = data.founder
     document.formCompanies.formLogo.value  = data.logo
     document.formCompanies.formWeb.value = data.webSite

  });
}


function updateCompany(idCompany) {
  
}
