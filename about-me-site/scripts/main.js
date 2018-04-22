var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/reiki-image.jpg') {
      myImage.setAttribute ('src','images/reiki-image2.jpg');
    } else {
      myImage.setAttribute ('src','images/reiki-image.jpg');
    }
}
