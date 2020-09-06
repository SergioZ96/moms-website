let about = {
    render: 
        `<div id="about-one" class="about-div">
            <h3>¡Soy Dunia!</h3>
        </div>
        <div id="about-two" class="about-div">
            <h3>Y Me Encanta Cocinar </h3>
        </div>
        <div id="about-three" class="about-div">
            <h3>Con Amor Desde Bolivia</h3>
        </div>`,

        after_render: async () => {
            return true;
        }
};