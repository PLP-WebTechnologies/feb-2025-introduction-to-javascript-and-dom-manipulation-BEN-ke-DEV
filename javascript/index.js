function changeText() {
    document.getElementById('content').textContent = 'Text changed!';
}

function changeColor() {
    const content = document.getElementById('content');
    content.style.backgroundColor = 'lightblue';
    content.style.color = 'white';
}

function toggleElement() {
    const element = document.getElementById('newElement');
    if (element) {
        element.remove();
    } else {
        const newElement = document.createElement('p');
        newElement.id = 'newElement';
        newElement.textContent = 'New element added!';
        newElement.className = 'box';
        document.body.appendChild(newElement);
    }
}