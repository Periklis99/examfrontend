export default () => {
    const content = document.querySelector('.content');
  
    
  
    return fetch('./pages/edit/edit.html')
      .then((response) => response.text())
      .then((editHtml) => {
        content.innerHTML = editHtml;
  
        handleEditFunctionality();
      });
  };
  
  function handleEditFunctionality() {
    const form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
      // Make sure the form is not submitted
      event.preventDefault();
  
      fetch(`${window.apiUrl}/api`, {
        // changed to our api
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: document.querySelector('input.id').value,
          party_id: document.querySelector('input.party_id').value,
        }),
      })
        .then((Response) => Response.json())
        .then(async (data) => {
          window.router.navigate(`/`);
          }
    )});
        
       
  }