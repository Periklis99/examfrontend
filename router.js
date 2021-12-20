import renderNavbar from './components/navbar.js';
import renderMain from './pages/main/main.js';
import renderCreate from './pages/create/create.js';
import renderEdit from './pages/edit/edit.js';

export default () => {
  const router = new Navigo('/', { hash: true });
  const contentDiv = document.querySelector('.content');
  window.router = router;
  router
    .on({
      '/': () => {
        renderMain().then(router.updatePageLinks);
        console.log('User requested main page');
      },
      create: () => {
        renderCreate().then(router.updatePageLinks);
      },
      edit: () => {
        renderEdit().then(router.updatePageLinks);
      },
  })
  .on({
    '*': async () => {
      renderNavbar().then(router.updatePageLinks);
    },
  })
    .resolve();
};