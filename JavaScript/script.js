// var firstHeading = document.getElementsByClassName("hello")[0];
// var myButton = document.getElementById("button");
// var myText = "Hello World x";
// var myNumber = 2;
//
// function changeTheText() {
//   if (firstHeading.innerHTML == "Hello World!") {
//   firstHeading.innerHTML = myText + myNumber;
//   } else {
//     firstHeading.innerHTML = "Texten stämde inte överens med Hello World! så jag ändrar den till detta istället";
//   }
//  }
//
var pictures = ["greg-rakozy-oMpAz-DN-9I-unsplash.jpg", "alberto-frias-gBhNE9eefYE-unsplash.jpg", "mayur-gala-2PODhmrvLik-unsplash", "robert-lukeman-_RBcxo9AU-U-unsplash.jpg", "joelvalve-Hwy7pNJtWy8-unsplash.jpg"];

var arrayLength = pictures.length;
var myList = " ";
var imageContainer = document.getElementById("image-container");
var i = 0;

for (var i = 0; i < arrayLength; i++) {
  myList += "<img src='" + images[i] + "class='images'>";
}

// while (i < arrayLength) {
//   myList += "<li>" + ux[i] + "</li>";
//   i++;
// }
// myList += "</ul>";

// var text = " ";
// var i = 0;
//
// while (i < 10) {
//   text += "<br>Siffran är" + i;
//   i++;
// }

// document.getElementById("minArrayDiv").innerHTML = myList;

// changeTheText()

// var myButton = document.getElementById("button");
// var myText = "Hello World x";
// var myNumber = 2;
//
// myButton.addEventListener("click", function(){
//   this.classList.toggle("blue-background");
// });
