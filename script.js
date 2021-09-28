const imgArr = [
    "forest/forestgif2.gif",
    "image/imagegif2.gif",
    "painting/paintinggif2.gif",
    "video/videogif2.gif",
    "sculpture/sculpturegif2.gif",
    "triangle/trianglegif2.gif",
    "eager/eagergif2.gif",
    "tired/tiredgif2.gif",
    "anxious/anxiousgif2.gif",
    "excited/excitedgif2.gif",
    "happy/happygif2.gif",
    "sad/sadgif2.gif",
    "blob/blobgif2.gif",
    "square/squaregif2.gif",
    "circle/circlegif2.gif",
    "cone/conegif2.gif",
    "cube/cubegif2.gif",
    "aurora/auroragif2.gif",
    "lake/lakegif2.gif",
    "mountain/mountaingif2.gif",
    "lightning/lightninggif2.gif",
    "ice/icegif2.gif",
    "geometric/geometricgif2.gif",
    "book/bookgif2.gif",
    "poem/poemgif2.gif",
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
if (preHeight < 150) {preHeight = preHeight + 120;}
const height = String(preHeight + "px");
const topp = String((Math.floor(Math.random() * (window.innerHeight - preHeight - 50)) + 10) + "px");
const leftArt = String((Math.floor(Math.random() * (window.innerWidth/4 - preHeight - 10)) + 10) + "px");
const leftImage = String((Math.floor(window.innerWidth/4 + Math.random() * 100) + "px"));
let intViewportWidth = window.innerWidth;

const art = document.createElement('img');
art.src = artArr[num];
art.style.position = 'absolute';
art.style.top = "50px";//topp;
art.style.height = "250px";//height;
art.style.left = "50px";//leftArt;
//art.style.border = "1px solid black";
art.style.boxShadow = "20px 20px 60px rgba(0, 0, 0, 0.9)";
document.getElementById('images').appendChild(art);
console.log(artArr[num])

const image = document.createElement('img');
image.src = imgArr[num];
image.style.position = 'absolute';
image.style.top = topp;
image.style.height = "275px";//height;
image.style.left = leftImage;
//image.style.border = "1px solid black";
image.style.boxShadow = "20px 20px 60px rgba(0, 0, 0, 0.9)";
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

