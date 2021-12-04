//images slides festival START
var slideIndex = [1, 1, 1, 1, 1, 1, 1, 1];
var slideId = ["festival1", "festival2", "festival3", "festival4", "festival5", "festival6", "festival7", "festival8",];
  showSlides(1, 0);//festival1
  showSlides(1, 1);//festival2
  showSlides(1, 2);//festival3
  showSlides(1, 3);//festival4
  showSlides(1, 4);//festival5
  showSlides(1, 5);//festival6
  showSlides(1, 6);//festival7
  showSlides(1, 7);//festival8

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
//images slides festival END