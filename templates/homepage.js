let homepage = {
    render : 
        `<div id="home-wrapper">
            <h2>Bienvenidos</h2>
         </div>`,
    after_render: async () => {
        //Bienvenidos Fade 
        //document.getElementById("home-wrapper").className += 'fade-out';
        
        return true;
    }
};