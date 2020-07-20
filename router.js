/**
 * Simple SPA routing system implementation
 * Credit: FermiDirak, https://github.com/FermiDirak/fermidirak.github.io
 */ 

let contentDiv = document.getElementById('content');

let routes = {
    '/': homepage,
    '/index.html': homepage,
    '/menu': menu,
    '/about': about,
    '/contact': contact,
};

window.onpopstate = () => {
    contentDiv.innerHTML = routes[window.location.pathname];
}

let onNavItemClick = (pathName) => {
    window.history.pushState({}, pathName, window.location.origin + pathName);
    contentDiv.innerHTML = routes[pathName];
}

contentDiv.innerHTML = routes[window.location.pathname];