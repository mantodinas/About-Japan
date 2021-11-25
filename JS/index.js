//images slides holiday START
var slideIndex = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
var slideId = ["holiday1", "holiday2", "holiday3", "holiday4", "holiday5", "holiday6", "holiday7", "holiday8", "holiday9", "holiday10", "holiday11", "holiday12", "holiday13", "holiday14", "holiday15", "holiday16", "holiday17", "holiday18", "holiday19", "holiday20", "holiday21", "holiday22", "holiday23", "holiday24", "holiday25"];
  showSlides(1, 0);//holidai1
  showSlides(1, 1);//holidai2
  showSlides(1, 2);//holidai3
  showSlides(1, 3);//holidai4
  showSlides(1, 4);//holidai5
  showSlides(1, 5);//holidai6
  showSlides(1, 6);//holidai7
  showSlides(1, 7);//holidai8
  showSlides(1, 8);//holidai9
  showSlides(1, 9);//holidai10
  showSlides(1, 10);//holidai11
  showSlides(1, 11);//holidai12
  showSlides(1, 12);//holidai13
  showSlides(1, 13);//holidai14
  showSlides(1, 14);//holidai15
  showSlides(1, 15);//holidai16
  showSlides(1, 16);//holidai17
  showSlides(1, 17);//holidai18
  showSlides(1, 18);//holidai19
  showSlides(1, 19);//holidai20
  showSlides(1, 20);//holidai21
  showSlides(1, 21);//holidai22
  showSlides(1, 22);//holidai23
  showSlides(1, 23);//holidai24
  showSlides(1, 24);//holidai25

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