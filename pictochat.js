const canvas = document.createElement('canvas');
const button = document.createElement('button');
const eraser = document.createElement('button');
var input = document.createElement("input");
const slider = document.createElement("input");
const style = document.createElement("style");
slider.type = "range";
slider.className = 'stroke';
slider.min = '1'; 
slider.max = '10'; 
slider.value = '2'; 
document.body.appendChild(slider);
input.type = "color";
input.className = "input";
document.body.appendChild(input); 
eraser.textContent = 'Eraser';
eraser.className = "eraser"
document.body.appendChild(eraser);
const ctx = canvas.getContext('2d');
canvas.className = 'draw';
canvas.height = 300;
document.body.appendChild(canvas);
ctx.strokeStyle = '#000'; 
ctx.lineWidth = 2;       
let isDrawing = false;
style.InnerHTML = `
 @font-face {
    font-family: 'Nds';
    src: url('https://pipe.miroware.io/5f586dbe02740c4a7fb69f99/Personal%20Sites/Fonts/NDS12.ttf');
}

.draw{
     position: fixed;
     bottom: 20px;
     right: 5px;
     width: 300px;
     border: 2px solid #373737;
  border-bottom: 2px solid #cecece;
     background: white;
     z-index: 999;
     image-rendering: pixelated;
}



.button {
     position: fixed;
     bottom: 0;
     right: 0px;
     width: 150px;
     background: url("https://frozenmicroobes.neocities.org/images/bar.png");
     border: 2px solid #373737;
     border-bottom: 2px solid #cecece;
     font-family: 'Nds';
     z-index: 999;
}

.button2 {
     position: fixed;
     bottom: 0;
     right: 150px;   
     width: 150px;
     background: url("https://frozenmicroobes.neocities.org/images/bar.png");
     border: 2px solid #373737;
     border-bottom: 2px solid #cecece;
     font-family: 'Nds';
     z-index: 999;
}


.input {
  position: fixed;
     bottom: 320px;
     right: 5px;
     width: 150px;
     border: 2px solid black;
     z-index: 999;
}
.eraser {
  position: fixed;
     bottom: 320px;
     right: 150px;
     width: 150px;
     height: 29px;
     background: url("https://frozenmicroobes.neocities.org/images/bar.png");
     border: 2px solid #373737;
     border-bottom: 2px solid #cecece;
     font-family: 'Nds';
     z-index: 999;
}

.stroke {
  position: fixed;
     bottom: 350px;
     right: 5px;
     width: 300px;
     border: 2px solid black;
     z-index: 999;
}`;
document.head.appendChild(style);
// dictionary
 
function drawBackground() {
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}
 
drawBackground();
 
canvas.addEventListener('mousedown', (mouse) => {
        isDrawing = true;
        ctx.beginPath();
        ctx.moveTo(mouse.offsetX, mouse.offsetY);
});
    canvas.addEventListener('mousemove', (e) => {
        if (isDrawing) {
            ctx.lineTo(e.offsetX, e.offsetY);
            ctx.stroke();
        }
    });
 
    canvas.addEventListener('mouseup', () => {
        isDrawing = false;
    });
 
    canvas.addEventListener('mouseleave', () => {
        isDrawing = false;
    });
 
// drawing function
 
const copyButt = document.createElement('button'); //haha it says butt!!!
    copyButt.innerText = 'Copy';
    document.body.appendChild(copyButt);
    copyButt.className = 'button';
    
function copyCanvasToClipboard() {
        canvas.toBlob(blob => {
            const clipboardItem = new ClipboardItem({ 'image/png': blob });
            navigator.clipboard.write([clipboardItem]).then(() => {
            }).catch(err => {
                console.error('could not copy canvas: ', err);
            });
        });
    }
 
    copyButt.addEventListener('click', copyCanvasToClipboard);
 
 
const clearButt = document.createElement('button');
clearButt.innerText = 'Clear';
document.body.appendChild(clearButt);
clearButt.className = 'button2';
 
// Function to clear the canvas
function clearCanvas() {
ctx.clearRect(0, 0, canvas.width, canvas.height);
drawBackground();
}
clearButt.addEventListener('click', clearCanvas);
 
 
input.addEventListener('input', (e) => {
            ctx.strokeStyle = e.target.value;
        });
 
eraser.addEventListener('click', () => {
   input.value = '#FFFFFF';
   ctx.strokeStyle = '#FFFFFF';
   ctx.lineWidth = 5;
   slider.value = 5;       
});
 
slider.addEventListener('input', (e) =>{
  ctx.lineWidth = e.target.value;
});
