//images slides holiday START
var slideIndex = [1, 1, 1, 1, 1];
var slideId = ["holiday1", "holiday2", "holiday3", "holiday4"];
  showSlides(1, 0);//holidai1
  showSlides(1, 1);//holidai2
  showSlides(1, 2);//holidai3
  showSlides(1, 3);//holidai4

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
//images slides holiday END