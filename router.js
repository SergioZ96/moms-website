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

// Ensures that the user is displayed the right content when they navigate back in their
// browsing history

window.onpopstate = () => {
    // using the location object's pathname property to retrieve the pathname
    contentDiv.innerHTML = routes[window.location.pathname].render;
    routes[window.location.pathname].after_render();
}


// Function to render html of each page/template, and then apply javascript to respective html
let onNavItemClick = (pathName) => {
    // Using the Web History API to manually add the current page's url
    // to the user's navigation/browser history
    window.history.pushState({}, pathName, window.location.origin + pathName);
    contentDiv.innerHTML = routes[pathName].render;
    routes[window.location.pathname].after_render();
}


// In our case, this is used to load up the first content on page
contentDiv.innerHTML = routes[window.location.pathname].render;
//routes[window.location.pathname].after_render();

