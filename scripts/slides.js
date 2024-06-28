let myIndex = 0;
carousel();

function carousel() {
  let i;
  let x = document.getElementsByClassName("container");
  for (i = 0; i < x.length; i++) {
    x[i].classList.remove("active");
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}
  x[myIndex-1].classList.add("active");
  setTimeout(carousel, 17000); // Change image every 17 seconds
}
