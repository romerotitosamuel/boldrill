
//  CHANGE IMAGES FROM INITIAL PAGE
window.addEventListener("load", () => {

    var images = [
        'img/img1.jpg',
        'img/img2.jpg',
        'img/img3.jpg',
        'img/img4.jpg'
    ]

    var i= 0;
    function slideChanger() {

        document.slider.src = images[i];

        if (i<3){
            i++;
        }else{
            i=0;
        }
    }
    setInterval(slideChanger, 4000);
});

// HAMBURGUER BUTTON

