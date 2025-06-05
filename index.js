
document.body.style.backgroundColor = "silver";

document.getElementById("title").style.color = "green";

let h3Tags = document.getElementsByTagName("h3");
for(let i = 0; i < h3Tags.length; i++) {
    h3Tags[i].style.textTransform = "uppercase";
}


let fruitList = document.getElementById("fruList");
let newFruit = document.createElement("li");
newFruit.className = "exciting"; 
newFruit.innerHTML = 'Oranges <img src="images/orange.jpeg" alt="Oranges" class="fruit-img">';
fruitList.appendChild(newFruit);


let vegList = document.getElementById("vegList");
let newVeg = document.createElement("li");
newVeg.className = "exciting";
newVeg.innerHTML = 'Spinach <img src="images/spinach.jpeg" alt="Spinach" class="veg-img">';
vegList.appendChild(newVeg);


const facts = [
    "Did you know? Spinach is rich in iron and vitamin K!",
    "Oranges are not only tasty but an excellent source of vitamin C.",
    "Kales are known as sukuma wiki in Kenya.",
    "Watermelon is 92% water—stay hydrated!",
    "Carrots help improve your vision at night.",
    "Eating fruits and vegetables boosts your immune system!",
    "Bananas are technically berries."
];

document.getElementById("orderBtn").onclick = function() {
    const fact = facts[Math.floor(Math.random()*facts.length)];
    document.getElementById("funFact").textContent = fact;
};