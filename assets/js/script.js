var about= document.getElementById("button-about");
var portfolio = document.getElementById("button-portfolio");
var contact = document.getElementById("button-contact");

about.onclick = function() {
    console.log("button clicked!")
    location.href = "./index.html#about"
};
portfolio.onclick = function() {
    console.log("button clicked!")
    location.href = "./pages/portfolio.html"
};
contact.onclick = function() {
    console.log("button clicked!")
    location.href = "./pages/contact.html"
};