let myImage = document.querySelector('div#article img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'image/image1.jpg') {
      myImage.setAttribute('src', 'image/figure_shock.png');
    } else {
      myImage.setAttribute('src', 'image/image1.jpg');
    }
}