const rgb = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById('btn');
const col = document.querySelector('.color');
function rgbColor(){
    let color = "#";
    for(let i=0; i<6; i++){
        color += rgb[randomno()];
    }
    document.body.style.backgroundColor = color;
    col.textContent = color;

}
function randomno(){
    return Math.floor(Math.random() * rgb.length);
}