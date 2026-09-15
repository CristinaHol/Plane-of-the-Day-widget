const items = [
    {img: "assets/f-22.jpeg" , text: "F-22", info: "a very fast jet"},
    {img: "assets/f-19.jpeg" , text: "F-19", info: "a cool plane"}
];
const button = document.getElementById("Btn");
const randomIndex = Math.floor(Math.random() * items.length);
const close = document.getElementById("closebtn");

function displayRandom(){
    const selected = items[randomIndex];
    document.getElementById("plane").style.backgroundImage = `url(${selected.img})`;
    document.getElementById("title").textContent = selected.text;

}

displayRandom();
let showingImage = true;
const imageDiv = document.getElementById("plane"); 

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

close.addEventListener('click', () => { 
    window.electronAPI.close(); 
});