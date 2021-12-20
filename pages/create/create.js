export default () => {
  const content = document.querySelector('.content');

  

  return fetch('./pages/create/create.html')
    .then((response) => response.text())
    .then((createHtml) => {
      content.innerHTML = createHtml;

      handleCreateFunctionality();
    });
};

function handleCreateFunctionality() {
  const form = document.querySelector('form');
  form.addEventListener('submit', (event) => {
    // Make sure the form is not submitted
    event.preventDefault();

    fetch(`${window.apiUrl}/api`, {
      // changed to our api
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: document.querySelector('input.name').value,
        party_id: document.querySelector('input.party_id').value,
      }),
    })
      .then((Response) => Response.json())
      .then(async (data) => {
        window.router.navigate(`/`);
        }
  )});
      
     
}



