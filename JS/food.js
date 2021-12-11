//images slides food START
var slideIndex = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
var slideId = ["food1", "food2", "food3", "food4", "food5", "food6", "food7", "food8", "food9", "food10", "food11"];
  showSlides(1, 0);//food1
  showSlides(1, 1);//food2
  showSlides(1, 2);//food3
  showSlides(1, 3);//food4
  showSlides(1, 4);//food5
  showSlides(1, 5);//food6
  showSlides(1, 6);//food7
  showSlides(1, 7);//food8
  showSlides(1, 8);//food9
  showSlides(1, 9);//food10
  showSlides(1, 10);//food11
function plusSlides(n, no) {
  showSlides((slideIndex[no] += n), no);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {
    slideIndex[no] = 1;
  }
  if (n < 1) {
    slideIndex[no] = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex[no] - 1].style.display = "block";
}
//images slides food END