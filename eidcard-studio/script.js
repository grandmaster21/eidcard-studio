// Function to update the text on the card live
function updateCard() {
    const msg = document.getElementById('msgInput').value;
    const name = document.getElementById('nameInput').value;
    
    document.getElementById('preview-msg').innerText = msg || "Eid Mubarak! May this day bring joy and peace to your heart.";
    document.getElementById('preview-name').innerText = name ? `- ${name}` : "- Your Name";
}

// Function to change templates
function changeTemplate(type) {
    const card = document.getElementById('capture-area');
    card.className = `card-container ${card.classList.contains('portrait-ratio') ? 'portrait-ratio' : 'square-ratio'} ${type}-bg`;
}

// Function to toggle between Square and Story sizes
function setRatio(ratio) {
    const card = document.getElementById('capture-area');
    if(ratio === 'square') {
        card.classList.replace('portrait-ratio', 'square-ratio');
    } else {
        card.classList.replace('square-ratio', 'portrait-ratio');
    }
}

// Download Logic using html2canvas
document.getElementById('downloadBtn').addEventListener('click', () => {
    const card = document.getElementById('capture-area');
    
    html2canvas(card, {
        scale: 2, // High resolution
        useCORS: true,
        logging: false,
    }).then(canvas => {
        const image = canvas.toDataURL("image/png");
        const link = document.createElement('a');
        link.download = `EidCard-${Date.now()}.png`;
        link.href = image;
        link.click();
    });
});