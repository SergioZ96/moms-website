// Single Page Apps for GitHub Pages
// https://github.com/rafrex/spa-github-pages
// Copyright (c) 2016 Rafael Pedicini, licensed under the MIT License

let redirect404 = () => {
    var segmentCount = 0;
    // returns a string of the Location object (url)
    var location = window.location;
    location.replace(
      /*
        Protocol property of the Location interface is a USVString representing the protocol scheme of the URL, including the final ':' - ex: 'http:'
        Hostname property of the Location interface is a USVString containing the domain of the URL
        */
      location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') +
      location.pathname.split('/').slice(0, 1 + segmentCount).join('/') + '/?p=/' +
      location.pathname.slice(1).split('/').slice(segmentCount).join('/').replace(/&/g, '~and~') +
      (location.search ? '&q=' + location.search.slice(1).replace(/&/g, '~and~') : '') +
      location.hash
    );
}
  
let receiveRedirect = () => {
  (function(location) {
    if (location.search) {
      var q = {};
      location.search.slice(1).split('&').forEach(function(v) {
        var a = v.split('=');
        q[a[0]] = a.slice(1).join('=').replace(/~and~/g, '&');
      });
      if (q.p !== undefined) {
        window.history.replaceState(null, null,
          location.pathname.slice(0, -1) + (q.p || '') +
          (q.q ? ('?' + q.q) : '') +
          location.hash
        );
      }
    }
  }(window.location));
}