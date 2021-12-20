export default () => {
  const content = document.querySelector('.content');

  return fetch('./pages/main/main.html')
    .then((Response) => Response.text())
    .then(async(mainHtml) => {
      content.innerHTML = mainHtml;
      const candidates = await fetchCanndidate();
      renderCandidates(candidates);
      deleteCandidates(candidates);
    });
};



function deleteCandidates(candidates) {
  candidates.forEach((candidate) => {
    const delBtn = document.querySelector(`.dlt-btn-${candidate.id}`);
    delBtn.addEventListener(`click`, () => {
      fetch(`${window.apiUrl}/api`, {
        // changed to our api
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: candidate.id
    
        }),
      }).then(()=>{
        window.location.reload();
      })
    }
     )
  })
}

function renderCandidates(candidates){
const table = document.querySelector('tbody');
let file = '';

candidates.forEach(element => {

  file+=`
  <tr>
      <td>${element.name}</td>
      <td>${element.party.name} </td>
      <td><button class= "dlt-btn-${element.id}" > Delete </buttton> </td>
      </tr>
  `
});
table.innerHTML= file;
}

async function fetchCanndidate(){
    return await fetch(`${window.apiUrl}/api/`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        return data;
});
}
 
 
