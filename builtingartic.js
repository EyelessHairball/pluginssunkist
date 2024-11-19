var iframe = document.createElement('iframe');
var garticdiv = document.createElement('div');
iframe.src = "https://garticphone.com/";
iframe.frameBorder = "0"; 
garticdiv.classList.add('garticwrapper');
iframe.classList.add('garticphone');
garticdiv.appendChild(iframe);
document.body.appendChild(garticdiv);
var style = document.createElement('style');
var togglegartic = document.createElement('button');
togglegartic.id = 'togglebuttongartic';
togglegartic.innerHTML = 'Gartic Phone';
var settings = document.getElementById('thesettings');
style.innerHTML = `
  .garticwrapper {
    resize: both !important;
    overflow:hidden;
    max-width: 100%;
    min-width: 200px;  
    min-height: 300px; 
    background-color: #f0f0f0;
    z-index: 999 !important;
    display: none;
    position: fixed;
    bottom: 5px;
    left: 5px;
  }
  .garticphone{ 
   width: 100% !important;
   min-height: 300px; 
   height: 100% !important;
   overflow: hidden;
  }
  .garticphone *{
  overflow:hidden !important;
  }
`;
document.head.appendChild(style);

// dictionary
settings.appendChild(button);

togglegartic.addEventListener('click', function() {
  if (garticdiv.style.display === "none") {
    garticdiv.style.display = "block"; 
  } else {
    garticdiv.style.display = "none";
  }
});
