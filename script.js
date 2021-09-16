const imgArr = [
    "forest/forestgif.gif",
    "image/imagegif.gif",
    "painting/paintinggif.gif",
    "video/videogif.gif",
    "sculpture/sculpturegif.gif",
    "triangle/trianglegif.gif",
    "eager/eagergif.gif",
    "tired/tiredgif.gif",
    "anxious/anxiousgif.gif",
    "excited/excitedgif.gif",
    "happy/happygif.gif",
    "sad/sadgif.gif",
    "blob/blobgif.gif",
    "square/squaregif.gif",
    "circle/circlegif.gif",
    "cone/conegif.gif",
    "cube/cubegif.gif",
    "aurora/auroragif.gif",
    "lake/lakegif.gif",
    "mountain/mountaingif.gif",
    "lightning/lightninggif.gif",
    "ice/icegif.gif",
    "geometric/geometricgif.gif",
    "book/bookgif.gif",
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
    text();
    art();
    gif();

    function text(){
        const word = document.createTextNode(wordArr[num]);
        document.getElementById('images').style.color = 'white';
        document.getElementById('images').style.fontSize = '30px';
        document.getElementById('images').appendChild(word);
    }
    function art(){
        const art = document.createElement('img');
        art.src = artArr[num];
        art.style.margin = "120px";
        art.style.border = "1px solid black";
        document.getElementById('images').appendChild(art);
        console.log(artArr[num])
    }

    function gif(){
        const image = document.createElement('img');
        image.src = imgArr[num];
        image.style.width = "700px";
        image.style.border = "1px solid black";
        document.getElementById('images').appendChild(image);
    }


/*     //this prints them all out in a grid
    for (let i = 0; i < imgArr.length; i++) {
        const image = document.createElement('img');
        image.src = imgArr[i];
        image.style.width = "250px";
        image.style.height = "150px";
        document.getElementById('images').appendChild(image);        
    } */