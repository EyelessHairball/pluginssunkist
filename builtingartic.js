var iframe = document.createElement('iframe');
var wrapper = document.createElement('div');
iframe.src = "https://garticphone.com/";
iframe.frameBorder = "0"; 
wrapper.classList.add('garticwrapper');
iframe.classList.add('garticphone');
wrapper.appendChild(iframe);
document.body.appendChild(wrapper);
var style = document.createElement('style');
var button = document.createElement('button');
button.id = 'togglebuttongartic';
button.innerHTML = 'Gartic Phone';
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

button.addEventListener('click', function() {
  if (wrapper.style.display === "none") {
    wrapper.style.display = "block"; 
  } else {
    wrapper.style.display = "none";
  }
});
