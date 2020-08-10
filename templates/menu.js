let menu = {
    render : 
        `<div class="menu-container">
            <div class="sopas">
                
                <div id="sopa-de-mani" class="soup" animated="false">
                    <h3>Sopa de Mani</h3>
                    <p hidden>sopa-de-mani.jpg</p>
                </div>
                <div id="fideos-uchu" class="soup" animated="false">
                    <h3>Fideos Uchu</h3>
                    <p hidden>fideos-uchu.jpg</p>
                </div>
                <div id="kawi" class="soup" animated="false">
                    <h3>Kawi</h3>
                    <p hidden>kawi.jpeg</p>
                </div>
                <div id="sopa-de-quinoa" class="soup" animated="false">
                    <h3>Sopa de Quinoa</h3>
                    <p hidden>sopa-de-quinoa.jpg</p>
                </div>
            </div>
    
            <div class="platos">
                
                <div id="chicharron" class="food" animated="false">
                    <h3>Chicharron</h3>
                    <p hidden>chicharron.jpg</p>
                </div>
                <div id="silpancho" class="food" animated="false">
                    <h3>Silpancho</h3>
                    <p hidden>silpancho.jpeg</p>
                </div>
                <div id="charque" class="food" animated="false">
                    <h3>Charque</h3>
                    <p hidden>charque.jpeg</p>
                </div>
                <div id="pique-macho" class="food" animated="false">
                    <h3>Pique Macho</h3>
                    <p hidden>pique-macho.jpg</p>
                </div>
            </div>
    
            <div id="food-info">
                <h2 id="food-name"></h2>
                <img id="food-image" animated="false" src="data:," alt>
            </div>
        </div>    
        `,
        after_render: async () => {
            /* Soups */
            document.querySelectorAll(".soup").forEach(item => {
                item.addEventListener("click", () => {
                document.getElementById("food-name").innerHTML = item.querySelector("h3").innerText;
                document.getElementById("food-image").src = `assets/images/${item.querySelector("p").innerText}`;
                //document.getElementById("food-image").setAttribute("animated", "false");
                // Tried to setup a fadein for each food item image on click (currently only does for first click)
                if(item.getAttribute("animated") == "false"){
                    document.getElementById("food-image").style.animation = "fadeinfood ease 3s";
                    item.setAttribute("animated", "true"); //modifies animated attribute of soup menu items
                }
                
                })
            });

            /* Foods */
            document.querySelectorAll(".food").forEach(item => {
                item.addEventListener("click", () => {
                document.getElementById("food-name").innerHTML = item.querySelector("h3").innerText;
                document.getElementById("food-image").src = `assets/images/${item.querySelector("p").innerText}`;
                })
            });

        
            return true;
        }

}
