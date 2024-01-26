//clear form
function clearDataEmploye() {}

//load companies in select
fetch("http://localhost:3000/companies")
  .then((r) => r.json())
  .then((data) => {
    console.log(data);

    select = document.getElementById("select_company");
    data.forEach((element) => {
      option = document.createElement("option");
      option.value = element.id;
      option.innerText = element.name;
      select.appendChild(option);
    });
  });

//new employe
const btnForm = document.getElementById("btnSendFormEmployes");

function addEmploye() {
  console.log(document.formEmployes.formCompanyStatus.value);
  const dataEmploye = {
    idCompany: document.formEmployes.formCompanyStatus.value,
    documentNumber: document.formEmployes.formIdEmploye.value,
    Name: document.formEmployes.formNameEmploye.value,
    lastName: document.formEmployes.formLastName.value,
    email: document.formEmployes.formEmail.value,
    position: document.formEmployes.formPosition.value,
    admissionDate: document.formEmployes.formAdmisionDate.value,
    status: document.formEmployes.formStatus.value,
    cv: document.formEmployes.formCv.value,
    website: document.formEmployes.formWebSiteEmploye.value,
  };

  fetch("http://localhost:3000/employes", {
    method: "POST",
    body: JSON.stringify(dataEmploye),
    headers: { "Content-type": "application.json" },
  }).then((response) => response.json());
}

btnForm.onclick=addEmploye