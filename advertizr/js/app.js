// Objet représentant l'écran défilant Advertizr
const advertizer = {

    /**
     * Propriétés
     */

    
    // Propriété permettant de modéliser le fait que la touche MAJ a été enfoncée
    isUpperCase: false,

    /**
     * Méthodes
     */

    init : function (){

        this.buttonLetter = document.querySelectorAll(".key");
        this.screen = document.querySelector(".text");
        this.screenColor = document.querySelector(".screen");
        this.delete = document.querySelector('.return');
        this.maj = document.querySelector(".maj");
        this.buttonGreen = document.querySelector(".rond1");
        this.buttonBlue = document.querySelector(".rond2");
        this.buttonRed = document.querySelector(".rond3");

        //event listener sur le clavier de l'utilisateur (pas celui en HTML)
        document.body.addEventListener("keydown", (event) => this.handleKeyboardKeys(event));

        
        
        
        for (const letter of this.buttonLetter) {
            
            letter.addEventListener('click', (event) => this.handleClickOnLetter(event) )
            
        }

        this.maj.addEventListener("click", (event) => this.handleClickOnMaj(event))
        this.buttonGreen.addEventListener("click", (event) => this.handleClickChangeColor(event))
        this.buttonBlue.addEventListener("click", (event) => this.handleClickChangeColor(event))
        this.buttonRed.addEventListener("click", (event) => this.handleClickChangeColor(event))
        this.delete.addEventListener("click", (event) => this.handleClickOnDelete(event))
    },

    handleKeyboardKeys: function (event){

        switch (event.key){
            case "Shift":
                this.handleClickOnMaj()
                break;
            
            case "Backspace":
                this.handleClickOnDelete()
                break;

            default:
                this.addLetter(event.key);
                break;
        }
    },

    handleClickChangeColor: function (event) {
        
        const color = event.currentTarget.id;

        this.screenColor.classList.remove("red", "green", "blue");
        this.screenColor.classList.add(color);
    },
    
    handleClickOnLetter: function (event) {
        
        const letter = event.currentTarget.textContent;

        // if (this.isUpperCase = true){
        //     letter.toUpperCase();
        // }
        
        // console.log(letter);
        this.addLetter(letter);
        
    },

    handleClickOnDelete : function (event) {

        // slice premier argument = d'ou on commence, deuxieme argument quest ce qu'on garde 
        this.screen.textContent = this.screen.textContent.slice(0,- 1);
 

    },

    handleClickOnMaj : function (event) {

        this.isUpperCase = !this.isUpperCase;

        console.log(this.isUpperCase);
        

        this.maj.classList.toggle("pressed");
 

    },
    
    addLetter: function(letter){
        
        // console.log(letter);
        if (this.isUpperCase == true){
            letter = letter.toUpperCase();
            
        }
        
        this.screen.textContent = this.screen.textContent + letter;

        // console.log(this.screen);

    }
}

// Dès que la page est complètement chargée, on exécute la méthode init rangée dans le "module" advertizr
document.addEventListener('DOMContentLoaded', () => advertizer.init());