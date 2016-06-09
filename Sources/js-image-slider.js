
var slideIndex = 0;
var Temps_chgt = 3000;
carousel();

// fonction qui sert a faire défiler les images toutes les x secondes
function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1} 
    x[slideIndex-1].style.display = "block"; 
    setTimeout(carousel, Temps_chgt); // Change image every 2 seconds
}



slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    x[slideIndex-1].style.display = "block"; 
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}


// var galleryarray=new Array();
// var slideIndex = 0;
// var Temps_chgt = 3000;
// carousel();

// // fonction qui sert a faire défiler les images toutes les x secondes
// function carousel() {
//     var i;
//     // var x = document.getElementsByClassName("mySlides");
//     for (i = 0; i < galleryarray.length; i++) {
//       galleryarray[i].style.display = "none"; 
//     }
//     slideIndex++;
//     if (slideIndex > galleryarray.length) {slideIndex = 1} 
//     galleryarray[slideIndex-1].style.display = "block"; 
//     setTimeout(carousel, Temps_chgt); // Change image every 2 seconds
// }



// slideIndex = 1;
// showDivs(slideIndex);

// function plusDivs(n) {
//     showDivs(slideIndex += n);
// }

// function showDivs(n) {
//     var i;
//     // var x = document.getElementsByClassName("mySlides");
//     if (n > galleryarrayx.length) {slideIndex = 1} 
//     if (n < 1) {slideIndex = galleryarray.length} ;
//     for (i = 0; i < galleryarray.length; i++) {
//         galleryarray[i].style.display = "none"; 
//     }
//     galleryarray[slideIndex-1].style.display = "block"; 
// }

// function currentDiv(n) {
//   showDivs(slideIndex = n);
// }



var _getAllFilesFromFolder = function(dir) {

    var filesystem = require("fs");
    var results = [];

    filesystem.readdirSync(dir).forEach(function(file) {

        file = dir+'/'+file;
        var stat = filesystem.statSync(file);

        if (stat && stat.isDirectory()) {
            results = results.concat(_getAllFilesFromFolder(file))
        } else results.push(file);

    });

    return results;

};
