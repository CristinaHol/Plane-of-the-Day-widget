const items = [
    {img: "assets/f-22.jpeg" , text: "F-22", info: "a very fast jet"},
    {img: "assets/f-19.jpeg" , text: "F-19", info: "a cool plane"}
];
const button = document.getElementById("testBtn");
const randomIndex = Math.floor(Math.random() * items.length);

function displayRandom(){
    const selected = items[randomIndex];
    document.getElementById("image").style.backgroundImage = `url(${selected.img})`;
    document.getElementById("name").textContent = selected.text;

}

displayRandom();
let showingImage = true;
const imageDiv = document.getElementById("image"); 

button.addEventListener("click", () => {
    const selected = items[randomIndex];
    if(showingImage){
        imageDiv.style.backgroundImage = "none";
        imageDiv.textContent = selected.info;
    } else{
        imageDiv.textContent = "";
        imageDiv.style.backgroundImage = `url(${selected.img})`;
    }
    showingImage = !showingImage;
});