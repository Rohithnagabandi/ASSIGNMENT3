document.getElementById('greetBtn').addEventListener('click', function() {
    const name = document.getElementById('nameInput').value;
    document.getElementById('greeting').textContent = `Hello, ${name}`;
});

const boxes = document.querySelectorAll('.box');
boxes.forEach(box => {
    box.addEventListener('click', function() {
        const color = this.getAttribute('data-color');
        this.style.backgroundColor = color;
    });
});
