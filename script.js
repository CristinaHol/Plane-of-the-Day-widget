const items = [
    {img: "assets/f-22.jpeg" , text: "F-22", info: "F-22 Raptor is a fifth-generation stealth air superiority fighter. It entered into servie in December of 2005, and is manufactured by lockheed martin"},
    {img: "assets/f-19.jpeg" , text: "F-19", info: "F-19 is a fictional stealth fighter that was widely belived to exist in the 1980s"},
    {img: "assets/f-16.jpeg" , text: "F-16", info: "F-16 Fighting Falcon is a single-enginer, supersontic multirole fighter aircraft. It was developed by General Dynamics. It entered service in 1978. Top Speed is Mach 2.0+"},
    {img: "assets/c-130.jpeg", text: "C-130", info: "C-130 Hercules is a four engine turboprop militart transport aircraft. It entered service in 1956. It also holds the record for the longest continuously produced military aircraft."}
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