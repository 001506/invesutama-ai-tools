function generateCaptionUI(){

let topic = document.getElementById("topic").value;
let platform = document.getElementById("platform").value;
let tone = document.getElementById("tone").value;

let captions = generateCaption(topic, platform, tone);

let container = document.getElementById("results");

container.innerHTML = "";

captions.forEach(caption => {

let card = document.createElement("div");
card.className = "result-card";

card.innerHTML = `
<p>${caption}</p>
<button class="copy-btn" onclick="copyText('${caption}')">Copy</button>
`;

container.appendChild(card);

});

}

function copyText(text){

navigator.clipboard.writeText(text);

alert("Caption copied!");

}
