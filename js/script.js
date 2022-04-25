const body = document.querySelector("body")
const button = document.querySelector("button")
const colors = ['red','green','blue','yellow','pink','purple','orange']

body.style.backgroundColor = 'violet';
button.addEventListener("click",changeBackground)

function changeBackground () {
    let colorIndex;
    colorIndex = parseInt(colors.length * Math.random());
    body.style.backgroundColor = colors[colorIndex]
}