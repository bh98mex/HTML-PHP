var myApartment = new Array();
myApartment[1] = new Image();
myApartment[2] = new Image();
myApartment[3] = new Image();
myApartment[4] = new Image();
myApartment[5] = new Image();
myApartment[6] = new Image();
myApartment[7] = new Image();
myApartment[8] = new Image();
myApartment[9] = new Image();

myApartment[1].src = "assets/img/scenery/Cheval1.jpg";
myApartment[2].src = "assets/img/scenery/Cheval2.jpg";
myApartment[3].src = "assets/img/scenery/Cheval3.jpg";
myApartment[4].src = "assets/img/scenery/Cheval4.jpg";
myApartment[5].src = "assets/img/scenery/Cheval5.jpg";
myApartment[6].src = "assets/img/scenery/Cheval6.jpg";
myApartment[7].src = "assets/img/scenery/Cheval7.jpg";
myApartment[8].src = "assets/img/scenery/Cheval8.jpg";
myApartment[9].src = "assets/img/scenery/Cheval9.jpg";

var slideNumber = 1;
var totalNrOfSlides = myApartment.length-1;

function displaySlide(direction) {
    if (direction == "next"){
        (slideNumber == totalNrOfSlides) ? slideNumber = 1 : slideNumber++;
    } else {
        (slideNumber == 1) ? slideNumber = totalNrOfSlides : slideNumber--;
    }
    if (document.images){
        document.slideframe.src = myApartment[slideNumber].src;
    }
}


