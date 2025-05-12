// ===== MOBILE DETECTION =====
function isMobile() {
    return window.innerWidth <= 768;
}

// ===== BUTTON FUNCTIONS =====
function changeText() {
    const content = document.getElementById('content');
    content.textContent = "Text changed successfully!";
}

function changeColor() {
    const content = document.getElementById('content');
    content.style.color = "#FF5733"; // Orange color
    content.style.backgroundColor = "#F0F8FF"; // AliceBlue background
}

function toggleElement() {
    const content = document.getElementById('content');
    content.style.display = content.style.display === 'none' ? 'block' : 'none';
}

// ===== BUTTON DEFAULTS =====
function setButtonDefaults() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.style.padding = "8px 16px";
        button.style.margin = isMobile() ? "5px auto" : "5px";
        button.style.cursor = "pointer";
        button.style.transition = "all 0.2s ease";
        button.style.display = isMobile() ? "block" : "inline-block";
        button.style.width = isMobile() ? "90%" : "";
        button.style.border = "1px solid #007BFF";
        button.style.borderRadius = "4px";
        button.style.backgroundColor = "transparent";
        button.style.color = "#007BFF";
    });
}

// ===== TITLE STYLING =====
function styleTitle() {
    const title = document.getElementById('title');
    if (title) {
        title.style.position = "relative";
        title.style.textAlign = "center";
        title.style.fontFamily = "Arial, sans-serif";
        title.style.color = "#333";
        title.style.transition = "all 0.3s ease";
        title.style.fontSize = isMobile() ? "28px" : "40px";
    }
}

// ===== BOX STYLING =====
function styleBoxes() {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        box.style.padding = isMobile() ? "15px" : "20px";
        box.style.margin = "10px auto";
        box.style.border = "1px solid black";
        box.style.backgroundColor = "#f0f0f0";
        box.style.transition = "all 0.3s ease";
        box.style.width = isMobile() ? "90%" : "600px";
        box.style.textAlign = "center";
    });
}

// ===== BUTTON CONTAINER =====
function setupButtonContainer() {
    let buttonsContainer = document.querySelector('.buttons-container');
    
    if (!buttonsContainer) {
        buttonsContainer = document.createElement('div');
        buttonsContainer.className = 'buttons-container';
        buttonsContainer.style.textAlign = "center";
        document.body.appendChild(buttonsContainer);
    }
    
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        buttonsContainer.appendChild(button);
    });
}

// ===== HOVER EFFECTS =====
function addHoverEffects() {
    // Title hover
    const title = document.getElementById('title');
    if (title) {
        title.addEventListener('mouseenter', () => {
            title.style.color = "#007BFF";
            title.style.textDecoration = "underline";
        });
        title.addEventListener('mouseleave', () => {
            title.style.color = "#333";
            title.style.textDecoration = "none";
        });
    }

    // Box hover
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        box.addEventListener('mouseenter', () => {
            box.style.backgroundColor = "#e0e0e0";
            box.style.boxShadow = "0 2px 5px rgba(0,0,0,0.1)";
        });
        box.addEventListener('mouseleave', () => {
            box.style.backgroundColor = "#f0f0f0";
            box.style.boxShadow = "none";
        });
    });

    // Button hover
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.backgroundColor = "#007BFF";
            button.style.color = "white";
        });
        button.addEventListener('mouseleave', () => {
            button.style.backgroundColor = "transparent";
            button.style.color = "#007BFF";
        });
    });
}

// ===== INITIAL SETUP =====
function setupPage() {
    setupButtonContainer();
    setButtonDefaults();
    styleTitle();
    styleBoxes();
    addHoverEffects();
}

// Run on load and resize
document.addEventListener('DOMContentLoaded', setupPage);
window.addEventListener('resize', setupPage);