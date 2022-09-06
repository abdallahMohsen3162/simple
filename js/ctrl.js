const list = document.getElementById('myList');


document.addEventListener("DOMContentLoaded", () => {
    let counter = 1;
    for (var i = 0; i < 100; i++) {
        let createdElement = document.createElement('li')
        createdElement.innerHTML = `- ${counter} - `;
        list.appendChild(createdElement);
        counter++;
    }
})