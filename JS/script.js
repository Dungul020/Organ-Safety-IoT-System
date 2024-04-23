// Script to open and close sidebar
function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("myOverlay").style.display = "block";
}
 
function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("myOverlay").style.display = "none";
}

// Modal Image Gallery
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}

// Get all the flip cards
var flipCards = document.querySelectorAll(".flip-card");

// Loop through each flip card
for (var i = 0; i < flipCards.length; i++) {
  // Add a click event listener to each flip card
  flipCards[i].addEventListener("click", function() {
    // Toggle the class flipped on the clicked flip card
    this.classList.toggle("flipped");
  });
}
