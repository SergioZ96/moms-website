let menu = {
    render : 
        `<div class="menu-container">
            <div class="sopas">
                
                <div id="sopa-de-mani" class="soup">
                    <h3>Sopa de Mani</h3>
                </div>
                <div id="fideos-uchu" class="soup">
                    <h3>Fideos Uchu</h3>
                </div>
                <div id="kawi" class="soup">
                    <h3>Kawi</h3>
                </div>
                <div id="sopa-de-quinoa" class="soup">
                    <h3>Sopa de Quinoa</h3>
                </div>
            </div>
    
            <div class="platos">
                
                <div class="chicharron">
                    <h3>Chicharron</h3>
                </div>
                <div class="silpancho">
                    <h3>Silpancho</h3>
                </div>
                <div class="charque">
                    <h3>Charque</h3>
                </div>
                <div class="pique-macho">
                    <h3>Pique Macho</h3>
                </div>
            </div>
    
            <div id="food-info">
                <h2 id="food-name"></h2>
                
            </div>
        </div>    
        `,
        after_render: async () => {
            document.querySelectorAll(".soup").forEach(item => {
                item.addEventListener("click", () => {
                document.getElementById("food-name").innerHTML = item.querySelector("h3").innerText;
                })
            });

            var newImage = document.createElement("img");

            
        
            return true;
        }

}

/* 
function setAll(){
    var soups = document.getElementsByClassName("sopas");
    //console.log(soups);
    // ----- Iterating through an HTML collection console logged (soups)
    //console.log(soups[0].childNodes);
    var mani = document.querySelector(".sopa-de-mani");
    mani.addEventListener("click", () => {
        document.getElementById("food-name").innerHTML = mani[1].innerHTML;
    });
 
    for (let i = 0; i < soups[0].children.length; i++){
        soups[i].addEventListener("click", () => {
            document.getElementById("food-name").innerHTML = soups[0].children[i];
        });
    }  
} */


