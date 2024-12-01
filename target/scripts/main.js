var myImage = document.querySelector("img");
var myButton = document.querySelector("button");
var myHeading = document.querySelector("h5");

function setUserName() {
    let myName = prompt("Please enter your name.");
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla is cool, ' + myName;
  }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    let storedName = localStorage.getItem("name");
    myHeading.innerHTML = "Mozilla is cool, " + storedName;
}

myButton.onclick = function () {
    setUserName();
};
  
  
myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/Google_2015_logo.svg.webp") {
    myImage.setAttribute("src", "images/video-klip-rick-roll-dari-rick-astley-sudah-ditonton-1-miliar-kali-di-youtube55.webp");
  } else {
    myImage.setAttribute("src", "Google_2015_logo.svg.webp");
  }
};