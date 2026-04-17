// NAVIGATION
function showPage(pageId) {
    document.querySelectorAll(".page").forEach(p => {
        p.classList.remove("active");
    });

    document.getElementById(pageId).classList.add("active");
}

// AI CAPTION
function generateCaption() {
    let topic = document.getElementById("captionTopic").value;
    let result = document.getElementById("captionResult");

    result.innerHTML = "";

    for (let i = 1; i <= 5; i++) {
        let caption = `🔥 ${topic} - Caption menarik ke-${i}`;

        let card = `
            <div class="card">
                <p>${caption}</p>
                <button onclick="copyText('${caption}')">Copy</button>
            </div>
        `;

        result.innerHTML += card;
    }
}

// AI IDEA
function generateIdea() {
    let topic = document.getElementById("ideaTopic").value;
    let result = document.getElementById("ideaResult");

    result.innerHTML = "";

    for (let i = 1; i <= 5; i++) {
        let idea = `💡 Ide konten ${topic} ke-${i}`;

        let card = `
            <div class="card">
                <p>${idea}</p>
                <button onclick="copyText('${idea}')">Copy</button>
            </div>
        `;

        result.innerHTML += card;
    }
}

// COPY
function copyText(text) {
    navigator.clipboard.writeText(text);
    alert("Copied!");
}

function toggleSidebar() {
    document.getElementById("sidebar").classList.toggle("collapsed");
}
