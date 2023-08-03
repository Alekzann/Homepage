
{
    const welcomeMessage = () => {
        console.log("Cześć, to moja pierwsza strona!!!");

    };

    const toggleBackgroundColor = () => {
        const body = document.querySelector(".body");
        const color = document.querySelector(".js-changeColor");
        body.classList.toggle("dark");
        color.innerText = body.classList.contains("dark") ? "jasne" : "ciemne"; 
        
    };

    welcomeMessage();

    const init = () => {
        const button = document.querySelector(".button");
        button.addEventListener("click", toggleBackgroundColor);

    }
    init();
}