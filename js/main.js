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

function generateIdeasUI(){

let topic = document.getElementById("idea_topic").value;
let platform = document.getElementById("idea_platform").value;

let ideas = generateIdeas(topic, platform);

let container = document.getElementById("idea_results");

container.innerHTML = "";

ideas.forEach(idea => {

let card = document.createElement("div");
card.className = "result-card";

card.innerHTML = `
<p>${idea}</p>
<button class="copy-btn" onclick="copyText('${idea}')">Copy</button>
`;

container.appendChild(card);

});

}
