export default () => {
    const header = document.querySelector('.header');
  
    return fetch('./components/navbar.html')
      .then((Response) => Response.text())
      .then((navbarHtml) => {
        header.innerHTML = navbarHtml;
        renderNav();
      });
  };


  function renderNav(){
  const navOptions = document.querySelector('.nav-options');
  navOptions.innerHTML = `
        <div class="flex logged-out">
            <div>
                <a href="" class="create-nav nav-option" data-navigo>Create</a>
            </div><div>
                <a href="" class="edit-nav nav-option" data-navigo>Edit</a>
            </div>`

            const create = document.querySelector('.create-nav');
            const edit = document.querySelector('.edit-nav');
            create.setAttribute('href', '/create');
            edit.setAttribute('href', '/edit');
  }
