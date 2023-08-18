// Når man klikker på et link i mobilmenuen så lukkes menuen med det samme
let tryk = document.querySelectorAll(".menu-section .menu > div > div > ul > li > a");
for (let i = 0; i < tryk.length; i++) {
  tryk[i].addEventListener("click", () => {
    document.getElementsByClassName("toggler")[0].checked = false;
    //burde også få menuen til at bevæge sig ind i midten... eller flytte overskriften 
  })
}