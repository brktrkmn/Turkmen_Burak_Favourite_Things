const buttons = document.querySelectorAll(".button");
    
let things = {};
    

    // let     buttons = document.querySelectorAll("button"),
    //         theTemplate = document.querySelector("#bio-template").content;
            // favourites = document.querySelector('.favourites'),
            // favouriteButtons = document.querySelectorAll(".favourites-button"),

    // set up a Fetch function and get some data
    function getData() {
        // retrieve our data object
        fetch("./data.json") // go and get the data (fetch boy!)
            .then(res => res.json()) // good dog! clean the stick (convert the data to a plain object)
            .then(data => {

                things = data;

                // buildControls(data);
                
            })
        .catch(error => console.error(error));
    }

    function buildData(event) {
        console.log("clicked");
        let panel = document.querySelector(".bio-panel");

        if (panel) {
            panel.classList.remove("hidden");
            let containers = panel.children;
            
            containers[0].querySelector("img").src = `images/${things[this.dataset.key].pic}`;
            containers[1].textContent = things[this.dataset.key].name;
              }
        else {
            panel.classList.add("hidden");
        }
    };

    buttons.forEach(btn => (btn.addEventListener("click", buildData)));

    getData();
