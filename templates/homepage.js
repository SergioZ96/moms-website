let homepage = {
    render : 
        `<div id="home-wrapper">
            <div id="first-home-block">
                <section>
                    <h1>Hola soy Dunia</h1>
                    <h1>Y me encanta la cocina</h1>
                </section>
                <img src="../assets/images/mom.JPG">
                
            </div>
            <!--
            <h2>Bienvenidos</h2>
            <div id="main-abouts">

                <div id="about-one" class="about-div">
                    <h3>¡Soy Dunia!</h3>
                </div>
                <div id="about-two" class="about-div">
                    <h3>Me Encanta Cocinar </h3>
                </div>
                <div id="about-three" class="about-div">
                    <h3>Con Amor Desde Bolivia</h3>
                </div>
            </div>
            -->
         </div>`,
    after_render: async () => {
        
        return true;
    }
};