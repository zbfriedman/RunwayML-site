const imgArr = [
    "forest/forestgif.gif",
    "image/imagegif.gif",
    "painting/paintinggif.gif",
    "video/videogif.gif",
    "sculpture/sculpturegif.gif",
    "triangle/trianglegif.gif",
    "eager/eagergif.gif",
    "tired/tiredgif.gif",
    "anxious/anxiousgif2.gif",
    "excited/excitedgif.gif",
    "happy/happygif.gif",
    "sad/sadgif.gif",
    "blob/blobgif.gif",
    "square/squaregif.gif",
    "circle/circlegif.gif",
    "cone/conegif.gif",
    "cube/cubegif.gif",
    "aurora/auroragif.gif",
    "lake/lakegif2.gif",
    "mountain/mountaingif.gif",
    "lightning/lightninggif.gif",
    "ice/icegif.gif",
    "geometric/geometricgif.gif",
    "book/bookgif2.gif",
    "poem/poemgif.gif",
    ];

const artArr = [
    "forest/art.jpeg",
    "image/art.jpeg",
    "painting/art.jpeg",
    "video/art.jpeg",
    "sculpture/art.jpeg",
    "triangle/art.jpeg",
    "eager/art.jpeg",
    "tired/art.jpeg",
    "anxious/art.jpeg",
    "excited/art.jpeg",
    "happy/art.jpeg",
    "sad/art.jpeg",
    "blob/art.jpeg",
    "square/art.jpeg",
    "circle/art.jpeg",
    "cone/art.jpeg",
    "cube/art.jpeg",
    "aurora/art.jpeg",
    "lake/art.jpeg",
    "mountain/art.jpeg",
    "lightning/art.jpeg",
    "ice/art.jpeg",
    "geometric/art.jpeg",
    "book/art.jpeg",
    "poem/art.jpeg",
    ];

const wordArr = [
    "forest",
    "image",
    "painting",
    "video",
    "sculpture",
    "triangle",
    "eager",
    "tired",
    "anxious",
    "excited",
    "happy",
    "sad",
    "blob",
    "square",
    "circle",
    "cone",
    "cube",
    "aurora",
    "lake",
    "mountain",
    "lightning",
    "ice",
    "geometric",
    "book",
    "poem"
    ];

    //this shows text, art, gif
const num = Math.floor(Math.random()*artArr.length);
var preHeight = (Math.floor(Math.random() * 300) + 10);
if (preHeight < 100){preHeight = preHeight + 100;}
const height = String(preHeight + "px");
const topp = String((Math.floor(Math.random() * (window.innerHeight - preHeight - 50)) + 10) + "px");
const leftArt = String((Math.floor(Math.random() * (window.innerWidth/4 - preHeight - 10)) + 10) + "px");
const leftImage = String((Math.floor(window.innerWidth/3 + Math.random() * 100) + "px"));
let intViewportWidth = window.innerWidth;
console.log(height);

const art = document.createElement('img');
art.src = artArr[num];
art.style.position = 'absolute';
art.style.top = topp;
art.style.height = height;
art.style.left = leftArt;
art.style.border = "1px solid black";
document.getElementById('images').appendChild(art);
console.log(artArr[num])

const image = document.createElement('img');
image.src = imgArr[num];
image.style.position = 'absolute';
image.style.top = topp;
image.style.height = height;
image.style.left = leftImage;
image.style.border = "1px solid black";
document.getElementById('images').appendChild(image);

// var x = 0;
// var y = 0;
// document.addEventListener('mousemove', (event) => {
// 	x = event.clientX;     // Get the horizontal coordinate
//     y = event.clientY;     // Get the vertical coordinate
//     console.log(x);
// });


/* //this prints them all out in a grid
for (let i = 0; i < imgArr.length; i++) {
    const image = document.createElement('img');
    image.src = imgArr[i];
    image.style.width = "250px";
    image.style.height = "150px";
    document.getElementById('images').appendChild(image);    
} */

